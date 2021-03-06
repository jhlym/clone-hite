import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2, Page3 } from '../pages';
import Home from '../pages/Home';

import logImg from '../assets/img/logo.png';
import LogoHeader from '../components/Header/LogoHeader';
import MenuHeader from '../components/Header/MenuHeader';

const Logo = () => {
  return <img src={logImg} alt="logo" width="93" height="25" />;
};

const Wrapper = styled.div`
  width: calc(100% - 100px);
`;

const SideNavBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 100%;
  margin-left: -100px;
  width: 200px;
  height: 100%;
  background-color: #2f3339;
  z-index: 5;
  transition: all 0.4s ease;

  &:hover {
    margin-left: -200px;
  }
`;

const DefaultLayout = () => {
  return (
    <Wrapper>
      {/* Header */}
      <LogoHeader logo={Logo} />
      <MenuHeader />
      <SideNavBar />
      {/* Sidebar */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page/1" component={Page1} />
        <Route exact path="/page/2" component={Page2} />
        <Route exact path="/page/3" component={Page3} />
        <Route exact path="/" component={Page1} />
        <Redirect to="/404" />
      </Switch>
    </Wrapper>
  );
};

export default DefaultLayout;
