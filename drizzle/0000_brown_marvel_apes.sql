CREATE TABLE IF NOT EXISTS "companies" (
	"company_id" serial PRIMARY KEY NOT NULL,
	"company_name" text,
	CONSTRAINT "companies_company_name_unique" UNIQUE("company_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "company_areas" (
	"area_id" serial PRIMARY KEY NOT NULL,
	"company_id" integer,
	"area_name" text,
	"current_value" integer,
	"goal_value" integer,
	CONSTRAINT "company_areas_area_name_unique" UNIQUE("area_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"user_name" text,
	"password" text,
	CONSTRAINT "users_user_name_unique" UNIQUE("user_name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "company_areas" ADD CONSTRAINT "company_areas_company_id_companies_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "companies"("company_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
