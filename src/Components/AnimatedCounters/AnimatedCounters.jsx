import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AnimatedCounters = ({ doctors }) => {
  const doctorCount = doctors.length;

  const stats = [
    { end: doctorCount, suffix: "+", label: "Registered Doctors" },
    { end: 85000, suffix: "+", label: "Happy Patients" },
    { end: 50, suffix: "+", label: "Specializations" },
    { end: 15, suffix: " yrs", label: "Years of Experience" },
  ];

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.6 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-5xl font-extrabold">Special Infos</h1>
        <h3 className="text-base font-normal">
          Numbers that tell our story, growth you can see in motion.
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-extrabold text-green-500">
              {inView && (
                <CountUp
                  end={stat.end}
                  duration={5}
                  suffix={stat.suffix}
                  separator=","
                />
              )}
            </div>
            <p className="mt-2 text-gray-300 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounters;
