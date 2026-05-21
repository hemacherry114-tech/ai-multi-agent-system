import "./App.css";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const runAgents = () => {
  setLoading(true);
  setShowResults(false);

  setTimeout(() => {
    setLoading(false);
    setShowResults(true);
  }, 2500);
};
  return (

  <div className="container">
    
    <div className="navbar">
      
      <div className="logo">NeuroFlow AI</div>

      <div className="nav-links">
        <span>Agents</span>
        <span>Workflows</span>
        <span>Analytics</span>
         </div>
          </div>
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
    letterSpacing: "1px",
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
            width: "500px",
            padding: "12px",
            fontSize: "18px",
            borderRadius: "8px",
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
            padding: "12px 20px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background:
           "linear-gradient(to right, #7c3aed, #d946ef)",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 0 30px rgba(168,85,247,0.4)",
            transition: "0.3s",
          }}
        >
          {loading ? "Running..." : "Run Agents"}
        </button>
      </div>
    </div>

    <h1 className="title">AI Multi-Agent System</h1>
      <p style={{ marginTop: "-10px", marginBottom: "30px", color: "#94a3b8" }}>
  Autonomous AI workflow orchestration platform
</p>

      <div className="input-section">
        <input
          className="input-box"
          placeholder="Ask anything..."
        />
        
      <button className="run-btn" onClick={runAgents}>
  {loading ? "Running Agents..." : "Run Agents"}
</button>
      </div>
      <div className="status-panel">
  <div className="status-item">
    <span className="dot"></span>
    Planner Agent Active
  </div>

  <div className="status-item">
    <span className="dot"></span>
    Research Pipeline Running
  </div>

  <div className="status-item">
    <span className="dot"></span>
    Summarization Engine Ready
  </div>
</div>


{showResults && (
<div className="results">
  <h2>Agent Outputs</h2>

  <div className="agent-card">
    <h3>🤖 Planner Agent</h3>
    <p>Task decomposition and workflow planning.</p>
  </div>

  <div className="agent-card">
    <h3>🔍 Research Agent</h3>
    <p>Retrieved contextual information from sources.</p>
  </div>

  <div className="agent-card">
    <h3>🧠 Summarizer Agent</h3>
    <p>Generated concise final response.</p>
  </div>
</div>
)}

      {result && (
        <div
          style={{
            marginTop: "50px",
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
          <h2
  style={{
    color: "#d8b4fe",
    marginBottom: "10px",
    fontSize: "28px",
  }}
>
  Query
</h2>

<p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
  {result.query}
</p>

<h2
  style={{
    color: "#d8b4fe",
    marginTop: "30px",
    marginBottom: "10px",
    fontSize: "28px",
  }}
>
  Planner Agent
</h2>

<p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
  {result.plan}
</p>

<h2
  style={{
    color: "#d8b4fe",
    marginTop: "30px",
    marginBottom: "10px",
    fontSize: "28px",
  }}
>
  Research Agent
</h2>

<p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
  {result.research}
</p>

        </div>
      )}
      </div>
  );
}

export default App;