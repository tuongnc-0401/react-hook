import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'one' },
    { id: 12, title: 'one2' },
    { id: 13, title: 'one3' },
    { id: 14, title: 'one4' },
    { id: 15, title: 'one5' }
  ]);

  function handleTodoList(todo) {
    var index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) {
      return;
    }
    var newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList)
    console.log(todo);
  }

  function handleTodoFormSubmit(formValue) {

    var newList = [...todoList];
    var newValue = {
      id: todoList.length + 1,
      ...formValue
    }
    console.log('Form submit: ', newValue);
    newList.push(newValue);
    setTodoList(newList);
  }

  const [postList, setPostList] = useState([]);

  useEffect(() => {

    async function fetchPostList() {
      const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      const { data } = responseJSON;
      setPostList(data);
    }

    fetchPostList();
  }, []);

  return (
    <div className="app">
      <h1>Welcome</h1>

      <PostList posts={postList}></PostList>


      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoList}></TodoList> */}
    </div>
  );
}

export default App;
