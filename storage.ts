import { users, videoAnalyses, type User, type InsertUser, type VideoAnalysis, type InsertVideoAnalysis } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createVideoAnalysis(analysis: InsertVideoAnalysis): Promise<VideoAnalysis>;
  getVideoAnalysisByUrl(url: string): Promise<VideoAnalysis | undefined>;
  getRecentAnalyses(limit: number): Promise<VideoAnalysis[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private videoAnalyses: Map<number, VideoAnalysis>;
  private currentUserId: number;
  private currentAnalysisId: number;

  constructor() {
    this.users = new Map();
    this.videoAnalyses = new Map();
    this.currentUserId = 1;
    this.currentAnalysisId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createVideoAnalysis(insertAnalysis: InsertVideoAnalysis): Promise<VideoAnalysis> {
    const id = this.currentAnalysisId++;
    const analysis: VideoAnalysis = {
      ...insertAnalysis,
      id,
      createdAt: new Date(),
    };
    this.videoAnalyses.set(id, analysis);
    return analysis;
  }

  async getVideoAnalysisByUrl(url: string): Promise<VideoAnalysis | undefined> {
    return Array.from(this.videoAnalyses.values()).find(
      (analysis) => analysis.videoUrl === url,
    );
  }

  async getRecentAnalyses(limit: number): Promise<VideoAnalysis[]> {
    return Array.from(this.videoAnalyses.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
