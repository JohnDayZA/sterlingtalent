import { useState, useEffect } from "react";

const timeZones = [
  { city: "New York", zone: "America/New_York", flag: "🇺🇸" },
  { city: "London", zone: "Europe/London", flag: "🇬🇧" },
  { city: "South Africa", zone: "Africa/Johannesburg", flag: "🇿🇦", highlight: true },
  { city: "Hong Kong", zone: "Asia/Hong_Kong", flag: "🇭🇰" },
  { city: "Tokyo", zone: "Asia/Tokyo", flag: "🇯🇵" },
];

const WorldClocks = () => {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      timeZones.forEach((tz) => {
        newTimes[tz.zone] = new Date().toLocaleTimeString("en-US", {
          timeZone: tz.zone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <p className="text-sm text-white/50 mb-4 uppercase tracking-wider">
        Real-Time Collaboration Across Time Zones
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {timeZones.map((tz) => (
          <div
            key={tz.zone}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm border transition-all ${
              tz.highlight
                ? "bg-primary/20 border-primary/40 ring-2 ring-primary/20"
                : "bg-white/5 border-white/10 hover:border-white/20"
            }`}
          >
            <span className="text-lg">{tz.flag}</span>
            <div className="text-left">
              <p className={`text-xs ${tz.highlight ? "text-primary" : "text-white/50"}`}>
                {tz.city}
              </p>
              <p className={`text-sm font-mono font-semibold ${tz.highlight ? "text-white" : "text-white/80"}`}>
                {times[tz.zone] || "--:--"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClocks;
