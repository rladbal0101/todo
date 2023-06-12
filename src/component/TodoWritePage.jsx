import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from "uuid";
import { MdFileDownloadDone as AddIcon } from "react-icons/md";

import Insert from './Insert';
import { useNavigate } from 'react-router-dom';

const TodoWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.p`
  font-size: 26px;
  color: #555;
  margin: 30px 0;
`;

const Date = styled.div`
  width: calc(100% - 100px);
  padding: 12px 0;
  font-size: 12px;
`;

const Title = styled.input`
  width: calc(100% - 100px);
  height: 40px;
  font-size: 12px;
  padding: 4px 10px;
  background: #fcfcfc;
  outline: none;
  border: 1px solid #999;
  box-sizing: border-box;
`;


const Content = styled.input`
  width: calc(100% - 100px);
  height: 40px;
  font-size: 12px;
  padding: 4px 10px;
  background: #fcfcfc;
  outline: none;
  border: 1px solid #999;
  line-height: 1.6;
  margin-top: 20px;
  box-sizing: border-box;
  `;

const Button = styled.button`
  width: 50px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background: #FFCCCC;
  }
`;

// const today = new Date();

// const nextId = useRef(1);

// 추가
// const handleInsert = useCallback((text) => {
//   const todo = {
//     id: uuidv4(),
//     text,
//     checked: false
//   };

//   setTodos(todos => todos.concat(todo));

//   nextId.current += 1;
// }, []);


function TodoWritePage(props) {
  const { today } = props;

  const [day, setDay] = useState('월');


  console.log(today.getDay());
  console.log(day);

  // switch (today.getDay()) {
  //   case 0:
  //     setDay('일');
  //     break;
  //   case 1:
  //     setDay('월');
  //     break;
  //   case 2:
  //     setDay('화');
  //     break;
  //   case 3:
  //     setDay('수');
  //     break;
  //   case 4:
  //     setDay('목');
  //     break;
  //   case 5:
  //     setDay('금');
  //     break;
  //   case 6:
  //     setDay('토');
  //     break;
  //   default:
  //     break;
  // }

  
  const navigate = useNavigate();
  return (
    <TodoWriteWrapper>
      <PageTitle><AddIcon />
      </PageTitle>
      <Date>{`작성일 : ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${day}`} </Date>
      {/* <Insert onInsert={handleInsert} today={today} /> */}
      {/* <Insert today={today} /> */}
      <Title placeholder='할 일을 입력하세요.' />
      <Content placeholder='설명' />
      <Button onClick={() => {
        navigate("/");
      }}>완료</Button>
      
    </TodoWriteWrapper>
  );
}

export default TodoWritePage;