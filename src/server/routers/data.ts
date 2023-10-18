import { z } from 'zod';
import { db } from '../../lib/db';
import { users, attention, prod, sales } from '../../lib/db/schema';
import { protectedProcedure, router } from '../trpc';

export const dataRouter = router({
  getProdData: protectedProcedure.query(async () => {
    return db.query.prod.findMany();
  }),
  getCompanyGoals: protectedProcedure.query(async () => {
    let prodGoal = 0;
    const prodData = await db.query.prod.findMany();
    prodData.map((month) => {
      if (month.value) prodGoal = prodGoal + month.value;
    });
    let salesGoal = 0;
    const salesData = await db.query.sales.findMany();
    salesData.map((sale) => {
      if (sale.value) salesGoal = salesGoal + sale.value;
    });
    let attentionGoal = 0;
    const attentionValue = await db.query.attention.findMany();
    attentionValue.map((attention) => {
      if (attention.value) attentionGoal = attentionGoal + attention.value;
    });

    const total = prodGoal + attentionGoal + salesGoal;
    return total;
  }),
});

//objetivos de la empresa = objetivos de las tres areas juntos
