import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/Layout'
import { ErrorBoundary } from './components/ui/ErrorBoundary'
import { useScrollToTop } from './hooks/useScrollToTop'

const HomePage = lazy(() => import('./pages/Home'))
const ServicesPage = lazy(() => import('./pages/Services'))
const ReviewsPage = lazy(() => import('./pages/Reviews'))
const ContactsPage = lazy(() => import('./pages/Contacts'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function ScrollToTop() {
  useScrollToTop()
  return null
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <Suspense>
                    <HomePage />
                  </Suspense>
                }
              />
              <Route
                path="services"
                element={
                  <Suspense>
                    <ServicesPage />
                  </Suspense>
                }
              />
              <Route
                path="reviews"
                element={
                  <Suspense>
                    <ReviewsPage />
                  </Suspense>
                }
              />
              <Route
                path="contacts"
                element={
                  <Suspense>
                    <ContactsPage />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
