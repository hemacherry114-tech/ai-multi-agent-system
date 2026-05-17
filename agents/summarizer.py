from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv(".env")

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def summarizer_agent(user_query):

    response = client.chat.completions.create(
        model="openai/gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You summarize text clearly and shortly."
            },
            {
                "role": "user",
                "content": user_query
            }
        ]
    )

    return response.choices[0].message.content