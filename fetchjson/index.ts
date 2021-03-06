import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos';
const idOne = '/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url + idOne).then( response => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed ? 'Yes.' : 'No.'}
  `);
};