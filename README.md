# SQLify - AI-Powered SQL Assistant 🚀

SQLify is a powerful AI-driven SQL assistant that simplifies working with databases by converting plain English into executable SQL queries. It allows users to generate schemas, connect to databases, run queries, create synthetic data, and even gamify SQL learning — all from one platform.

---

## 🌟 Features

### 🧠 Natural Language to SQL
- Convert everyday English into valid SQL queries
- Supports complex questions and nested operations
- Compatible with Trino, MySQL, and PostgreSQL

### 🏗️ Schema Generation
- Generate database schema (tables, columns, types, constraints) from plain English
- Optimized for structure clarity and SQL engine compatibility
- Export in SQL or JSON formats

### 🔌 Database Connectivity
- Connects to real databases
- Execute AI-generated or custom queries directly
- View execution results in real-time

### 📊 Data Insights & Visualization
- Auto-generate charts and graphs from query results
- Supports user-defined natural language questions for visual outputs

### 🧪 Synthetic Data Generation
- Quickly generate realistic data for testing
- Customizable data types and constraints

### 🎮 Gamified SQL Learning
- Score system based on user performance
- Real-time feedback on written SQL
- Practice on generated or custom datasets

---

## 🛠️ Tech Stack

| Layer       | Tech                                                  |
|------------|--------------------------------------------------------|
| Frontend   | React.js, HTML/CSS                                     |
| Backend    | Python, Flask, Meta-Llama-3                            |
| Database   | SupaBase                                               |
| Auth       | Firebase Authentication                                |

---

# Project Structure 

SQLify/
├── backend/              # Backend 1 (SQL query engine + model interface)
├── src/backend/          # Backend 2 (schema generation, OCR, gamification)
├── public/, src/         # Frontend (React.js)
├── .env                  # API keys and secrets
├── .gitignore
├── README.md
├── structure.txt         # Tree view of project


## ⚙️ Setup Guide

### 📦 1. Clone the Repository

```bash
git clone https://github.com/LikhitCodes/SQLify.git
cd SQLify

#Running backend 1
cd backend
python -m venv venv
venv\Scripts\activate         # Windows
pip install -r requirements.txt
python app.py

#Running backend 2
cd src/backend
python -m venv venv
venv\Scripts\activate         # Windows
pip install -r requirements.txt
python app.py

#Running Frontend 
npm install
npm start



## 🌐 Production Deployment

SQLify is now deployment-ready! All hardcoded localhost URLs have been replaced with environment variables.

### Environment Variables

Update your `.env` files for production:

**Frontend (.env):**
```env
REACT_APP_BACKEND_1_URL=https://your-backend-1-domain.com
REACT_APP_BACKEND_2_URL=https://your-backend-2-domain.com
```

**Backend 1 (backend/.env):**
```env
SECONDARY_SERVICE_URL=https://your-backend-2-domain.com
FRONTEND_URL=https://your-frontend-domain.com
```

**Backend 2 (src/backend/.env):**
```env
BACKEND_1_URL=https://your-backend-1-domain.com
FRONTEND_URL=https://your-frontend-domain.com
```

### Deployment Steps

1. **Deploy Backend 1** (SQL Query Engine) - Port 5000
2. **Deploy Backend 2** (Schema & Data Generation) - Port 5002  
3. **Deploy Frontend** with updated backend URLs
4. **Update environment variables** with actual production URLs

For detailed deployment instructions, see [deployment-config.md](deployment-config.md).

### Health Check Endpoints

- Backend 1: `GET /health`
- Backend 2: `GET /health`

Both backends are now ready for cloud deployment on platforms like Heroku, Railway, Vercel, or DigitalOcean.