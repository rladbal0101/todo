import React from 'react';
import styled, { css } from 'styled-components';
import { CgRemoveR } from "react-icons/cg";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

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
    color: red;
  }
`;

const Text = styled.div`
  margin-left: 10px;
  flex: 1;

  ${props => props.checked &&
    css`
      color: orange;
    `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  color: blue;
  cursor: pointer;
`;

function ListItem(props) {
  const { todo, onRemove, onToggle } = props;
  const { id, text, checked } = todo;
  
  console.log(id, text);

  return (
    <ListItemWrapper>
      <Checkbox checked={checked}
        onClick={() => { onToggle(id); }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text checked={checked}>{text}</Text>
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