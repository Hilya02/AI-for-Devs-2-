
import React, { createContext, useContext } from 'react';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be rendered within a Tabs provider');
  }
  return context;
};

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ children, className, value, onValueChange }) => (
  <TabsContext.Provider value={{ activeTab: value, setActiveTab: onValueChange }}>
    <div className={className}>{children}</div>
  </TabsContext.Provider>
);

const TabsList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 dark:bg-gray-800 dark:text-gray-400 ${className || ''}`}
  >
    {children}
  </div>
);

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, className, value, ...props }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-white shadow-sm text-gray-900 dark:bg-gray-950 dark:text-gray-50' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, className, value }) => {
  const { activeTab } = useTabs();
  if (activeTab !== value) {
    return null;
  }
  return (
    <div className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-800 ${className || ''}`}>
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
