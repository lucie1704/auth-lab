'use client';

import { useState } from 'react';

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    console.log('Connexion');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white text-gray-900 shadow-md rounded-lg">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>

        <h1 className="text-center text-2xl font-semibold mb-6">
          Se connecter
        </h1>

        <form onSubmit={handleCredentialsSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              <span className="mr-2">
                <i className="fas fa-user"></i> {/* Optional icon */}
              </span>
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              <span className="mr-2">
                <i className="fas fa-lock"></i> {/* Optional icon */}
              </span>
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
