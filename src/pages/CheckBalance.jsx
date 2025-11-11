import React from 'react'
import styled from 'styled-components'
import { IoArrowBackOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 3vh 2vh;
`;
const Header = styled.nav`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BankBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  height: 9vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBalance = () => {
  const navigate = useNavigate();

  // 🔹 Function to handle navigation
  const handleBackHome = () => {
    navigate('/');
  };
  const handlePinPage = () => {
    navigate('/pin');
  };

  return (
    <Container>
      <Header>
        <IoArrowBackOutline style={{ fontSize: "3vh", fontWeight: 200 }} onClick={handleBackHome}/>
        <GoQuestion style={{ fontSize: "3vh", fontWeight: 200 }} />
      </Header>
      <h1 style={{ margin: "3vh 0 4vh 0", fontSize: "2.8vh", color: "#dedede" }}>Check Balance</h1>
      <BankBox>

        {/* MAIN BANK */}
        <Box onClick={handlePinPage}>
          <div style={{ display: "flex", alignItems: 'center' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51-yXH33Jr7d3xc_qdspjImvqAiXFvhPOdQ&s" alt="bank logo" style={{ height: "5vh", borderRadius: "1.8vh", marginRight: "2vh" }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: "2.6vh" }}>
              <p style={{ fontSize: "1.8vh" }}>State Bank of India - 0428</p>
              <p style={{ fontSize: "1.5vh", color: "#a1a1a1" }}>Bank Account</p>
            </div>
          </div>
          <IoIosArrowForward style={{ color: "#a1a1a1" }} />
        </Box>

        {/* PHONEPE WALLET */}
        <Box>
          <div style={{ display: "flex", alignItems: 'center' }}>
            <CiWallet style={{ fontSize: "5vh", marginRight: "2vh", fontWeight: 200 }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: "2.6vh" }}>
              <p style={{ fontSize: "1.8vh" }}>PhonePe Wallet</p>
              <p style={{ fontSize: "1.5vh", color: "#a1a1a1" }}>Balance: ₹0</p>
            </div>
          </div>
          <p style={{ color: "purple", fontSize: "1.6vh", fontWeight: 600 }}>Activate</p>
        </Box>
      </BankBox>
    </Container>
  )
}

export default CheckBalance