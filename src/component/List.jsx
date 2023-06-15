import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSortNumericDown, BsSortNumericUp } from 'react-icons/bs';

import ListItem from './ListItem';

const ListWrapper = styled.div`
  width: 100%;
  height: 600px;
  height: calc(100vh - 195px);
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

const DoingList = styled.div`
  height: 48%;
  min-height: 300px;
  border-bottom: 1px solid #aaa;

  & p {
    font-size: 16px;
    font-weight: bold;
    padding: 0 0 10px 10px;
  }
`;

const DoneList = styled.div`
  height: 48%;
  min-height: 300px;
  
  & p {
    font-size: 16px;
    font-weight: bold;
    padding: 20px 0 10px 10px;
  }
`;

function List(props) {
  const { todos, onRemove, onToggle, onSort, onModify } = props;
  const [sort, setSort] = useState('false');
  
  return (
    <ListWrapper>
      <div className='sort-btn-wrap'>
        <SortingButton
          onClick={() => { 
            onSort();
            setSort(sort => !sort);
          }}
        >
          {sort
            ? <BsSortNumericDown />
            : <BsSortNumericUp />
          }
        </SortingButton>
      </div>
      <DoingList>
        <p>진행중</p>
        {todos.filter(todo => todo.checked === false).map(todo => 
          <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
        )}
      </DoingList>
      <DoneList>
        <p>완료</p>
        {todos.filter(todo => todo.checked === true).map(todo => 
          <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModify={onModify} />
        )}
      </DoneList>
    </ListWrapper>
  );
}

export default List;