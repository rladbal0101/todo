import React from 'react';
import styled, { css } from 'styled-components';
import { CgRemoveR } from "react-icons/cg";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdCreate } from "react-icons/md";

const ListItemWrapper = styled.div`
  padding: 1rem;
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

const Date = styled.div`
`;

const Revision = styled.div`
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
  const { todo, onRemove, onToggle } = props;
  const { id, text, checked } = todo;
  
  // console.log(id, text);
  // console.log(props);

  return (
    <ListItemWrapper>
      <Checkbox checked={checked}
        onClick={() => { onToggle(id); }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text checked={checked}>{text}</Text>
      <Date></Date>
      <Revision>
        <MdCreate />
      </Revision>
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