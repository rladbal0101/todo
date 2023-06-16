import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSortNumericDown, BsSortNumericUp, BsTrash } from 'react-icons/bs';

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
    padding: 10px 0 10px 10px;
  }

  & .done-list-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    svg {
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: #bf2020;
      }
    }
  }
`;

function List(props) {
  const { todos, onRemove, onDoneRemove, onToggle, onSort, onModify } = props;
  const [sort, setSort] = useState('false');

  console.log(todos);

  const handleRemoveCheck = () => {
    const removeCheck = window.confirm('완료된 항목을 모두 삭제하시겠습니까?');
    if(removeCheck) {
      onDoneRemove();
      alert('삭제되었습니다.');
    } else {
      alert('삭제가 취소되었습니다.');
    }
  };
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
          <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModify={onModify} />
        )}
      </DoingList>
      <DoneList>
        <div className='done-list-wrap'>
          <p>완료</p>
          <BsTrash
            onClick={handleRemoveCheck}
          />
        </div>
        {todos.filter(todo => todo.checked === true).map(todo => 
          <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModify={onModify} />
        )}
      </DoneList>
    </ListWrapper>
  );
}

export default List;