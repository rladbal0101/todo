import React from 'react';
import styled from 'styled-components';
import { BsSortNumericDown as SortIcon } from 'react-icons/bs';

import ListItem from './ListItem';

const ListWrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: auto;

  & .sort-btn-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

const SortingButton = styled.button`
  width: 40px;
  height: 24px;
  background: none;
  outline: none;
  border: none;
  padding: 12px 8px 8px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #55D66B;
  }
`;

function List(props) {
  const { todos, onRemove, onToggle, onRevision, onSort } = props;
  // console.log(todos);
  
  return (
    <ListWrapper>
      <div className='sort-btn-wrap'>
        <SortingButton
          onClick={() => { onSort(); }}
        >
          <SortIcon />
        </SortingButton>
      </div>
      {todos.map(todo => 
        <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onRevision={onRevision} />
      )}
    </ListWrapper>
  );
}

export default List;