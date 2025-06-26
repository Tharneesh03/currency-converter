import React from "react";
import styled from "styled-components";

const StudentLoginPageContainer = styled.div`
  background-color: #ffffff;
  height: 1024px;
  overflow: hidden;
  width: 1440px;
`;

const OverlapGroup = styled.div`
  height: 1054px;
  position: relative;
  width: 1523px;
`;

const ImageContainer = styled.div`
  background-image: url(./image-container.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10px;
  height: 1054px;
  left: 0;
  position: absolute;
  top: 0;
  width: 720px;
`;

const Rectangle = styled.div`
  background-color: #001c74;
  border-radius: 100px;
  box-shadow: 0px 4px 4px #00000040;
  height: 1024px;
  left: 592px;
  position: absolute;
  top: 0;
  width: 931px;
`;

const Div = styled.div`
  background-color: #f5f5f5;
  border-radius: 50px;
  box-shadow: 0px 4px 4px #00000040;
  height: 859px;
  left: 689px;
  position: absolute;
  top: 83px;
  width: 657px;
`;

const Rectangle2 = styled.div`
  background-color: #0b2f9f;
  border-radius: 15px;
  height: 72px;
  left: 827px;
  position: absolute;
  top: 767px;
  width: 375px;
`;

const TextWrapper = styled.div`
  color: #001c75;
  font-family: "Kufam-Bold", Helvetica;
  font-size: 50px;
  font-weight: 700;
  height: 65px;
  left: 935px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 240px;
`;

const TextWrapper2 = styled.div`
  color: #ffffff;
  font-family: "Kufam-SemiBold", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 39px;
  left: 972px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 783px;
`;

const Rectangle3 = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  height: 48px;
  left: 736px;
  position: absolute;
  top: 532px;
  width: 563px;
`;

const TextWrapper3 = styled.div`
  color: #001c75;
  font-family: "Kufam-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  height: 39px;
  left: 744px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 481px;
`;

const Rectangle4 = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  height: 48px;
  left: 737px;
  position: absolute;
  top: 395px;
  width: 563px;
`;

const TextWrapper4 = styled.div`
  color: #0000004c;
  font-family: "Kufam-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 26px;
  left: 759px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 405px;
`;

const TextWrapper5 = styled.div`
  color: #0000004c;
  font-family: "Kufam-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 26px;
  left: 756px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 542px;
`;

const TextWrapper6 = styled.div`
  color: #001c75;
  font-family: "Kufam-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  height: 39px;
  left: 745px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 349px;
`;

const TextWrapper7 = styled.div`
  color: #00000099;
  font-family: "Kufam-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 26px;
  left: 1078px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 602px;
`;

export const StudentLoginPage = () => {
  return (
    <StudentLoginPageContainer>
      <OverlapGroup>
        <ImageContainer />
        <Rectangle />
        <Div />
        <Rectangle2 />
        <TextWrapper>LOGIN</TextWrapper>
        <TextWrapper2>LOGIN</TextWrapper2>
        <Rectangle3 />
        <TextWrapper3>Password</TextWrapper3>
        <Rectangle4 />
        <TextWrapper4>Enter Email</TextWrapper4>
        <TextWrapper5>Enter Password</TextWrapper5>
        <TextWrapper6>Email</TextWrapper6>
        <TextWrapper7>Forgot Password??</TextWrapper7>
      </OverlapGroup>
    </StudentLoginPageContainer>
  );
};
