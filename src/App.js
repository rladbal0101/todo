import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import { useCallback, useEffect, useRef, useState } from "react";
import Template from "./component/Template";
import List from "./component/List";
import Insert from "./component/Insert";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #e9e9e9;
  }
`;

// 다크/라이트 모드
const themeList = {
  light: {
    foreground: '#555',
    background: '#eee'
  },
  dark: {
    foreground: '#d1d1d1',
    background: '#222',
  }
};

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light');

  // 로컬 스토리지에서 가져오기
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const nextId = useRef(1);

  // 추가
  const handleInsert = useCallback((text, date) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false,
      date
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  // 삭제
  const handleRemove = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  // 완료항목 삭제
  const handleDoneRemove = useCallback(() => {
    setTodos(todos => todos.filter(todo => todo.checked === false));
  }, []);

  // 체크박스 누를 때
  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  }, []);

  // 수정
  const handleModify = useCallback((id, newText, newDate) => {
    setTodos(todos => todos.map((todo) => 
      // todo.id === id ? { ...todo, ...editTodo } : todo
      todo.id === id ? { ...todo, text: newText, date: newDate } : todo
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

  // 정렬
  const handleSort = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) => a.date < b.date ? -1 : 1);
    setTodos(sortTodos);

    // 진행중인 Todo만 정렬
    // const doingTodos = todos.filter(todo => {
    //   return todo.checked === false;
    // });

    // const sortTodos = [...doingTodos];
    // sortTodos.sort((a, b) => a.date < b.date ? -1 : 1);
    // setTodos(sortTodos);

    // sortTodos.sort((a, b) => {
    //   if (a > b) {
    //     a.date < b.date ? -1 : 1
    //   } else {
    //     a.date > b.date ? -1 : 1
    //   }
    // });
  };

  return (
    <>
      <GlobalStyle
        style={{
          backgroundColor: themeList[theme].background,
          color: themeList[theme].foreground
        }}
      />
      <Template theme={{ theme, themeList, toggleTheme }} todos={todos} finishedTodos={finishedTodos} >
        <Insert theme={{ theme, themeList, toggleTheme }} onInsert={handleInsert} />
        <List theme={{ theme, themeList, toggleTheme }} todos={todos} onRemove={handleRemove} onDoneRemove={handleDoneRemove} onToggle={handleToggle} onSort={handleSort} onModify={handleModify} />
      </Template>
    </>
  );
}

export default App;

// [추가 개선(새 프로젝트에 적용해도 됨)]
// 할일이 몇개인지 표시(전체, 완료, 미완료)
// 내용 숫자 줄바꿈 해결 -> 일부 특수문자 해결안됨( ?, !, $, () )
// 미입력시 버튼 비활성화 또는 유효성 검사 후 경고 띄우기
// 날짜도 같이 기록(디데이 표시)
// 할일 목록 정렬기능 (정렬 참고(https://jurgen-94.tistory.com/21))
// 완료된 일은 밑으로 내리기
// 할일 수정 기능
// 테마 적용(다크, 라이트 모드)

// 중요한 일은 핀 고정 버튼 누르면 상위로 올리기
// 드래그 앤 드랍 적용


// form태그 => submit이벤트, form태그 안쓰고 사용하기
// state를 여러개 사용했는데 객체 하나로 관리해볼것
// state는 쓰는 쪽에다가 선언할 것! 무조건 App에 다 선언하는게 아님