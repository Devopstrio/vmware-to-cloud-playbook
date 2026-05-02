import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { 
  Cloud, 
  Search, 
  Activity,
  ArrowUpRight,
  TrendingDown,
  Clock,
  Database,
  Cpu,
  ChevronRight,
  CheckCircle,
  Zap,
  Target,
  Briefcase
} from 'lucide-react';

const waveData = [
  { name: 'Wave 1', migrated: 45, remaining: 200 },
  { name: 'Wave 2', migrated: 120, remaining: 125 },
  { name: 'Wave 3', migrated: 80, remaining: 165 },
  { name: 'Wave 4', migrated: 10, remaining: 235 },
];

const KPI_CARDS = [
  { title: 'Total Workloads', value: '1,450', trend: '+12', color: 'sky', icon: Database },
  { title: 'Cloud Transition', value: '24%', trend: '+4%', color: 'sky', icon: Cloud },
  { title: 'Estimated ROI', value: '14 mo', trend: '-2 mo', color: 'emerald', icon: Target },
  { title: 'Success Rate', value: '99.2%', trend: '+0.1%', color: 'emerald', icon: CheckCircle },
];

const MigrationDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Migration Command Center</h1>
          <p className="text-slate-400">Enterprise-grade VMware modernization, wave planning, and cloud transformation orchestration.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-slate-800">
            Export Wave Plan
          </button>
          <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-sky-600/20">
            Initiate Migration Wave
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-sky-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-sky-400`} />
              </div>
              <div className={`text-xs font-medium ${card.color === 'emerald' ? 'text-emerald-400' : 'text-sky-400'}`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Migration Velocity */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Migration Progress by Wave</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#1e293b' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="migrated" fill="#0ea5e9" stackId="a" radius={[4, 4, 0, 0]} name="Migrated VMs" />
                <Bar dataKey="remaining" fill="#334155" stackId="a" radius={[4, 4, 0, 0]} name="Remaining" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strategy Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">6R Strategy Distribution</h3>
          <div className="flex-1 space-y-6">
            {[
              { label: 'Rehost (Lift & Shift)', score: 42, color: 'bg-sky-500', status: 'READY' },
              { label: 'Replatform (Tinker)', score: 28, color: 'bg-sky-500', status: 'IN_REVIEW' },
              { label: 'Refactor (Modernize)', score: 15, color: 'bg-emerald-500', status: 'PLANNING' },
              { label: 'Retire / Retain', score: 15, color: 'bg-slate-500', status: 'STABLE' },
            ].map((node) => (
              <div key={node.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{node.label}</span>
                  <span className="text-slate-400 font-bold">{node.score}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${node.color}`} style={{ width: `${node.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex gap-3">
            <Zap className="text-emerald-400 shrink-0" size={18} />
            <p className="text-xs text-slate-400">Optimization Opportunity: <span className="text-emerald-400 font-bold">12% additional savings</span> identified by refactoring <span className="text-sky-400 font-bold">Legacy Java</span> workloads to Cloud-Native containers.</p>
          </div>
        </div>
      </div>

      {/* Migration Inventory Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Live Workload Inventory</h3>
          <button className="text-sky-400 hover:text-sky-300 text-sm font-medium">View Detailed Readiness</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">VM Name / OS</th>
                <th className="px-6 py-4 font-semibold">Discovery Source</th>
                <th className="px-6 py-4 font-semibold">Strategy</th>
                <th className="px-6 py-4 font-semibold">Readiness</th>
                <th className="px-6 py-4 font-semibold">Wave</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'db-srv-prod-01', os: 'Windows 2019', source: 'vCenter-PROD', strategy: 'REHOST', ready: '95%', wave: 'Wave 1' },
                { name: 'web-front-ha', os: 'RHEL 8.4', source: 'vCenter-PROD', strategy: 'REPLATFORM', ready: '82%', wave: 'Wave 2' },
                { name: 'legacy-reporting', os: 'CentOS 6.5', source: 'vCenter-OLD', strategy: 'REFACTOR', ready: '45%', wave: 'Wave 3' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-200">{row.name}</span>
                      <span className="text-xs text-slate-500">{row.os}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.source}</td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold px-2 py-1 rounded border border-sky-500/20 bg-sky-500/10 text-sky-400">
                      {row.strategy}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-12 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: row.ready }}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-400">{row.ready}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-bold tracking-widest">{row.wave}</td>
                  <td className="px-6 py-4">
                    <button className="text-sky-400 hover:text-sky-300 text-xs font-bold uppercase tracking-wider">
                      Migrate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MigrationDashboard;
