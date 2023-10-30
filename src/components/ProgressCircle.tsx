'use client';
import { calculatePercentage } from '../utils/utils';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { MAX_AREA, MAX_COMPANY, MAX_MONTH, TYPE } from '../types/variables.d';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';

interface ProgressCircleProps {
  name: string;
  goalsData: number;
  type: TYPE;
  routing?: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  goalsData,
  name,
  type,
  routing,
}) => {
  const router = useRouter();

  const percentage = calculatePercentage(goalsData, type);

  let typeMax: number = 0;
  if (type === 'COMPANY') typeMax = MAX_COMPANY;
  if (type === 'AREA') typeMax = MAX_AREA;
  if (type === 'MONTH') typeMax = MAX_MONTH;

  return (
    <div className="flex flex-col items-center gap-6 pt-14">
      <div className="text-2xl">
        <p>{name}</p>
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
          Estado de los objetivos: {goalsData} / {typeMax}
        </p>
      </div>
      {routing ? (
        <Button onClick={() => router.push(routing)}>Desglose</Button>
      ) : null}
    </div>
  );
};
