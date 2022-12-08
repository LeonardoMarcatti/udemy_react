import React from 'react';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import styles from './CourseGoalList.module.css';

const CourseGoalList = props => {
  const {items, onDeleteItem} = props;
  return (
    <ul className={`${styles['goal-list']}`}>
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
