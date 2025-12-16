# STEP 1: Build
docker build -f backend/dockerfile.production -t gcr.io/sqlify-4be9a/sqlify-backend-1:latest backend/

# STEP 2: Push
docker push gcr.io/sqlify-4be9a/sqlify-backend-1:latest

# STEP 3: Deploy 

gcloud run deploy sqlify-backend-1 `
  --image gcr.io/sqlify-4be9a/sqlify-backend-1:latest `
  --platform managed `
  --region us-central1 `
  --allow-unauthenticated `
  --port 8080 `
  --set-env-vars="OLLAMA_API_BASE=http://localhost:11434/api,SCHEMA_MODEL_NAME=Meta-Llama-3-3-70B-Instruct,QUERY_MODEL_NAME=Meta-Llama-3-3-70B-Instruct,AKASH_API_KEY=sk-0z7wR-CjRJjWt1fjeOnuHg,AKASH_API_BASE=https://chatapi.akash.network/api/v1,SECONDARY_SERVICE_URL=https://sqlify-backend-2-212731597337.us-central1.run.app,FRONTEND_URL=https://sqlify-frontend-212731597337.us-central1.run.app,MAX_TOKENS=2048,TEMPERATURE=0.7,REQUEST_TIMEOUT=180" `
  --timeout=300 `
  --memory=2Gi `
  --cpu=2