
import React, { useState } from 'react';
import PollsList from './PollsList';
import CreatePollForm from './CreatePollForm';
import Button from '../../components/ui/Button';

const PollsDashboard: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {isCreating ? (
        <CreatePollForm onCancel={() => setIsCreating(false)} />
      ) : (
        <>
          <div className="flex justify-end mb-6">
            <Button onClick={() => setIsCreating(true)}>Create New Poll</Button>
          </div>
          <PollsList />
        </>
      )}
    </div>
  );
};

export default PollsDashboard;
