import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

import queryString from 'query-string'

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'one' },
    { id: 12, title: 'one2' },
    { id: 13, title: 'one3' },
    { id: 14, title: 'one4' },
    { id: 15, title: 'one5' }
  ]);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,

  })

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

      const paramsString = queryString.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      const { data, pagination } = responseJSON;
      setPostList(data);
      SetPagination(pagination);
    }

    fetchPostList();
  }, [filters]);


  const [pagination, SetPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 21,
  })

  function handlePagination(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  return (
    <div className="app">
      <h1>Welcome</h1>

      <PostList posts={postList}></PostList>
      <Pagination
        pagination={pagination}
        onPageChange={handlePagination}
      ></Pagination>

      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoList}></TodoList> */}
    </div>
  );
}

export default App;
