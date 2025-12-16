// API Configuration for deployment
const API_CONFIG = {
  // Backend 1 (SQL query engine + model interface)
  BACKEND_1_URL: process.env.REACT_APP_BACKEND_1_URL || 'http://localhost:5000',
  
  // Backend 2 (schema generation, OCR, gamification, synthetic data)
  BACKEND_2_URL: process.env.REACT_APP_BACKEND_2_URL || 'http://localhost:5002',
};

// API endpoints
export const API_ENDPOINTS = {
  // Backend 1 endpoints
  GENERATE_QUERY: `${API_CONFIG.BACKEND_1_URL}/generate-query`,
  GENERATE_SCHEMA: `${API_CONFIG.BACKEND_1_URL}/generate-schema`,
  GENERATE_SCHEMA_SQL: `${API_CONFIG.BACKEND_1_URL}/generate-schema-sql`,
  GENERATE_SCHEMA_JSON: `${API_CONFIG.BACKEND_1_URL}/generate-schema-json`,
  EXPLAIN_QUERY: `${API_CONFIG.BACKEND_1_URL}/explain-query`,
  HEALTH_CHECK: `${API_CONFIG.BACKEND_1_URL}/health`,
  MODELS_STATUS: `${API_CONFIG.BACKEND_1_URL}/models/status`,
  MODELS_LOAD: `${API_CONFIG.BACKEND_1_URL}/models/load`,
  MODELS_UNLOAD: `${API_CONFIG.BACKEND_1_URL}/models/unload`,
  SUPPORTED_FUNCTIONS: `${API_CONFIG.BACKEND_1_URL}/supported-functions`,
  NLP_TASK: `${API_CONFIG.BACKEND_1_URL}/nlp-task`,
  CLEANUP_CONVERSATIONS: `${API_CONFIG.BACKEND_1_URL}/cleanup-conversations`,

  // Backend 2 endpoints
  CONNECT_DB: `${API_CONFIG.BACKEND_2_URL}/connect-db`,
  CONNECTION_STATUS: `${API_CONFIG.BACKEND_2_URL}/connection-status`,
  GET_FULL_SCHEMA: `${API_CONFIG.BACKEND_2_URL}/get-full-schema`,
  EXECUTE_SQL: `${API_CONFIG.BACKEND_2_URL}/execute-sql`,
  GET_TABLES: `${API_CONFIG.BACKEND_2_URL}/get-tables`,
  GENERATE_DATA: `${API_CONFIG.BACKEND_2_URL}/generate-data`,
};

export default API_CONFIG;