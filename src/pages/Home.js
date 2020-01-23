import React from 'react';
// import Slider from 'react-slick';
import Slider from '@farbenmeer/react-spring-slider';

import styled from 'styled-components';
import { Grid, Container, Header, Segment, Image, Divider, List } from 'semantic-ui-react';

import one from '../assets/img/carousel/1.jpg';
import two from '../assets/img/carousel/2.png';
import three from '../assets/img/carousel/3.png';
import four from '../assets/img/carousel/4.png';
import five from '../assets/img/carousel/5.jpg';
import six from '../assets/img/carousel/6.jpg';

import photo1 from '../assets/img/photozone/1.png';
import photo2 from '../assets/img/photozone/2.jpg';
import photo3 from '../assets/img/photozone/3.jpg';
import photo4 from '../assets/img/photozone/4.png';
import photo5 from '../assets/img/photozone/5.png';
import photo6 from '../assets/img/photozone/6.png';
import photo7 from '../assets/img/photozone/7.png';
import photo8 from '../assets/img/photozone/8.png';
import photo9 from '../assets/img/photozone/9.jpg';

const Img = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center center;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.height ? props.height : '260px')};
  padding: 8px;
  border: none;
  overflow: hidden;
  img {
    width: 100%;
  }
  &:hover div {
    width: 100%;
  }
`;

const Bullet = styled.li`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  margin: 0 4px;
  opacity: ${props => (props.isActive ? 0.5 : 1)};
  &:hover {
    cursor: pointer;
  }
`;

const HoverBox = styled.div`
  position: absolute;
  width: 0;
  height: 100%;
  opacity: 0.9;
  background-color: #1253fa;
  transition: all 0.4s ease;
  color: white;
  & div.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    height: inherit;
  }
  &:hover div,
  &:hover .container div {
    visibility: visible;
  }
  &:hover .container div {
    width: 100px;
    height: 35px;
    margin-top: 10px;
  }
  & p {
    margin: 0;
  }
  &:hover p,
  &:hover div,
  &:hover .container div div {
    transition-delay: 0.15s;
  }
`;

const MoveButton = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = ({ children, width }) => {
  return (
    <Grid.Column width={width} style={{ padding: '9px' }}>
      {children}
    </Grid.Column>
  );
};

const ArrowComponent = ({ onClick, direction }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1em',
        backgroundColor: 'white',
      }}
      onClick={onClick}
    >
      {direction}
    </div>
  );
};

const BulletComponent = ({ onClick, isActive }) => <Bullet isActive={isActive} onClick={onClick} />;

const Home = () => {
  return (
    <>
      <Grid style={{ height: '480px' }}>
        <Column widescreen={16}>
          <Slider hasBullets ArrowComponent={ArrowComponent} BulletComponent={BulletComponent}>
            <Img src={one} />
            <Img src={two} />
            <Img src={three} />
            <Img src={four} />
            <Img src={five} />
            <Img src={six} />
          </Slider>
        </Column>
      </Grid>
      <Container>
        <Grid>
          <Header as="h3" style={{ margin: '30px 0' }}>
            사용자들이 가장 많이 찾으신 컨텐츠를 소개합니다.
          </Header>
        </Grid>

        <Grid column={2}>
          <Column width={8}>
            <Grid>
              <Column width={8}>
                <Grid.Row>
                  <Box>
                    <HoverBox>
                      <div className="container">
                        <p>국내유일 청정 대나무숯으로</p>
                        <p>4번 걸러 더 깨끗해진</p>
                        <p>참이슬 fresh</p>
                        <div style={{ visibility: 'hidden' }}>
                          <MoveButton>Learn More</MoveButton>
                        </div>
                      </div>
                    </HoverBox>
                    <img src={photo1} alt="" />
                  </Box>
                  <Box>
                    <HoverBox>
                      <div className="container">
                        <p>국내유일 청정 대나무숯으로</p>
                        <p>4번 걸러 더 깨끗해진</p>
                        <p>참이슬 fresh</p>
                        <div>
                          <MoveButton>Learn More</MoveButton>
                        </div>
                      </div>
                    </HoverBox>
                    <img src={photo3} alt="" />
                  </Box>
                </Grid.Row>
              </Column>
              <Column width={8}>
                <Box height="100%">
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo2} alt="" />
                </Box>
              </Column>
            </Grid>
          </Column>

          <Column width={8}>
            <Grid column={2}>
              <Column width={8}>
                <Box>
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo4} alt="" />
                </Box>
              </Column>
              <Column width={8}>
                <Box>
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo5} alt="" />
                </Box>
              </Column>
              <Column width={16} style={{ paddingTop: '0' }}>
                <Box>
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo6} alt="" />
                </Box>
              </Column>
            </Grid>
          </Column>
          <Column width={16}>
            <Grid>
              <Column width={4}>
                <Box>
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo7} alt="" />
                </Box>
              </Column>
              <Column width={8}>
                <Box>
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo8} alt="" />
                </Box>
              </Column>
              <Column width={4}>
                <Box>
                  <HoverBox>
                    <div className="container">
                      <p>국내유일 청정 대나무숯으로</p>
                      <p>4번 걸러 더 깨끗해진</p>
                      <p>참이슬 fresh</p>
                      <div>
                        <MoveButton>Learn More</MoveButton>
                      </div>
                    </div>
                  </HoverBox>
                  <img src={photo9} alt="" />
                </Box>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Container>
      <Grid>
        <Grid.Column style={{ padding: 0 }}>
          <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign="center">
              <Grid divided inverted stackable>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Group 1" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Group 2" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Group 3" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid>

              <Divider inverted section />
              <Image centered size="mini" src="/logo.png" />
              <List horizontal inverted divided link size="small">
                <List.Item as="a" href="#">
                  Site Map
                </List.Item>
                <List.Item as="a" href="#">
                  Contact Us
                </List.Item>
                <List.Item as="a" href="#">
                  Terms and Conditions
                </List.Item>
                <List.Item as="a" href="#">
                  Privacy Policy
                </List.Item>
              </List>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Home;
