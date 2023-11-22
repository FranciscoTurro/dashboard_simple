import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  user_id: serial('user_id').primaryKey(),
  user_name: text('user_name').unique(),
  password: text('password'),
});

export const sales = pgTable('sales', {
  month_id: integer('month_id').primaryKey(),
  month_name: text('month_name'),
  value: integer('value'),
});

export const prod = pgTable('prod', {
  month_id: integer('month_id').primaryKey(),
  month_name: text('month_name'),
  value: integer('value'),
});

export const attention = pgTable('attention', {
  month_id: integer('month_id').primaryKey(),
  month_name: text('month_name'),
  value: integer('value'),
});
