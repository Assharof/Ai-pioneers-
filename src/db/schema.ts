import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  studentName: varchar("student_name", { length: 255 }).notNull(),
  studentAge: varchar("student_age", { length: 20 }).notNull(),
  parentName: varchar("parent_name", { length: 255 }).notNull(),
  whatsappPhone: varchar("whatsapp_phone", { length: 30 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  learningGoal: text("learning_goal"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
