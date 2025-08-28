
import React, { useState } from 'react';
import AuthPage from './features/auth/AuthPage';
import PollsDashboard from './features/polls/PollsDashboard';
import { Page } from './types';
import Button from './components/ui/Button';

const App: React.FC = () => {
  // In a real app, this would be derived from an auth context
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Polls);

  const renderPage = () => {
    if (!isAuthenticated) {
        return <AuthPage />;
    }
    switch (currentPage) {
      case Page.Polls:
        return <PollsDashboard />;
      case Page.Auth:
        // This is just for scaffolding, a real app would handle logout differently
        return <AuthPage />; 
      default:
        return <PollsDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-600 mr-2" viewBox="0 0 16 16">
                    <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z"/>
                    <path d="M4 1.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
              <h1 className="text-xl font-bold">React Polls</h1>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                  <>
                    <Button variant="ghost" onClick={() => setCurrentPage(Page.Polls)}>Dashboard</Button>
                    <Button variant="secondary" onClick={() => setIsAuthenticated(false)}>Logout</Button>
                  </>
              ) : (
                 <Button onClick={() => setIsAuthenticated(true)}>Login</Button>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
