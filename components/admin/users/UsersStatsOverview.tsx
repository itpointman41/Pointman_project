interface StatsData {
  total: number;
  active: number;
  suspended: number;
  applicants: number;
  new30: number;
}

export default function UsersStatsOverview({stats}: {stats: StatsData}){
  const cards = [
    {title: 'Total Users', value: stats.total},
    {title: 'Active Users', value: stats.active},
    {title: 'Suspended Users', value: stats.suspended},
    {title: 'Applicants', value: stats.applicants},
    {title: 'New (30d)', value: stats.new30}
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {cards.map(c=> (
        <div key={c.title} className="p-4 bg-white border rounded-md shadow-sm">
          <div className="text-sm text-gray-500">{c.title}</div>
          <div className="mt-2 text-lg font-semibold text-gray-900">{c.value}</div>
        </div>
      ))}
    </div>
  )
}
