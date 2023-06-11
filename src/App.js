import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Template from "./component/Template";
import Insert from "./component/Insert";
import List from "./component/List";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    /* background: #FFF1DB; */
    background: #FFE8C6;
  }
`;
function App() {

  const [todos, setTodos] = useState([]);
  
  // useEffect(() => {
  //   const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
  //   setTodos(dbTodos);
  // }, []);

  // // 로컬 스토리지에 저장(주의: DB가 아님, DB처럼 쓰면 안됨!!)
  // // 추가, 수정, 삭제 각 함수에 넣어도 되지만, useEffect()를 활용하면 한번에 처리 가능
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);


  const nextId = useRef(1);
  console.log(todos);
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

  return (
    <>
      <GlobalStyle />
      <Template>
        <Insert onInsert={handleInsert} />
        <List todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </Template>
    </>
  );
}

export default App;