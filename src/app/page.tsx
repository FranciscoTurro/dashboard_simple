'use client';
import { ProgressCircle } from '../components/ProgressCircle';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { COMPANY_NAME } from '../types/variables.d';
import { trpc } from './trpc/client';

const Home = () => {
  const { data: goalsData } = trpc.data.getCompanyGoals.useQuery();
  if (!goalsData) return <LoadingSpinner />;
  return (
    <div className="pt-10">
      <ProgressCircle
        routing="/areas"
        type="COMPANY"
        name={COMPANY_NAME}
        goalsData={goalsData}
      />
    </div>
  );
};

export default Home;
