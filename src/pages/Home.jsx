import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: #dedede;
  background-color: #0D0D0D;

`;

const Header = styled.div`
  height: auto;
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

  h1 {
    margin: 3vh;
    font-size: 2vh;
  }

  .icons {
    margin: -1vh 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BtnImages = styled.img`
  height: 11.3vh;
  padding: 0 1.5vh;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  /* For Safari and Chrome (sometimes adds blue border) */
  -webkit-tap-highlight-color: transparent;
`;

const Hlower = styled.img`
  width: 100%;
`;

const Home = () => {
  const navigate = useNavigate();

  // 🔹 Function to handle navigation
  const handleCheckBalanceClick = () => {
    navigate('/check-balance');
  };

  return (
    <Container>
      <Header>
        <Banner src="banner.png" alt="Banner" />
      </Header>

      <Buttons>
        <h1>Money Transfers</h1>
        <div className="icons">
          <BtnImages src="TMN.png" alt="Transfer Money Now" />
          <BtnImages src="TBS.png" alt="To Bank" />
          <BtnImages src="RG.png" alt="Recharge" />
          {/* ✅ This button navigates to another page */}
          <BtnImages
            src="CB.png"
            alt="Check Balance"
            onClick={handleCheckBalanceClick}
          />
        </div>
      </Buttons>

      <Hlower src="H-LOWER.png" alt="Footer" />
    </Container>
  );
};

export default Home;
