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
    </div>
  );
}

export default App;