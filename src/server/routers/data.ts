import { z } from 'zod';
import { db } from '../../lib/db';
import { protectedProcedure, router } from '../trpc';
import { asc } from 'drizzle-orm';
import { attention, prod, sales } from '../../lib/db/schema';

export const dataRouter = router({
  getAreaTotal: protectedProcedure
    .input(z.object({ area: z.string() })) //validate this
    .query(async ({ input }) => {
      let data;
      if (input.area === 'attention')
        data = await db.query.attention.findMany();
      if (input.area === 'sales') data = await db.query.sales.findMany();
      if (input.area === 'production') data = await db.query.prod.findMany();
      let total = 0;
      data!.forEach((month) => {
        if (!month.value) return;
        total += month.value;
      });
      return total;
    }),
  getAreaMonths: protectedProcedure
    .input(z.object({ area: z.string() })) //validate this
    .query(async ({ input }) => {
      let data;
      if (input.area === 'attention')
        data = await db.query.attention.findMany({
          orderBy: [asc(attention.month_id)],
        });
      if (input.area === 'sales')
        data = await db.query.sales.findMany({
          orderBy: [asc(sales.month_id)],
        });
      if (input.area === 'production')
        data = await db.query.prod.findMany({
          orderBy: [asc(prod.month_id)],
        });
      return data;
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
