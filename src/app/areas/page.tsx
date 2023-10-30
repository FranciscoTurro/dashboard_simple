'use client';
import { ProgressCircle } from '../../components/ProgressCircle';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { trpc } from '../trpc/client';

const Areas = () => {
  const { data: prodData } = trpc.data.getAreaTotal.useQuery({
    area: 'production',
  });
  const { data: attentionData } = trpc.data.getAreaTotal.useQuery({
    area: 'attention',
  });
  const { data: salesData } = trpc.data.getAreaTotal.useQuery({
    area: 'sales',
  });

  if (!prodData || !salesData || !attentionData) return <LoadingSpinner />;

  return (
    <div className="flex justify-evenly">
      <ProgressCircle
        routing="/areas/production"
        type="AREA"
        goalsData={prodData}
        name="Produccion"
      />
      <ProgressCircle
        routing="/areas/sales"
        type="AREA"
        goalsData={salesData}
        name="Ventas"
      />
      <ProgressCircle
        routing="/areas/attention"
        type="AREA"
        goalsData={attentionData}
        name="Atencion al cliente"
      />
    </div>
  );
};

export default Areas;
