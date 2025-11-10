import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:100vh;
  width: 100%;
`;
const Header = styled.div`
  height:auto;
  width: 100%;
  background-color: #220442;
  padding: 1vh 0 0 0;
`;
const Banner = styled.img`
  width: 100%;
`;
const Buttons = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 3vh;

  h1{
    margin: 3vh;
    color: #DEDEDE;
    font-size: 2vh;
  }
  .icons{
    margin: -1vh 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const BtnImages = styled.img`
  height: 12vh;
  padding: 0 1.5vh;
`;
const Hlower = styled.img`
  width: 100%;
`

const Home = () => {
  return (
    <Container>
      <Header>
        <Banner src='banner.png' />
      </Header>
      <Buttons>
        <h1>Money Transfers</h1>
        <div className="icons">
          <BtnImages src='TMN.png' />
          <BtnImages src='TBS.png' />
          <BtnImages src='RG.png' />
          <BtnImages src='CB.png' />
        </div>
      </Buttons>
      <Hlower src='H-LOWER.png' />
    </Container>
  )
}

export default Home