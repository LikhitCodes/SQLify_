import google.generativeai as genai
import json
import logging
from dotenv import load_dotenv
import os

logger = logging.getLogger(__name__)


DB_TYPE_RULES = {
    "mysql": """
Target database: MySQL
Strict formatting rules:
- DATE → YYYY-MM-DD
- DATETIME → YYYY-MM-DD HH:MM:SS
- TIMESTAMP → YYYY-MM-DD HH:MM:SS
- Do NOT include timezone (Z, UTC, offsets)
""",

    "postgres": """
Target database: PostgreSQL
Strict formatting rules:
- DATE → YYYY-MM-DD
- TIMESTAMP → YYYY-MM-DD HH:MM:SS
- Timezone is NOT allowed unless column explicitly supports it
""",

    "sqlite": """
Target database: SQLite
Formatting rules:
- DATE → YYYY-MM-DD
- DATETIME → YYYY-MM-DD HH:MM:SS
"""
}


load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=api_key)

def generate_synthetic_data(schema, num_rows):
    try:
        # Use the recommended stable model for text generation
        model = genai.GenerativeModel('models/gemini-2.5-flash')
        
        prompt = f"""Generate {num_rows} realistic data entries as a JSON array of objects.
Schema: {json.dumps(schema, indent=2)}

Requirements:
- Return only a JSON array
- No markdown formatting
- Validate data types
- Respect schema strictly
- For "date" columns, use YYYY-MM-DD only
- Do NOT include time or timezone
- Example format:
  [{{"id": 1, "name": "John", "email": "john@test.com", "date":"2025-04-23"}}]"""
        
        response = model.generate_content(prompt)
        return json.loads(response.text)
    
    except Exception as e:
        logger.error(f"Generation error: {str(e)}")
        raise Exception(f"Data generation failed: {str(e)}")
