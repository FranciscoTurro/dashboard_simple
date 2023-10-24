'use client';
import { trpc } from '../app/trpc/client';
import { calculatePercentage } from '../utils/utils';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { COMPANY_NAME, MAX_COMPANY } from '../types/variables.d';
import { Button } from './ui/Button';

export const Company = () => {
  const { data: goalsData } = trpc.data.getCompanyGoals.useQuery();
  if (!goalsData) return <LoadingSpinner />;

  const percentage = calculatePercentage(goalsData);

  return (
    <div className="w-full flex flex-col items-center gap-6 pt-14">
      <div className="text-2xl">
        <p>{COMPANY_NAME}</p>
      </div>
      <div className="w-48">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#e8ddff',
            textColor: '#e8ddff',
            trailColor: '#414365',
          })}
          text={`${percentage}%`}
          value={percentage}
        />
      </div>
      <div className="text-2xl">
        <p>
          Estado de los objetivos: {goalsData} / {MAX_COMPANY}
        </p>
      </div>
      <div className="flex gap-4">
        <Button>Desglose</Button>
      </div>
    </div>
  );
};
