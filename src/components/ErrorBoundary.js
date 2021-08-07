import React, {Component} from "react";

// Error boundaries are really useful when we are at production.
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
      }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops! That is not good...</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
