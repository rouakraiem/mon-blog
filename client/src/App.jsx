import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import AuthCard from './components/AuthCard';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';

export default function App() {
  // On lit si un utilisateur est connecté dans le coffre Redux (state.auth)
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="container main-content">
        <div className="app-grid-layout">
          <div className="column-form">
            {/* Si connecté -> Formulaire d'ajout, sinon -> Carte de Connexion JWT */}
            {user ? <ArticleForm /> : <AuthCard />}
          </div>
          <div className="column-list">
            <ArticleList />
          </div>
        </div>
      </main>
    </div>
  );
}