'use client';
import { ProgressCircle } from '../../../components/ProgressCircle';
import { trpc } from '../../trpc/client';

const Area = ({ params }: { params: { area: string } }) => {
  const { area } = params;
  const { data } = trpc.data.getAreaMonths.useQuery({ area });
  let greet: string = '';

  if (area !== 'sales' && area !== 'attention' && area !== 'production')
    return <div>error</div>;

  if (area === 'sales') greet = 'Ventas';
  if (area === 'production') greet = 'Producción';
  if (area === 'attention') greet = 'Atención al cliente';

  return (
    <div>
      <h1 className="text-3xl text-scheme_text_highlight font-bold text-center">
        {greet}
      </h1>
      <div className="flex gap-4 mx-80 flex-wrap justify-evenly">
        {data?.map((month) => (
          <ProgressCircle
            type="MONTH"
            name={month.month_name!}
            goalsData={month.value!}
            key={month.month_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Area;
