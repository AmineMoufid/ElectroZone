import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-29T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 py-12" id="deals">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-white">
            <Clock className="w-6 h-6" />
            <span className="text-lg font-semibold">FLASH SALE ENDS IN</span>
          </div>

          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-white/80 text-sm md:text-base mt-2">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-white/90 text-lg">
            Don't miss out on our biggest deals of the year!
          </p>
        </div>
      </div>
    </div>
  );
};
