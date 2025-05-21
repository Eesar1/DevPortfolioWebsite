# Portfolio Website with React and Express

## Overview

This repository contains a full-stack web application built with React (frontend) and Express.js (backend). It's set up as a personal portfolio website for a developer named Eesar Hussain. The project uses a modern tech stack with TypeScript, Tailwind CSS, and Drizzle ORM, and is designed to be deployed on the Replit platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture with clear separation of concerns:

1. **Frontend**: React application built with Vite, using TypeScript and Tailwind CSS for styling, and shadcn/ui component library
2. **Backend**: Express.js server with REST API endpoints
3. **Database**: PostgreSQL database managed with Drizzle ORM
4. **Shared Types**: Common type definitions shared between frontend and backend

The application is structured to be easily deployed on Replit, with appropriate configurations for development and production environments.

## Key Components

### Frontend

1. **React Application**: Single Page Application with routing handled by Wouter
   - Built with Vite for fast development and optimized production builds
   - Uses TypeScript for type safety
   - Organized into pages, components, hooks, and utility functions

2. **UI Components**: 
   - Uses shadcn/ui, a collection of reusable components built on top of Radix UI primitives
   - Custom UI components for specific application needs
   - Responsive design with Tailwind CSS

3. **State Management**:
   - React Query for server state management and data fetching
   - React Context for theme management (dark/light mode)

4. **Styling**:
   - Tailwind CSS for utility-based styling
   - CSS variables for theming (light/dark mode)

### Backend

1. **Express Server**:
   - REST API endpoints prefixed with `/api`
   - Middleware for request logging and error handling

2. **Storage Layer**:
   - Interface-based abstraction for data operations
   - Currently using in-memory storage, prepared for database integration via Drizzle ORM

3. **Database Schema**:
   - Simple user model with username and password
   - Using Drizzle ORM with PostgreSQL

### Shared

1. **Type Definitions**:
   - Database schema definitions using Drizzle ORM
   - Zod schemas for type validation

## Data Flow

1. **Client-Server Communication**:
   - React components use React Query to fetch data from the backend API
   - API requests are prefixed with `/api`
   - Response data is typed according to shared type definitions

2. **Database Operations**:
   - The server uses a storage abstraction layer for database operations
   - Currently using in-memory storage with plans to integrate PostgreSQL

3. **Authentication Flow**:
   - Basic user authentication is implemented with username/password
   - Server validates user credentials and manages sessions

## External Dependencies

### Frontend Dependencies
- React and React DOM for UI rendering
- Wouter for routing
- React Query for data fetching and server state management
- Radix UI components for accessible UI elements
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for form handling

### Backend Dependencies
- Express.js for HTTP server and API routing
- Drizzle ORM for database operations
- Zod for schema validation

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development Mode**:
   - Run with `npm run dev` which starts the Vite dev server with hot module reloading
   - Express server serves the API endpoints and proxies to Vite for frontend development

2. **Production Build**:
   - Frontend is built with `vite build` to generate optimized static assets
   - Backend is bundled with esbuild
   - The Express server serves the static frontend files and API endpoints

3. **Database**:
   - The application is configured to use PostgreSQL
   - Database connection string is provided via environment variables
   - Drizzle ORM manages database schema and migrations

The `.replit` configuration handles the deployment process, including build steps and port forwarding.