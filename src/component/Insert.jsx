import React, { useState } from 'react';
import styled from 'styled-components';
import { GrAdd as AddIcon } from 'react-icons/gr';

const InsertWrapper = styled.form`
  display: flex;
  background: #ddd;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 12px;
  padding: 12px;
  flex: 1;
`;

const Date = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  /* display: none; */
`;

const StyledButton = styled.button`
  border: none;
  font-size: 16px;
  background: #ddd;
  padding: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    background-color: #EAB6C4;
  }
`;


function Insert(props) {
  const { onInsert, today } = props;

  const [value, setValue] = useState('');  

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    if (value == "") {
      alert('내용을 입력하세요');
    } else {
      onInsert(value);
      
    }
    setValue('');
    e.preventDefault();
  };

  return (
    <InsertWrapper onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={handleChange}
      />
      <Date>{`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`}</Date>
      <StyledButton type='submit' >
        <AddIcon />
      </StyledButton>
    </InsertWrapper>
  );
}

export default Insert;