
import React, { useState } from 'react';
import {
  Shield,
  MonitorSmartphone,
  Activity,
  BarChart2,
  PieChart,
  Terminal,
  Play,
  Pause
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Pie,
  PieChart as RePieChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const Dashboard = () => {
  const [isSimulating, setIsSimulating] = useState(false);

  const attackOccurrences = [
    { name: 'Content Injection', value: 10 },
    { name: 'Remote Access', value: 6 },
    { name: 'Adversary-in-the-Middle', value: 8 }
  ];

  const performanceRate = [
    { name: 'Success', value: 80 },
    { name: 'Failure', value: 20 }
  ];

  const liveMonitorLogs = [
    '> Initializing system...',
    '> Monitoring threats...',
    '> Defense modules active...'
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="p-6 bg-gray-800 text-white shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">EyeSpy AI Dashboard</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {/* Event/Attack Details */}
        <section className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Event/Attack Details</h2>
          <textarea
            className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write a detailed report of the event or attack here..."
          ></textarea>
        </section>

        {/* Occurrence of Attacks */}
        <section className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Occurrence of Attacks</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={attackOccurrences}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {attackOccurrences.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value > 8 ? '#EF4444' : '#10B981'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Performance Rate */}
        <section className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Performance Rate</h2>
          <ResponsiveContainer width="100%" height={200}>
            <RePieChart>
              <Pie
                data={performanceRate}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {performanceRate.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.name === 'Success' ? '#22C55E' : '#EF4444'}
                  />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </section>

        {/* Live Monitor */}
        <section className="bg-white p-5 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Live Monitor</h2>
            <button
              className={`px-4 py-2 rounded-md text-white ${isSimulating ? 'bg-red-500' : 'bg-green-600'}`}
              onClick={() => setIsSimulating(!isSimulating)}
            >
              {isSimulating ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
          <div className="bg-gray-100 p-3 rounded-md font-mono text-green-600 space-y-1">
            {liveMonitorLogs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}
          </div>
        </section>

        {/* MITRE ATT&CK Section */}
        <section className="bg-white p-5 rounded-2xl shadow-md col-span-2">
          <h2 className="text-xl font-semibold mb-2">MITRE ATT&CK Integration Framework</h2>
          <div className="mt-2 border-2 border-dashed border-gray-300 p-4 text-gray-600 text-sm rounded-md">
            <p>
              This section could integrate with the MITRE ATT&CK framework to display tactics,
              techniques, and procedures (TTPs) in an interactive view.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;