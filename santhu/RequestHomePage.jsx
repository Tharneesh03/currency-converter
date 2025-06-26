import React from "react";
import styled from "styled-components";
import { Size32 } from "./Size32";
import { StudentMessageBox } from "./StudentMessageBox";

const RequestHomePageContainer = styled.div`
  height: 1024px;
  width: 1440px;
`;

const Overlap6 = styled.div`
  height: 1132px;
  left: 2px;
  position: relative;
  width: 1447px;
`;

const StudentMessageBoxInstance = styled(StudentMessageBox)`
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
`;

const Size32Instance = styled(Size32)`
  height: 32px !important;
  left: 429px !important;
  position: absolute !important;
  top: 309px !important;
  width: 32px !important;
`;

const TextWrapper17 = styled.div`
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 19px;
  left: 441px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 315px;
  white-space: nowrap;
`;

const Rectangle10 = styled.div`
  background-color: #ffffff;
  border: 3px solid;
  border-color: #001c75;
  height: 1024px;
  left: 508px;
  position: absolute;
  top: 0;
  width: 932px;
`;

const Rectangle11 = styled.div`
  background-color: #d9d9d9;
  border: 5px solid;
  border-color: #001c75;
  border-radius: 50px;
  height: 260px;
  left: 581px;
  position: absolute;
  top: 406px;
  width: 738px;
`;

const TextWrapper18 = styled.p`
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 35px;
  font-weight: 600;
  height: 42px;
  left: 636px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 511px;
  white-space: nowrap;
`;

export const RequestHomePage = () => {
  return (
    <RequestHomePageContainer className="request-home-page">
      <Overlap6 className="overlap-6">
        <StudentMessageBoxInstance className="student-message-box-instance" />
        <Size32Instance className="size-32-instance" color="#F3F3F3" />
        <TextWrapper17 className="text-wrapper-17">1</TextWrapper17>

        <Rectangle10 className="rectangle-10" />

        <Rectangle11 className="rectangle-11" />

        <TextWrapper18 className="text-wrapper-18">
          Click on any request to see the status
        </TextWrapper18>
      </Overlap6>
    </RequestHomePageContainer>
  );
};