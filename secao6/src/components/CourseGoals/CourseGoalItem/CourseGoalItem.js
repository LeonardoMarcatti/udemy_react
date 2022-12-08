import React from 'react';
import styles from './CourseGoalItem.module.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');
  const {onDelete, id, text} = props;

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className={`${styles['goal-item']}`} onClick={deleteHandler}>
      {text}
    </li>
  );
};

export default CourseGoalItem;
