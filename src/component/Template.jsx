import React from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { GrAdd as AddIcon } from 'react-icons/gr';



const TemplateWrapper = styled.div`
  width: calc(100% - 50px);
  min-height: 600px;
  font-size: 22px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 14px;

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
    margin-bottom: 10px;
  }
  
  .checked {
    text-align: right;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  .content {
    background: #d7d7d7;
  }
`;

const AddButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  const allTodos = todos.length;
  const finished = finishedTodos.length;
  const navigate = useNavigate();


  console.log(theme);
  
  return (
    <TemplateWrapper
      style={{
        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}
    >
      <div className='title'>To do</div>
      <div className='btn-wrap'>
        <AddButton
          onClick={() => {
            navigate("/todo-write");
          }}
        >
          <AddIcon />
        </AddButton>
        <ThemeButton>
          {{theme} === 'light' ? <MdOutlineDarkMode onClick={toggleTheme} /> : <MdDarkMode onClick={toggleTheme} />}
        </ThemeButton>
      </div>
      <div className='checked'>완료 {finished} / {allTodos}</div>
      <div className='content'>{children}</div>
    </TemplateWrapper>
  );
}

export default Template;