# Chemical-Equipment-Parameter-Visualizer-Hybrid-Web-Desktop-App-
Create a Web + Desktop application that allows users to upload a CSV file containing a list of chemical equipment with columns such as Equipment Name, Type, Flowrate, Pressure, and Temperature. The Django backend will parse the data, perform analysis, and provide summary statistics via API.
# Chemical Equipment Parameter Visualizer

A full-stack web application that allows users to upload CSV files containing industrial equipment data and visualize system statistics.

## Tech Stack

Frontend: React + Vite  
Backend: Node.js + Express  
Database: PostgreSQL  
ORM: Drizzle  
Auth: Session-based  
Deployment: Vercel (frontend) + Railway (backend)

## Features

- User authentication
- CSV upload & parsing
- Statistical analysis
- Dataset history
- Cloud-ready deployment

## Local Setup

### 1. Clone Repo
git clone <repo-url>
cd chemical-visualizer

### 2. Backend Setup
cd server
npm install
Set DATABASE_URL and SESSION_SECRET in .env
npm start

### 3. Frontend Setup
cd client
npm install
npm run dev

## Deployment

Frontend → Vercel  
Backend → Railway  
Database → Neon / Railway Postgres

## CSV Format
Columns required:
name,type,flowrate,pressure,temperature
