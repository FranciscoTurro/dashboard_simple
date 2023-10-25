import { db } from '../../lib/db';
import { protectedProcedure, router } from '../trpc';

export const dataRouter = router({
  getProdData: protectedProcedure.query(async () => {
    const data = await db.query.prod.findMany();
    let total = 0;
    data.forEach((month) => {
      if (!month.value) return;
      total += month.value;
    });
    return total;
  }),
  getSalesData: protectedProcedure.query(async () => {
    const data = await db.query.sales.findMany();
    let total = 0;
    data.forEach((month) => {
      if (!month.value) return;
      total += month.value;
    });
    return total;
  }),
  getAttentionData: protectedProcedure.query(async () => {
    const data = await db.query.attention.findMany();
    let total = 0;
    data.forEach((month) => {
      if (!month.value) return;
      total += month.value;
    });
    return total;
  }),
  getCompanyGoals: protectedProcedure.query(async () => {
    const databases = [db.query.prod, db.query.sales, db.query.attention];
    const total = await Promise.all(
      databases.map(async (query) => {
        const data = await query.findMany();
        return data.reduce((sum, item) => sum + (item.value || 0), 0);
      })
    );
    return total.reduce((sum, value) => sum + value, 0);
  }),
});
