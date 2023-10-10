import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  user_id: serial('user_id').primaryKey(),
  user_name: text('user_name').unique(),
  password: text('password'),
});

export const companies = pgTable('companies', {
  company_id: serial('company_id').primaryKey(),
  company_name: text('company_name').unique(),
});

export const company_areas = pgTable('company_areas', {
  area_id: serial('area_id').primaryKey(),
  company_id: integer('company_id').references(() => companies.company_id),
  area_name: text('area_name').unique(),
  current_value: integer('current_value'), //sum of all month goals
  goal_value: integer('goal_value'), //hard coded
});

export const monthly_goals = pgTable('monthly_goals', {
  goal_id: serial('goal_id').primaryKey(),
  area_id: integer('area_id').references(() => company_areas.area_id),
  month: integer('month'), //can i set min 1 and max 12?
  goal_value: integer('goal_value'),
});
