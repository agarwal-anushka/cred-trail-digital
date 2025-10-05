import { NSQFLevel, nsqfLevelDescriptions } from '@/data/mockData';
import { CheckCircle } from 'lucide-react';

interface NSQFProgressProps {
  currentLevel: NSQFLevel;
  completedLevels?: NSQFLevel[];
}

const NSQFProgress = ({ currentLevel, completedLevels = [] }: NSQFProgressProps) => {
  const levels: NSQFLevel[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">NSQF Skill Ladder</h3>
        <span className="text-sm text-muted-foreground">
          Current Level: <span className="font-semibold text-primary">Level {currentLevel}</span>
        </span>
      </div>

      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
        <div 
          className="absolute left-4 top-0 w-0.5 bg-primary transition-all duration-1000"
          style={{ height: `${(currentLevel / 10) * 100}%` }}
        />

        {/* Level items */}
        <div className="space-y-4">
          {levels.reverse().map((level) => {
            const isCompleted = completedLevels.includes(level) || level <= currentLevel;
            const isCurrent = level === currentLevel;

            return (
              <div
                key={level}
                className={`relative flex items-start gap-4 pl-10 animate-fade-in ${
                  isCompleted ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div
                  className={`absolute left-2 flex h-5 w-5 items-center justify-center rounded-full transition-all ${
                    isCompleted
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  } ${isCurrent ? 'ring-4 ring-primary/20 animate-pulse-glow' : ''}`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <span className="text-xs font-bold">{level}</span>
                  )}
                </div>

                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Level {level}</span>
                    {isCurrent && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {nsqfLevelDescriptions[level]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NSQFProgress;
