interface ApplicationStatus {
  name: string;
  count: number;
  color: string;
  percentage: number;
}

interface ApplicationsStatusChartProps {
  data?: ApplicationStatus[];
}

export default function ApplicationsStatusChart({ 
  data = [
    { name: 'Submitted', count: 1200, color: 'bg-blue-500', percentage: 21 },
    { name: 'Under Review', count: 1800, color: 'bg-yellow-500', percentage: 31 },
    { name: 'Interview', count: 1100, color: 'bg-purple-500', percentage: 19 },
    { name: 'Hired', count: 1200, color: 'bg-green-500', percentage: 21 },
    { name: 'Rejected', count: 520, color: 'bg-red-500', percentage: 8 },
  ],
}: ApplicationsStatusChartProps) {
  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-100 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Application Status Distribution</h2>
      
      <div className="space-y-4">
        {data.map((status) => (
          <div key={status.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{status.name}</span>
              <span className="text-sm font-semibold text-gray-900">{status.count} ({status.percentage}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${status.color}`}
                style={{ width: `${status.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Total Applications: <span className="font-semibold text-gray-900">{total.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
}
