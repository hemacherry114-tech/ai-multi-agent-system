from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def planner_agent(user_query):

    response = client.chat.completions.create(
        model="openai/gpt-3.5-turbo",

        messages=[
            {
                "role": "system",
                "content": "You are an intelligent planner agent. Break user tasks into clear actionable steps."
            },
            {
                "role": "user",
                "content": user_query
            }
        ]
    )

    return response.choices[0].message.content