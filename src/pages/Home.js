import React from 'react';
import GoalTracker from '../components/GoalTracker';
import ProgressGraph from '../components/ProgressGraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <div className="container">
      <h1>Goal Tracker</h1>
      <GoalTracker />
      <h2>Progress Graph</h2>
      <ProgressGraph />
    </div>
  );
};

export default Home;
