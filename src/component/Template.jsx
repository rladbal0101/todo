import React from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const TemplateWrapper = styled.div`
  width: calc(100%);
  min-height: 100vh;
  font-size: 22px;
`;

const TemplateTopWrapper = styled.div`
  border-bottom: 1px solid #ccc;

  .title {
    font-weight: bold;
    text-align: center;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-wrap {
    display: flex;
    justify-content: flex-end;
    margin: 0 12px 12px 0;
  }
  
  .checked {
    text-align: right;
    font-size: 14px;
    margin: 0 12px 12px 0;
  }
`;

const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  color: #8C8C8C;
  border: none;
  background: none;
  font-size: 18px;
  align-items: center;
  margin-left: 6px;
  cursor: pointer;
  
  :hover {
    color: #7CE9F9;
  }
`;

function Template(props) {
  const { children, todos, finishedTodos, theme: { theme, themeList, toggleTheme } } = props;
  // const { children, todos, finishedTodos } = props;
  const allTodos = todos.length;
  const finished = finishedTodos.length;
  
  return (
    <TemplateWrapper
      style={{
        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}
    >
      <TemplateTopWrapper>
        <div className='title'>To do</div>
        <div className='btn-wrap'>
          <ThemeButton
            onClick={() => {
              toggleTheme(theme);
            }}
          >
            {theme === 'light' ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </ThemeButton>
        </div>
        <div className='checked'>완료 {finished} / {allTodos}</div>
      </TemplateTopWrapper>
      <div>{children}</div>
    </TemplateWrapper>
  );
}

export default Template;