import React from "react";
import styled from "styled-components";
import { Circle } from "./Circle";
import { Component } from "./Component";

const StyledStudentMessageBox = styled.div`
  background-color: #ffffff;
  height: 1024px;
  overflow: hidden;
  width: 1440px;

  & .overlap-5 {
    height: 1132px;
    left: 2px;
    position: relative;
    width: 1447px;
  }

  & .component-4 {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .circle-instance {
    height: 32px !important;
    left: 426px !important;
    position: absolute !important;
    top: 311px !important;
    width: 32px !important;
  }

  & .text-wrapper-15 {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 438px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 318px;
    white-space: nowrap;
  }

  & .text-wrapper-16 {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 60px;
    left: 159px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 296px;
    width: 253px;
  }
`;

export const StudentMessageBox = () => {
  return (
    <StyledStudentMessageBox className="student-message-box">
      <div className="overlap-5">
        <Component className="component-4" />
        <Circle className="circle-instance" color="#F3F3F3" />
        <div className="text-wrapper-15">1</div>

        <p className="text-wrapper-16">
          Requesting a Machine learning Lab for Booking
        </p>
      </div>
    </StyledStudentMessageBox>
  );
};