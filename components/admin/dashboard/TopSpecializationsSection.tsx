import { TrendingUp } from 'lucide-react';

interface SpecializationTrend {
  name: string;
  applicants: number;
  applications: number;
  growth: number;
}

interface TopSpecializationsSectionProps {
  specializations?: SpecializationTrend[];
}

export default function TopSpecializationsSection({
  specializations = [
    { name: 'Full Stack Development', applicants: 450, applications: 1200, growth: 12 },
    { name: 'Data Science', applicants: 380, applications: 980, growth: 8 },
    { name: 'Frontend Development', applicants: 320, applications: 850, growth: 5 },
    { name: 'Backend Development', applicants: 290, applications: 720, growth: 10 },
    { name: 'DevOps & Cloud', applicants: 210, applications: 480, growth: 15 },
  ],
}: TopSpecializationsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Top Specializations</h2>

      <div className="space-y-4">
        {specializations.map((spec) => (
          <div key={spec.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <p className="font-medium text-gray-900">{spec.name}</p>
              <div className="flex gap-4 mt-1">
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{spec.applicants}</span> Applicants
                </span>
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{spec.applications}</span> Applications
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-600">+{spec.growth}%</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full px-4 py-2 text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium text-sm">
        View All Specializations
      </button>
    </div>
  );
}
