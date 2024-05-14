import React, { useState, useEffect } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const GoalTracker = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Goal 1', tracked: false },
    { id: 2, text: 'Goal 2', tracked: false },
    { id: 3, text: 'Goal 3', tracked: false },
  ]);

  const handleTrack = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, tracked: !goal.tracked } : goal
    ));
  };

  const trackAll = () => {
    setGoals(goals.map(goal => ({ ...goal, tracked: true })));
  };

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals'));
    if (savedGoals) {
      setGoals(savedGoals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const progress = (goals.filter(goal => goal.tracked).length / goals.length) * 100;

  return (
    <div>
      <ListGroup>
        {goals.map(goal => (
          <ListGroup.Item key={goal.id}>
            <Form.Check
              type="checkbox"
              label={goal.text}
              checked={goal.tracked}
              onChange={() => handleTrack(goal.id)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <button onClick={trackAll}>Track All</button>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default GoalTracker;
