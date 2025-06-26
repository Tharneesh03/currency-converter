import React from "react";
import styled from "styled-components";
import { Component } from "./Component";

const StyledLoginasFrame = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const ComponentWrapper = styled.div`
  height: 1055px;
  width: 1427px;
`;

const Component6 = styled.div`
  width: unset !important;
`;

const ComponentInstance = styled.div`
  width: 1427px !important;
`;

export const LoginasFrame = () => {
  return (
    <StyledLoginasFrame className="loginas-frame">
      <ComponentWrapper className="component-wrapper">
        <Component
          className="component-6"
          overlapGroupClassName="component-instance"
        />
      </ComponentWrapper>
    </StyledLoginasFrame>
  );
};