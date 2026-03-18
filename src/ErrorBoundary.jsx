import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "2rem",
          maxWidth: "600px",
          margin: "2rem auto",
          background: "#1a1a2e",
          borderRadius: "12px",
          border: "1px solid #e50914",
          color: "#fff",
          fontFamily: "sans-serif",
        }}>
          <h2 style={{ color: "#e50914", marginBottom: "1rem" }}>Algo salió mal</h2>
          <pre style={{
            background: "#0f0f1a",
            padding: "1rem",
            borderRadius: "8px",
            overflow: "auto",
            fontSize: "0.85rem",
            color: "#f0f0f0",
          }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: "1rem",
              padding: "10px 20px",
              background: "#3b36d1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
