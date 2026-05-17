from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from agents.planner import planner_agent
from agents.research import research_agent

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/query")
def query(user_query: str):

    plan = planner_agent(user_query)
    research = research_agent(user_query)

    return {
        "query": user_query,
        "plan": plan,
        "research": research
    }