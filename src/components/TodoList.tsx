import React, { useEffect } from 'react';
import { addTodos, setPaginatePage } from '../actions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './../hooks/useTypedSelector';
import ReactPaginate from 'react-paginate';

const TodoList: React.FC = () => {
  const { todos, loading, error } = useTypedSelector((state) => state.todoReducer);
  const { page, limit } = useTypedSelector((state) => state.paginateReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTodos());
  }, [dispatch]);

  const offset = page * limit;

  const currentPageData = todos.slice(offset, offset + limit).map((todo) => (
    <p key={todo.id}>
      {todo.id} - {todo.title}
    </p>
  ));

  const pageCount = Math.ceil(todos.length / limit);

  function handlePageClick(selectedItem: { selected: number }) {
    dispatch(setPaginatePage(selectedItem.selected));
  }

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2 style={{ color: 'red' }}>{error}</h2>
  ) : (
    <div className='wrapper'>
      <h2>Todo List</h2>
      <ul>{currentPageData}</ul>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        disabledClassName={'disabled'}
      />
    </div>
  );
};

export default TodoList;
