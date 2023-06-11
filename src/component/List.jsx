import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const ListWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
`;

function List(props) {
  const { todos, onRemove, onToggle } = props;

  return (
    <ListWrapper>
      {todos.map(todo => {
        <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      })}
    </ListWrapper>
  );
}

export default List;