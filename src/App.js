import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import MainPage from "./component/MainPage";
import TodoWritePage from "./component/TodoWritePage";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #e9e9e9;
  }
`;
const today = new Date();


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage today={today} />} />
        <Route path="/todo-write" element={<TodoWritePage today={today} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// [추가 개선(새 프로젝트에 적용해도 됨)]
// 할일이 몇개인지 표시(전체, 완료, 미완료)
// 내용 숫자 줄바꿈 해결 -> 일부 특수문자 해결안됨( ?, !, $, () )
// 미입력시 버튼 비활성화 또는 유효성 검사 후 경고 띄우기


// 테마 적용(다크, 라이트 모드)

// 날짜도 같이 기록(디데이 표시)
// 완료된 일은 밑으로 내리기
// 중요한 일은 필 고정 버튼 누르면 상위로 올리기
// 할일 목록 정렬기능
// 드래그 앤 드랍 적용
// 할일 수정 기능