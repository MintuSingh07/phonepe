import React from 'react'
import styled from 'styled-components'
import { IoArrowBackOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { GoPlusCircle } from "react-icons/go";
import "../App.css";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 3vh 2vh;
  background-color: #0D0D0D;
  color: #dedede;
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
  margin: -.5vh 0;
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
        <IoArrowBackOutline style={{ fontSize: "3vh", fontWeight: 200 }} onClick={handleBackHome} />
        <GoQuestion style={{ fontSize: "3vh", fontWeight: 200 }} />
      </Header>
      <h1 style={{ margin: "3vh 0 4vh 0", fontSize: "2.5vh", color: "#dedede", fontWeight: 600 }}>Check Balance</h1>
      <BankBox>

        {/* MAIN BANK */}
        <Box onClick={handlePinPage}>
          <div style={{ display: "flex", alignItems: 'center' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51-yXH33Jr7d3xc_qdspjImvqAiXFvhPOdQ&s" alt="bank logo" style={{ height: "4vh", borderRadius: "1.4vh", marginRight: "2vh" }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: "2.3vh" }}>
              <p style={{ fontSize: "1.7vh" }}>State Bank of India - 0428</p>
              <p style={{ fontSize: "1.4vh", color: "#a1a1a1" }}>Bank Account</p>
            </div>
          </div>
          <IoIosArrowForward style={{ color: "#a1a1a1" }} />
        </Box>

        {/* PHONEPE WALLET */}
        <Box>
          <div style={{ display: "flex", alignItems: 'center' }}>
            <CiWallet style={{ fontSize: "4.2vh", marginRight: "2vh", fontWeight: 200 }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: "2.3vh" }}>
              <p style={{ fontSize: "1.7vh" }}>PhonePe Wallet</p>
              <p style={{ fontSize: "1.4vh", color: "#a1a1a1" }}>Balance: ₹0</p>
            </div>
          </div>
          <p style={{ color: "#ba53c8", fontSize: "1.6vh", fontWeight: 600 }}>Activate</p>
        </Box>

        {/* ADD BANK */}
        <Box>
          <div style={{ display: "flex", alignItems: 'center' }}>
            <GoPlusCircle style={{ fontSize: "3.5vh", marginRight: "2vh", fontWeight: 200 }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: "2.3vh" }}>
              <p style={{ fontSize: "1.7vh" }}>Add UPI account</p>
              <p style={{ fontSize: "1.4vh", color: "#a1a1a1" }}>RuPay card, bank account & more</p>
            </div>
          </div>
          <IoIosArrowForward style={{ color: "#a1a1a1" }} />
        </Box>

        {/* ADVERTISEMENT */}
        <div style={{height: "35vh", width: "100%", backgroundColor: "gray", marginTop: "4vh", borderRadius: "2%"}}></div>
      </BankBox>
    </Container>
  )
}

export default CheckBalance