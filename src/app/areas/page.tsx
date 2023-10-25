'use client';
import { useRouter } from 'next/navigation';
import { ProgressCircle } from '../../components/ProgressCircle';
import { Button } from '../../components/ui/Button';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { trpc } from '../trpc/client';

const Areas = () => {
  const router = useRouter();

  const { data: prodData } = trpc.data.getProdData.useQuery();
  const { data: salesData } = trpc.data.getSalesData.useQuery();
  const { data: attentionData } = trpc.data.getAttentionData.useQuery();

  if (!prodData || !salesData || !attentionData) return <LoadingSpinner />;

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col gap-4 items-center">
        <ProgressCircle type="AREA" goalsData={prodData} name="Produccion" />
        <Button onClick={() => router.push('/prod')}>Desglose</Button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <ProgressCircle type="AREA" goalsData={salesData} name="Ventas" />
        <Button onClick={() => router.push('/sales')}>Desglose</Button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <ProgressCircle
          type="AREA"
          goalsData={attentionData}
          name="Atencion al cliente"
        />
        <Button onClick={() => router.push('/attention')}>Desglose</Button>
      </div>
    </div>
  );
};

export default Areas;
