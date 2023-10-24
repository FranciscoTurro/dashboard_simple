'use client';
import { trpc } from '../app/trpc/client';
import { calculatePercentage } from '../utils/utils';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Company = () => {
  const { data } = trpc.data.getCompanyGoals.useQuery();
  if (!data) return <div>ERROR</div>; //work on nextjs13 error handling

  const percentage = calculatePercentage(data);

  return (
    <div className="w-48">
      <CircularProgressbar text={`${percentage}%`} value={percentage} />
    </div>
  );
};
