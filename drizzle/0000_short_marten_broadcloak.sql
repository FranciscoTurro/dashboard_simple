CREATE TABLE IF NOT EXISTS "attention" (
	"month_id" integer PRIMARY KEY NOT NULL,
	"month_name" text,
	"value" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "prod" (
	"month_id" integer PRIMARY KEY NOT NULL,
	"month_name" text,
	"value" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales" (
	"month_id" integer PRIMARY KEY NOT NULL,
	"month_name" text,
	"value" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"user_name" text,
	"password" text,
	CONSTRAINT "users_user_name_unique" UNIQUE("user_name")
);
