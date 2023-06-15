import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CgRemoveR } from "react-icons/cg";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdCreate, MdDone } from "react-icons/md";

const ListItemWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.div`
  font-display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    font-size: 14px;
    color: #555;
    color: ${props => props.checked && '#aaa'};
  }
`;

const DDay = styled.div`
  width: 40px;
  font-size: 12px;
  margin-left: 10px ;
`;

const Text = styled.div`
  width: 500px;
  margin-left: 10px;
  flex: 1;
  font-size: 12px;
  color: #555;
  padding: 0 8px;
  word-break: break-all; // 글자 줄바꿈 (?, !, $, () 해결 안됨)

  ${props => props.checked &&
    css`
      color: #999;
      text-decoration: line-through;
    `
  }
`;

const TextEditedInput = styled.input`
  width: 500px;
  height: 20px;
  margin-left: 10px;
  flex: 1;
  font-size: 12px;
  color: #555;
  padding: 0 8px;
  word-break: break-all;
`;

const CompletionInputDate = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 12px;
`;
const CompletionDate = styled.div`
  font-size: 12px;
`;

const Edited = styled.div`
  font-size: 15px;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    color: #999;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  padding-left: 14px;
  cursor: pointer;
  &:hover {
    color: #bf2020;
  }
`;

function ListItem(props) {
  const { todo, onRemove, onToggle, onModify } = props;
  const { id, text, checked, date } = todo;
  const [edited, setEdited] = useState(false); // 수정 모드인지 확인하기 위한 플래그 값
  const [newText, setNewText] = useState(text);
  const [newDate, setNewDate] = useState(date);

  // D-day 구하기
  const today = new Date();
  const someDay = new Date(date);
  const diffDate = someDay.getTime() - today.getTime();
  const dDayResult = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
  const Day = dDayResult > 0 ? dDayResult * (-1) : `+${dDayResult * (-1)}`;

  // 수정(텍스트, 날짜)
  const handleTextEdited = (e) => {
    setNewText(e.target.value);
    // console.log(e.target.value);
  };
  const handleDateEdited = (e) => {
    setNewDate(e.target.value);
    // console.log(e.target.value);    
  };
  
  const handleEdited = () => {
    // const editTodo = {
    //   id,
    //   text: newText,
    //   checked,
    //   date: newDate
    // };
    // console.log(editTodo);
    
    console.log('수정완료');
    onModify();
  };

  return (
    <ListItemWrapper>
      <Checkbox checked={checked}
        onClick={() => { onToggle(id); }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <DDay>D{Day}</DDay>
      {edited 
        ? <TextEditedInput type="text" value={newText} onChange={handleTextEdited} />
        : <Text checked={checked}>{text && newText}</Text>
      }
      {edited
        ? <CompletionInputDate type='date' value={newDate} onChange={handleDateEdited} />
        : <CompletionDate>{todo.date}</CompletionDate>
      }
      <Edited
        onClick={() => {
          setEdited(edited => !edited);
          {edited && handleEdited();}
        }}
      >
        {edited
          ? <MdDone />
          : <MdCreate/>
        }
      </Edited>
      <Remove
        onClick={() => { onRemove(id); }}
      >
        <CgRemoveR />
      </Remove>
    </ListItemWrapper>
  );
}

// export default ListItem;
export default React.memo(ListItem);