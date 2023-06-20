import React, { useState } from 'react';
import styled from 'styled-components';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { GrAdd as AddIcon } from 'react-icons/gr';

const InsertWrapper = styled.form`
  display: flex;
  border-bottom: 1px solid #ccc;
  background: #E8E3E3;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 12px;
  padding: 12px;
  flex: 1;

  ::placeholder {
    color: #B3BCBF;
  }
  `;

const InputDateWrap = styled.div`
  display: flex;
  align-items: center;

  .input-date-text {
    font-size: 12px;
  }
`;

const InputDate = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: #B3BCBF;
  cursor: pointer;

`;

// const InputDate = styled(DatePicker)`
//   /* background: #216ba5; */
//   outline: none;
//   border: none;
//   font-size: 12px;
//   display: flex;
//   align-items: center;
//   margin: 0 15px;
//   color: #B3BCBF;
//   cursor: pointer;

// `;


const StyledAddButton = styled.button`
  font-size: 16px;
  padding: 12px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;
  
  & svg:hover {
    color: red; // 다시 확인해야함
  }
`;

function Insert(props) {
  const { onInsert, theme: { theme, themeList, toggleTheme } } = props;
  
  const [value, setValue] = useState('');  
  const [dateValue, setDateValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    if (value == "") {
      alert('내용을 입력하세요');
    } else if (dateValue == "") {
      alert('완료 기한을 입력하세요');
    } else {
      onInsert(value, dateValue);
      setValue('');
      setDateValue('');
    }
    e.preventDefault();
  };

  return (
    <InsertWrapper onSubmit={handleSubmit}
      style={{
        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}
    >
      <StyledInput
        type='text'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={handleChange}
      />
      <InputDateWrap>
        {/* <label className='input-date-text' htmlFor='date'>완료기한 : </label> */}
        {/* <InputDate
          type='date'
          id='inputDate'
          value={dateValue}
          onChange={handleDateChange}
        /> */}
        <InputDate
          type='date'
          id='inputDate'
          value={dateValue}
          onChange={handleDateChange}
        />
      </InputDateWrap>
      <StyledAddButton type='submit'>
        <AddIcon />
      </StyledAddButton>
    </InsertWrapper>
  );
}

export default Insert;

// 달력 커스텀
// https://www.youtube.com/watch?v=oyBzRPd9Ur8
// 달력 라이브러리
// https://devilfront.tistory.com/122