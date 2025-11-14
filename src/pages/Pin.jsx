import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";
import { IoMdBackspace } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 2vh;
`;

const PinInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  gap: 1.2vh;
`;

const PinBox = styled.input`
  width: 5vh;
  height: 4vh;
  text-align: center;
  font-size: 2.2vh;
  border: none;
  border-bottom: 2px solid #bdbdbd;
  outline: none;

  &:focus {
    border-bottom: 2px solid #000;
  }
`;

const UpiNotification = styled.div`
  height: 8vh;
  width: 80%;
  background-color: #fff09c;
  border-radius: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.3vh;
  margin: 10vh auto 0 auto;
  gap: 1vh;
  text-align: center;
`;

const NumberPad = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f2f2f2;
  padding: 2vh 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vh;
  text-align: center;
`;

const NumKey = styled.div`
  font-size: 3.8vh;
  padding: .5vh 0;
  border-radius: 1vh;
  margin: 0 auto;
  width: 10vh;
  user-select: none;
  color: #183994;

`;

const ClearKey = styled.div`
  padding: 1.5vh 0;
  color: #183994;
  border-radius: 1vh;
  margin: -1vh 1vh;
  width: 10vh;
  user-select: none;
`;

const OkKey = styled.div`
  font-size: 2.8vh;
  background: #183994;
  height: 5vh;
  border-radius: 90vh;
  color: white;
  margin: 0 auto;
  width: 5vh;
  user-select: none;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pin = () => {
  const refs = Array.from({ length: 6 }, () => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  const addDigit = (num) => {
    if (currentIndex > 5) return;

    refs[currentIndex].current.value = num;

    if (currentIndex < 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const clearDigit = () => {
    if (currentIndex === 0 && refs[0].current.value === "") return;

    let newIndex = currentIndex;

    if (refs[currentIndex].current.value === "") {
      newIndex = currentIndex - 1;
    }

    refs[newIndex].current.value = "";
    setCurrentIndex(newIndex);
  };

  const handleOk = () => {
    let pin = "";

    refs.forEach(ref => {
      pin += ref.current.value || "";
    });

    if (pin.length !== 6) {
      alert("Please enter complete 6-digit PIN");
      return;
    }

    // Navigate to any route you want
    navigate("/success");  // ⬅️ Change route here
  };

  return (
    <Container>
      <Header>
        <div>
          <p style={{ fontSize: "1.5vh", marginBottom: ".5vh" }}>State Bank of India</p>
          <p style={{ fontSize: "2vh" }}>XXXX0428</p>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1024px-UPI-Logo-vector.svg.png"
          alt=""
          style={{ height: "3vh", paddingRight: "2vh" }}
        />
      </Header>

      <div
        style={{
          backgroundColor: "#f3f3f3",
          height: "5vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2vh 3vh 1vh 2vh"
        }}
      >
        <p style={{ fontSize: "1.7vh" }}>Check Balance</p>
        <IoIosArrowForward style={{ color: "#000000", rotate: "90deg" }} />
      </div>

      <p style={{ textAlign: "center", marginTop: "2vh", fontSize: "1.6vh" }}>
        ENTER 6-DIGIT UPI PIN
      </p>

      <PinInputWrapper>
        {refs.map((inputRef, index) => (
          <PinBox
            key={index}
            maxLength={1}
            ref={inputRef}
            readOnly        // 🔒 prevents typing
            inputMode="none" // 🚫 prevents keyboard
            onFocus={(e) => {
              e.target.blur(); // 🚫 blur to avoid keyboard
              setCurrentIndex(index);
            }}
          />
        ))}
      </PinInputWrapper>

      <UpiNotification>
        <FaExclamationCircle
          style={{
            backgroundColor: "transparent",
            fontSize: "9vh",
            color: "#e2b100"
          }}
        />
        <p style={{ backgroundColor: "transparent", color: "#242203", fontSize: "1.6vh", fontWeight: "500" }}>
          UPI PIN keeps your account secure.
          Do not share this PIN with anyone.
        </p>
      </UpiNotification>

      {/* NUMBER PAD */}
      <NumberPad>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <NumKey key={num} onClick={() => addDigit(num)}>
            {num}
          </NumKey>
        ))}

        <ClearKey onClick={clearDigit}>
          <IoMdBackspace style={{ fontSize: "3.8vh" }} />
        </ClearKey>

        <NumKey onClick={() => addDigit(0)}>0</NumKey>

        <OkKey onClick={handleOk}>
          <IoCheckmarkSharp />
        </OkKey>
      </NumberPad>
    </Container>
  );
};

export default Pin;
