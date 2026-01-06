import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    if (!uri) {
      global._mongoClientPromise = Promise.reject(new Error('Please define the MONGODB_URI environment variable inside .env.local'))
    } else {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
  }
  clientPromise = global._mongoClientPromise
} else {
  if (!uri) {
    clientPromise = Promise.reject(new Error('Please define the MONGODB_URI environment variable inside .env.local'))
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
}

export default clientPromise

export const connectToDatabase = async () => {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
  }
  
  const client = await clientPromise
  const dbName = process.env.MONGODB_DB || 'rec_plat'
  const db = client.db(dbName)
  return { client, db }
}

// (named export is provided above as `connectToDatabase`)
