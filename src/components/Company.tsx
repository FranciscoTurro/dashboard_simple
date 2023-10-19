'use client';
import { trpc } from '../app/trpc/client';
import { calculatePercentage } from '../utils/utils';

export const Company = () => {
  const { data } = trpc.data.getCompanyGoals.useQuery();
  if (!data) return <div>ERROR</div>;

  const percentage = calculatePercentage(data);

  if (percentage < 50) return <div>DESASTRE</div>;
  if (percentage > 50 && percentage < 80) return <div>bien + {data}</div>;
  if (percentage > 80) return <div>ESPECTACULO</div>;
};
