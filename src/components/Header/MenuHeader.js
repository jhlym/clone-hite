import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

const Wrapper = styled.div`
  /* min-height: 100px; */
  position: relative;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const MenuList = styled.li`
  /* background-color: #000; */
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 600;
    width: inherit;
    height: 100px;
    padding: 0 2rem;

    &:hover span:after {
      background: #2f90ff;
    }

    &:hover > div {
      height: 270px;
    }
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
    height: 3px;
    background: #fff;
    transition: 'background' 0.2s ease;
  }
`;

const SubWrapper = styled.div`
  /* height: 270px; */
  height: 0px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #1253fa;
  opacity: 0.9;
  top: 98px;
  transition: all 0.4s ease;
  display: flex;
`;

const MenuHeader = ({ menus }) => {
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <MenuList>
            <a href="#">
              <span>Company</span>
              <SubWrapper className="sub"></SubWrapper>
            </a>
          </MenuList>
          <MenuList>
            <a href="#">
              <span>SOCIAL &amp; Media</span>
              <SubWrapper className="sub"></SubWrapper>
            </a>
          </MenuList>
          <MenuList>
            <a href="#">
              <span>CSR &amp; JOY</span>
              <SubWrapper className="sub"></SubWrapper>
            </a>
          </MenuList>
          <MenuList>
            <a href="#">
              <span>CUSTOMER CENTER</span>
              <SubWrapper className="sub"></SubWrapper>
            </a>
          </MenuList>
          {menus.map(menu => (
            <MenuList>
              <Link to={menu.path}>
                <span>{menu.title}</span>
                {menu.children && <SubWrapper></SubWrapper>}
              </Link>
            </MenuList>
          ))}
        </Navbar>
      </Container>
    </Wrapper>
  );
};

MenuHeader.defaultProps = {
  menus: [],
};

export default MenuHeader;
