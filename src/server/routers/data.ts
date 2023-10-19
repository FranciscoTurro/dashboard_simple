import { db } from '../../lib/db';
import { protectedProcedure, router } from '../trpc';

export const dataRouter = router({
  getProdData: protectedProcedure.query(async () => {
    return db.query.prod.findMany();
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
