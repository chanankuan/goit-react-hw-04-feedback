import React from 'react';
import PropTypes from 'prop-types';
import { Container, StatisticTitle, StatisticItem } from './Statistics.styled';

const Statistics = ({
  feedback: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <StatisticTitle>Statistics</StatisticTitle>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
    </Container>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
