import React from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const TemplateWrapper = styled.div`
  width: calc(100%);
  min-height: 100vh;
  font-size: 22px;
  /* margin: 0 auto; */

  .title {
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
  
  .content {
    /* background: #d7d7d7; */
  }
`;

const ThemeButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  cursor: pointer;
`;

function Template(props) {
  const { children, todos, finishedTodos, theme: { theme, themeList, toggleTheme } } = props;
  // const { children, todos, finishedTodos } = props;
  const allTodos = todos.length;
  const finished = finishedTodos.length;
  
  // console.log(theme);
  
  return (
    <TemplateWrapper
      style={{
        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}
    >
      <div className='title'>To do</div>
      <div className='btn-wrap'>
        {/* <ThemeButton>
          {{theme} === 'light' ? <MdOutlineDarkMode onClick={toggleTheme} /> : <MdDarkMode onClick={toggleTheme} />}
        </ThemeButton> */}
        <ThemeButton
          onClick={() => {toggleTheme(theme);}}
        >
          {{theme} === 'light' ? <MdOutlineDarkMode /> : <MdDarkMode />}
        </ThemeButton>
      </div>
      <div className='checked'>완료 {finished} / {allTodos}</div>
      <div className='content'>{children}</div>
    </TemplateWrapper>
  );
}

export default Template;