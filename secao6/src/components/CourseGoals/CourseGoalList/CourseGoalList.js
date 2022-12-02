import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  const {items, onDeleteItem} = props;
  return (
    <ul className="goal-list">
      {items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
          text={goal.text}
        />
      ))}
    </ul>
  );
};

export default CourseGoalList;
