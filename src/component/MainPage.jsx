import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import Template from './Template';
import Insert from './Insert';
import List from './List';
import TodoWritePage from './TodoWritePage';


const Wrapper = styled.div`
`;

// const today = new Date();

// 다크/라이트 모드
const themeList = {
  light: {
    foreground: '#000000',
    // background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

function MainPage(props) {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light');

  const {today} = props;
  
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  // 로컬 스토리지에 저장(주의: DB가 아님, DB처럼 쓰면 안됨!!)
  // 추가, 수정, 삭제 각 함수에 넣어도 되지만, useEffect()를 활용하면 한번에 처리 가능
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const nextId = useRef(1);
  // console.log(todos);
  // console.log(uuidv4());
  
  // 추가
  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false
    };

    setTodos(todos => todos.concat(todo));

    nextId.current += 1;
  }, []);

  // 삭제
  const handleRemove = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  }, []);

  // 총 해야할 일
  // console.log(todos.length);

  // 완료된 일
  const finishedTodos = todos.filter((todo) => {
    return (
      todo.checked === true
    );
  });
  // console.log(finishedTodos);

  // 테마 변경
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    }
  };

  return (
    <Wrapper>
      <Template theme={{ theme, themeList, toggleTheme }} todos={todos} finishedTodos={finishedTodos} >
        <Insert onInsert={handleInsert} today={today} />
        {/* <TodoWritePage /> */}
        <List todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </Template>
    </Wrapper>
  );
}

export default MainPage;