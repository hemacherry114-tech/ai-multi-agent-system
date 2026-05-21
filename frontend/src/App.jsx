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
        background:
          "linear-gradient(135deg, #0a061a 0%, #12091f 50%, #050816 100%)",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 30px",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          marginBottom: "80px",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ color: "#c084fc" }}>NeuroFlow AI</h2>

        <div style={{ display: "flex", gap: "30px", color: "#d1d5db" }}>
          <span>Agents</span>
          <span>Workflows</span>
          <span>Analytics</span>
        </div>
      </div>

      <h1
        style={{
          fontSize: "72px",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "900",
          background:
            "linear-gradient(to right, #e9d5ff, #a855f7, #d946ef)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 35px rgba(168,85,247,0.45)",
          letterSpacing: "-2px",
        }}
      >
        NeuroGrid AI
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#c084fc",
          fontSize: "22px",
          marginBottom: "50px",
        }}
      >
        Autonomous AI Workflow Orchestration Platform
      </p>

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
            width: "700px",
            padding: "18px",
            fontSize: "18px",
            borderRadius: "14px",
            border: "1px solid rgba(168,85,247,0.2)",
            backgroundColor: "#140f24",
            color: "white",
            boxShadow: "0 0 20px rgba(168,85,247,0.12)",
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            padding: "18px 30px",
            fontSize: "18px",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(to right, #7c3aed, #d946ef)",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 0 30px rgba(168,85,247,0.4)",
          }}
        >
          {loading ? "Running..." : "Run Agents"}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "35px",
        }}
      >
        <div
          style={{
            padding: "14px 22px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          🟢 Planner Agent Active
        </div>

        <div
          style={{
            padding: "14px 22px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          🟣 Research Pipeline Running
        </div>

        <div
          style={{
            padding: "14px 22px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          ✨ Summarization Engine Ready
        </div>
      </div>

      {result && (
        <div
          style={{
            marginTop: "60px",
            background: "rgba(20, 15, 36, 0.72)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(168,85,247,0.2)",
            padding: "35px",
            borderRadius: "24px",
            width: "80%",
            marginInline: "auto",
            boxShadow: "0 0 40px rgba(168,85,247,0.12)",
          }}
        >
          <h2 style={{ color: "#d8b4fe" }}>Query</h2>
          <p>{result.query}</p>

          <h2 style={{ color: "#d8b4fe", marginTop: "30px" }}>
            Planner Agent
          </h2>
          <p>{result.plan}</p>

          <h2 style={{ color: "#d8b4fe", marginTop: "30px" }}>
            Research Agent
          </h2>
          <p>{result.research}</p>
        </div>
      )}
    </div>
  );
}

export default App;