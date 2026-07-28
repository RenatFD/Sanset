import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-4xl mb-4">😞</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Что-то пошло не так</h2>
            <p className="text-gray-500 mb-6">Попробуйте обновить страницу</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="bg-forest-600 text-cream px-6 py-3 rounded-xl font-semibold hover:bg-forest-700 transition-colors"
            >
              Обновить
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
