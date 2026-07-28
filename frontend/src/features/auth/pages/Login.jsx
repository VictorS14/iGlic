import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { login, isAuthenticated, loading } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await login();
    } catch (error) {
      alert("Falha ao entar. Tente novamente.");
      throw error;
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 px-4">
      {/* Card central com efeito glass (vidro fosco) */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-10">
        {/* Logo / Título */}
        <div className="text-center mb-10">
          {/* Ícone de gota (simulando glicose/diabetes) */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Ícone de gota */}
              <path d="M12 2s-7 7.5-7 13a7 7 0 0014 0c0-5.5-7-13-7-13z" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            iGlic
          </h1>
          <p className="text-white/80 text-lg">Controle de Glicose</p>
        </div>

        {/* Botão de Login */}
        <button
          onClick={handleLogin}
          disabled={isLoggingIn || loading}
          className="w-full py-5 px-6 bg-white hover:bg-gray-50 text-indigo-700 font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isLoggingIn || loading ? (
            <>
              <svg
                className="animate-spin h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Carregando...
            </>
          ) : (
            <>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25"
                />
              </svg>
              Entrar como Convidado
            </>
          )}
        </button>

        <p className="text-center text-white/70 text-sm mt-8 leading-relaxed">
          Ao entrar, uma conta de convidado será criada
          <br />
          automaticamente para você.
        </p>
      </div>
    </div>
  );
};
