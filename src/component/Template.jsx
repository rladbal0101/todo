import React from 'react';
import styled from 'styled-components';

const TemplateWrapper = styled.div`
  width: 600px;
  min-height: 600px;
  color: #555;
  font-size: 20px;
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
  
  .content {
    background: #FFF1DB;
  }
`;

function Template(props) {
  const { children } = props;
  
  return (
    <TemplateWrapper>
      <div className='title'>To do</div>
      <div className='content'>{children}</div>
    </TemplateWrapper>
  );
}

export default Template;