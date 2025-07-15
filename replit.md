# Overview

This is a video authenticity analysis web application called "TruthLens" that helps users detect misinformation in social media videos. The app allows users to submit video URLs from various platforms (YouTube, Instagram, Twitter, TikTok, Facebook) and receive AI-powered analysis results about the video's authenticity.

**Status**: Enhanced with dual API integration - YouTube Data API v3 and Google Fact Check Tools API now provide authentic analysis (July 15, 2025)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and build processes

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL-based sessions
- **API Design**: RESTful API with JSON responses

### Key Components

#### Database Schema
- **Users table**: Basic user authentication with username/password
- **Video analyses table**: Stores analysis results with fields for:
  - Video URL and platform detection
  - Authenticity scoring (0-100 scale)
  - Detailed analysis categories (visual, audio, metadata, AI analysis)
  - Confidence scores and timestamps

#### API Endpoints
- `POST /api/analyze-video`: Accepts video URL and returns authenticity analysis
- `GET /api/recent-analyses`: Retrieves recent analysis results

#### Frontend Components
- **VideoAnalyzer**: Main form component for URL input and analysis initiation
- **AnalysisResults**: Displays comprehensive analysis results with visual indicators
- **AuthenticityMeter**: Visual component showing authenticity score with color-coded progress bar

### Data Flow

1. **User Input**: User submits video URL through the VideoAnalyzer component
2. **URL Validation**: Client-side validation checks for supported platforms
3. **API Request**: POST request sent to `/api/analyze-video` endpoint
4. **Analysis Processing**: Server fetches real YouTube data and fact-checking information, then generates comprehensive authenticity analysis
5. **Database Storage**: Analysis results stored in PostgreSQL via Drizzle ORM
6. **Response Rendering**: Results displayed through AnalysisResults component with authenticity scoring

### External Dependencies

#### APIs & Data Sources
- **YouTube Data API v3**: Real video metadata (views, likes, comments, upload dates)
- **Google Fact Check Tools API**: Professional fact-checking database integration
- **API Key Management**: Secure environment variable storage via Replit Secrets

#### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and migrations
- **connect-pg-simple**: PostgreSQL session store

#### UI Framework
- **shadcn/ui**: Comprehensive React component library built on Radix UI
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

#### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Type safety and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Deployment Strategy

#### Development
- **Local Development**: `npm run dev` starts both frontend and backend servers
- **Database Management**: `npm run db:push` applies schema changes via Drizzle
- **Type Checking**: `npm run check` validates TypeScript across the codebase

#### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles Node.js server to `dist/index.js`
- **Deployment**: `npm start` runs production server with static file serving

#### Architecture Decisions

**Monorepo Structure**: Single repository with `client/`, `server/`, and `shared/` directories enables code sharing and simplified development workflow.

**Drizzle ORM Choice**: Provides type-safe database operations with PostgreSQL support, enabling easy schema migrations and query building.

**Memory Storage Fallback**: Includes in-memory storage implementation for development/testing when database is unavailable.

**Component-First Design**: Leverages shadcn/ui for consistent, accessible UI components that can be easily customized.

**Mock Analysis Implementation**: Current implementation generates placeholder analysis results, designed to be replaced with actual AI-powered video analysis services.