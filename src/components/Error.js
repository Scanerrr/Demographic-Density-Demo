import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 1.25rem 0;
  max-width: 20rem;
  margin: 0 auto;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

const Error = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Error;
