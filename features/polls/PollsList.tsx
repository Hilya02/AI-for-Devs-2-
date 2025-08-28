
import React from 'react';
import type { Poll } from '../../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const dummyPolls: Poll[] = [
  {
    id: '1',
    question: 'What is the best framework for frontend development in 2024?',
    options: [
      { id: '1a', text: 'React', votes: 150 },
      { id: '1b', text: 'Vue', votes: 90 },
      { id: '1c', text: 'Svelte', votes: 120 },
      { id: '1d', text: 'Angular', votes: 45 },
    ],
    createdAt: '2024-07-20T10:00:00Z',
    author: 'dev_guru',
  },
  {
    id: '2',
    question: 'Which is the superior pet?',
    options: [
      { id: '2a', text: 'Dogs', votes: 250 },
      { id: '2b', text: 'Cats', votes: 249 },
      { id: '2c', text: 'Birds', votes: 30 },
      { id: '2d', text: 'Fish', votes: 15 },
    ],
    createdAt: '2024-07-19T14:30:00Z',
    author: 'animal_lover',
  },
    {
    id: '3',
    question: 'Favorite type of pizza?',
    options: [
      { id: '3a', text: 'Pepperoni', votes: 300 },
      { id: '3b', text: 'Margherita', votes: 180 },
      { id: '3c', text: 'Hawaiian ( controversial! )', votes: 110 },
    ],
    createdAt: '2024-07-18T18:00:00Z',
    author: 'foodie_max',
  },
];

const PollsList: React.FC = () => {
  return (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Active Polls</h2>
      {dummyPolls.map(poll => {
        const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);
        return (
          <Card key={poll.id}>
            <CardHeader>
              <CardTitle>{poll.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {poll.options.map(option => {
                   const percentage = totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : 0;
                  return (
                    <li key={option.id}>
                       <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                           <span>{option.text}</span>
                           <span>{percentage}% ({option.votes})</span>
                       </div>
                       <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                           <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                       </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 dark:text-gray-400">
              <p>Posted by {poll.author} - {totalVotes} total votes</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default PollsList;
