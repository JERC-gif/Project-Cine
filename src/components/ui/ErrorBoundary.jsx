import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-box">
          <h2 className="error-boundary-title">Algo salió mal</h2>
          <pre className="error-boundary-detail">
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="error-boundary-action"
          >
            Reintentar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
