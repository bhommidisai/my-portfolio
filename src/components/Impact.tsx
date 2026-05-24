import React from 'react';

const metrics = [
  { label: "Experience", value: "4.5+ Years" },
  { label: "Disaster Recovery", value: "RTO < 30m" },
  { label: "Cost Savings", value: "20% Reduction" },
  { label: "Migrations", value: "PCF to EKS" },
];

const Impact = () => {
  return (
    <div className="bg-[#030014] py-10 px-10 md:px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-purple-500/30 pt-10">
        {metrics.map((m, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{m.value}</h3>
            <p className="text-purple-400 text-sm md:text-base uppercase tracking-widest">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;