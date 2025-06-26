import React from "react";
import styled from "styled-components";
import { StudentLoginPage } from "./StudentLoginPage";
const StyledStaffLoginPage = styled.div`
 height: 1024px;
 width: 1440px;
 & .student-login-page-instance {
 width: unset !important;
 }
 & .design-component-instance-node {
 background-image: url(./image.png) !important;
 }
`;
export const StaffLoginPage = () => {
 return (
 <StyledStaffLoginPage className="staff-login-page">
 <StudentLoginPage
 className="student-login-page-instance"
 imageContainerClassName="design-component-instance-node"
 />
 </StyledStaffLoginPage>
 );
};
