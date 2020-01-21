import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: rgb(245, 245, 245);
`;

const LogoHeader = ({ logo: Logo }) => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default LogoHeader;
