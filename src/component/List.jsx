import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSortNumericDown, BsSortNumericUp, BsTrash } from 'react-icons/bs';

import ListItem from './ListItem';

const ListWrapper = styled.div`
  width: 100%;
  height: 600px;
  height: calc(100vh - 195px);
  overflow-y: auto;

  /* & .sort-btn-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  } */
`;

const DoingList = styled.div`
  height: 48%;
  min-height: 300px;
  border-bottom: 1px solid #aaa;

  & p {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0 10px 10px;
  }
  & .doing-list-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    svg {
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: #55D66B;
      }
    }
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
  const { todos, onRemove, onDoneRemove, onToggle, onSort, onModify, theme: { theme, themeList, toggleTheme } } = props;
  
  const [sort, setSort] = useState('false');
  // const [sortFlag, setSortFlag] = useState(true);

  
  const doingTodos = todos.filter(todo => todo.checked === false);
  const doneTodos = todos.filter(todo => todo.checked === true);
  console.log(doingTodos);
  
  // 정렬
  // const handleSort = () => {
  //   if (sortFlag) {
  //     console.log('1');
  //     doingTodos.sort((a, b) => a.date < b.date ? -1 : 1);
  //     setSortFlag(false);
  //   } else {
  //     console.log('2');
  //     doingTodos.sort((a, b) => a.date > b.date ? -1 : 1);
  //     setSortFlag(true);
  //   }
  // };

  const handleRemoveCheck = () => {
    if (doneTodos.length < 1) {
      alert('삭제할 항목이 없습니다.');
    } else {
      const removeCheck = window.confirm('완료된 항목을 모두 삭제하시겠습니까?');
      if(removeCheck) {
        onDoneRemove();
        alert('삭제되었습니다.');
      } else {
        alert('취소되었습니다.');
      }
    }
  };

  return (
    <ListWrapper>
      <DoingList>
        <div className='doing-list-wrap'>
          <p>진행중</p>
          <div
            onClick={() => { 
              onSort();
              setSort(sort => !sort);
            }}
          >
            {/* {sort
              ? <BsSortNumericDown />
              : <BsSortNumericUp />
            } */}
            <BsSortNumericDown />
          </div>
        </div>
        {doingTodos.map(todo => 
          <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModify={onModify} theme={{ theme, themeList, toggleTheme }} />
        )}
      </DoingList>
      <DoneList>
        <div className='done-list-wrap'>
          <p>완료</p>
          <BsTrash
            onClick={handleRemoveCheck}
          />
        </div>
        {doneTodos.map(todo => 
          <ListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModify={onModify} theme={{ theme, themeList, toggleTheme }} />
        )}
      </DoneList>
    </ListWrapper>
  );
}

export default List;