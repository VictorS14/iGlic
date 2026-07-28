import { Content } from "../layout/Content.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider.jsx";
import { Login } from "../features/auth/pages/Login.jsx";
import ProtectedRoute from "../features/auth/components/ProtectedRoute.jsx";
import { Dashboard } from "../features/dashboard/pages/Dashboard.jsx";
import { History } from "../features/history/pages/History.jsx";
import { SettingsPage } from "../features/settings/pages/setting.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Content>
                    <Dashboard />
                  </Content>
                </ProtectedRoute>
              }
            />

            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <Content>
                    <History />
                  </Content>
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Content>
                    <SettingsPage />
                  </Content>
                </ProtectedRoute>
              }
            />
          </Routes>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
