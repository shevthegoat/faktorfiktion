import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const videoAnalyses = pgTable("video_analyses", {
  id: serial("id").primaryKey(),
  videoUrl: text("video_url").notNull(),
  platform: text("platform").notNull(),
  authenticityLevel: text("authenticity_level").notNull(),
  authenticityScore: integer("authenticity_score").notNull(),
  visualAnalysis: text("visual_analysis").notNull(),
  audioAnalysis: text("audio_analysis").notNull(),
  metadataAnalysis: text("metadata_analysis").notNull(),
  aiAnalysis: text("ai_analysis").notNull(),
  confidenceScore: integer("confidence_score").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertVideoAnalysisSchema = createInsertSchema(videoAnalyses).omit({
  id: true,
  createdAt: true,
});

export const analyzeVideoSchema = z.object({
  videoUrl: z.string().url("Please enter a valid URL"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type VideoAnalysis = typeof videoAnalyses.$inferSelect;
export type InsertVideoAnalysis = z.infer<typeof insertVideoAnalysisSchema>;
export type AnalyzeVideoRequest = z.infer<typeof analyzeVideoSchema>;
