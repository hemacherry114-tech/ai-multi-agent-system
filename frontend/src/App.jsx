import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/query?user_query=${query}`
      );

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        AI Multi-Agent System
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Ask anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "500px",
            padding: "12px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#38bdf8",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {loading ? "Running..." : "Run Agents"}
        </button>
      </div>

      {result && (
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "12px",
            width: "80%",
            marginInline: "auto",
          }}
        >
          <h2>Query</h2>
          <p>{result.query}</p>

          <h2>Planner Agent</h2>
          <p>{result.plan}</p>

          <h2>Research Agent</h2>
          <p>{result.research}</p>
        </div>
      )}
    </div>
  );
}

export default App;