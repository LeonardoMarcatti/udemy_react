import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHTTP from '../../hooks/useHTTP';

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHTTP();

  const createTask = (text, data) => {
    const generatedId = data.name;
      const createdTask = { id: generatedId, text };

      props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({url: 'https://projetc-react-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    }, createTask.bind(null, taskText))
    
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
