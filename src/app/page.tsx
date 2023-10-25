'use client';
import { ProgressCircle } from '../components/ProgressCircle';
import { Button } from '../components/ui/Button';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { COMPANY_NAME } from '../types/variables.d';
import { trpc } from './trpc/client';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const { data: goalsData } = trpc.data.getCompanyGoals.useQuery();
  if (!goalsData) return <LoadingSpinner />;
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <ProgressCircle
        type="COMPANY"
        name={COMPANY_NAME}
        goalsData={goalsData}
      />
      <Button onClick={() => router.push('/areas')}>Desglose</Button>
    </div>
  );
};

export default Home;
