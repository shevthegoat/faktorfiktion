import { cn } from "@/lib/utils";

interface AuthenticityMeterProps {
  level: string;
  score: number;
  className?: string;
}

export function AuthenticityMeter({ level, score, className }: AuthenticityMeterProps) {
  const getBarColor = (score: number) => {
    return 'bg-black';
  };

  const getTextColor = (level: string) => {
    const normalizedLevel = level.toLowerCase().replace(' ', '-');
    return `text-authenticity-${normalizedLevel}`;
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Authenticity Level</span>
        <span className={cn("text-sm font-semibold", getTextColor(level))}>{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={cn("h-3 rounded-full transition-all duration-500", getBarColor(score))}
          style={{ width: `${score}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Fake</span>
        <span>Most Likely Fake</span>
        <span>Not Sure</span>
        <span>Most Likely Real</span>
        <span>Real</span>
      </div>
    </div>
  );
}
