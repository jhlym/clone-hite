import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from 'semantic-ui-react';

const Wrapper = styled(Container)`
  min-height: 100px;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  background-color: #000;
`;

const MenuList = styled.li`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  & a {
    display: flex;
    height: inherit;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  span {
    position: relative;
  }
  span:after {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background: #2f90ff;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Navbar>
        <MenuList>
          <a href="#">
            <span>Menu</span>
          </a>
        </MenuList>
        <MenuList>
          <a href="#">
            <span>Menu</span>
          </a>
        </MenuList>
        <MenuList>
          <a href="#">
            <span>Menu</span>
          </a>
        </MenuList>
        <MenuList>
          <a href="#">
            <span>Menu</span>
          </a>
        </MenuList>
      </Navbar>
    </Wrapper>
  );
};

export default Home;
