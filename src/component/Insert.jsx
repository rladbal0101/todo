import React, { useState } from 'react';
import styled from 'styled-components';
import { GrAdd as AddIcon } from 'react-icons/gr';

const InsertWrapper = styled.form`
  display: flex;
  background: #ddd;
  /* display: none; */
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 12px;
  padding: 12px;
  flex: 1;
`;

const StyledButton = styled.button`
  border: none;
  font-size: 16px;
  background-color: #ddd;
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
  const { onInsert } = props;

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    onInsert(value);
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
      <StyledButton type='submit'>
        <AddIcon />
      </StyledButton>
    </InsertWrapper>
  );
}

export default Insert;