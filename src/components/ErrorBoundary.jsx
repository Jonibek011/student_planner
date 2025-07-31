import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Xatolik yuz berdi:", error, errorInfo);
    // Optional: xatolikni monitoring xizmatiga yuborish (masalan Sentry)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col  text-center p-6 bg-red-50 text-red-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Xatolik yuz berdi</h2>
          <p className="text-base mb-4">
            Biror narsa noto‘g‘ri ketdi. Iltimos, sahifani yangilang yoki
            keyinroq urinib ko‘ring.
          </p>
          <pre className="text-xs text-red-600 bg-red-100 p-2 rounded">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
