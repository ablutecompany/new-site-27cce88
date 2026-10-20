import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertPostSchema = createInsertSchema(posts).omit({ id: true, createdAt: true });

export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof posts.$inferSelect;

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").notNull(),
  author: text("author").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCommentSchema = createInsertSchema(comments).omit({ id: true, createdAt: true });

export type InsertComment = z.infer<typeof insertCommentSchema>;
export type Comment = typeof comments.$inferSelect;

export const waitingListSubmissions = pgTable("waiting_list_submissions", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  country: text("country").notNull(),
  interestType: text("interest_type").notNull(),
  intendedTimeline: text("intended_timeline").notNull(),
  units: text("units"),
  intendedSetting: text("intended_setting"),
  mainReason: text("main_reason"),
  followUpPreference: text("follow_up_preference"),
  notes: text("notes"),
  orgType: text("org_type"),
  pilotInterest: text("pilot_interest"),
  venueType: text("venue_type"),
  venueScale: text("venue_scale"),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const insertWaitingListSchema = createInsertSchema(waitingListSubmissions).omit({ id: true, submittedAt: true });
export type InsertWaitingList = z.infer<typeof insertWaitingListSchema>;
export type WaitingListSubmission = typeof waitingListSubmissions.$inferSelect;
