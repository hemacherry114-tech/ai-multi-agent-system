from duckduckgo_search import DDGS

def research_agent(query):
    results = []

    with DDGS() as ddgs:
        for r in ddgs.text(query, max_results=3):
            results.append(r["title"])

    return results