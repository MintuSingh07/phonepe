import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoCheckmarkSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.7); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    color: #e9f0f1;
    background-color: #1a1a1a;
    padding: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const OkKey = styled.div`
  font-size: 2.8vh;
  background: #177005;
  height: 5vh;
  border-radius: 90vh;
  color: white;
  margin: 2vh auto;
  width: 5vh;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9vh;
  animation: ${pulse} 1.77s ease-in-out infinite;
`;

const DoneButtonWrapper = styled.div`
  width: 100%;
  padding: 2vh 0;
  border-top: 1px solid #5a5a5a;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;

const DoneButton = styled.button`
  width: 100%;
  padding: .5vh 0;
  border: none;
  background-color: transparent;
  color: #7f4cd7;
  font-size: 2vh;
  font-weight: 600;
  text-align: center;
`;

const AvailableBalance = () => {

    const navigate = useNavigate();   // ✅ FIXED

    const generateRandomBalance = () => {
        return (Math.random() * (6 - 1) + 1).toFixed(2);
    };

    const [balance, setBalance] = useState("0.00");

    useEffect(() => {
        setBalance(generateRandomBalance());
    }, []);

    const handleDone = () => {
        navigate("/");   // redirect to home
    };

    return (
        <Container>
            <div>
                <OkKey>
                    <IoCheckmarkSharp />
                </OkKey>

                <h1 style={{ textAlign: 'center', fontSize: "2.5vh", fontWeight: "600" }}>
                    Balance check successful
                </h1>

                <div style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: "center",
                    scale: ".970",
                    margin: "3.5vh 0 1.4vh 0"
                }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51-yXH33Jr7d3xc_qdspjImvqAiXFvhPOdQ&s"
                        alt="bank logo"
                        style={{ height: "3vh", borderRadius: "1vh", marginRight: "1vh" }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: "2.3vh" }}>
                        <p style={{ fontSize: "1.7vh" }}>
                            State Bank of India - 0428
                        </p>
                    </div>
                </div>

                <p style={{ color: "#b1b1b1", textAlign: "center", fontSize: "1.5vh" }}>
                    Available Balance
                </p>

                <p style={{ textAlign: "center", fontSize: "3.7vh", marginTop: ".3vh" }}>
                    ₹{balance}
                </p>

                <div style={{ height: "35vh", width: "100%", backgroundColor: "gray", marginTop: "4vh", borderRadius: "2%" }}></div>
            </div>

            <DoneButtonWrapper>
                <DoneButton onClick={handleDone}>DONE</DoneButton>
            </DoneButtonWrapper>

        </Container>
    );
};

export default AvailableBalance;
