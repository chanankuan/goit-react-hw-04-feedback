import React from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOpitons/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => {
      return {
        ...prevFeedback,
        [option]: prevFeedback[option] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, n) => acc + n, 0);
  };

  const positivePercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  const styles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#010101',
  };

  return (
    <div style={styles}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            feedback={feedback}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
