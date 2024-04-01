import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from './hooks/useHTTP';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const transformedTasks = useCallback(obj => {
    const loadedTasks = [];

      for (const el in obj) {
        loadedTasks.push({ id: el, text: obj[el].text });
      }

      setTasks(loadedTasks);
  }, [])

  const {isLoading, error, sendRequest: fetchTasks} = useHTTP(transformedTasks)
 

  useEffect(() => {
    fetchTasks({url: 'https://projetc-react-default-rtdb.firebaseio.com/tasks.json'}, );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
