import React from "react";
import styled from "styled-components";
import { useCustomColor } from "../../hooks/use-custom-color";

const MonthWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: 1rem;
  padding: 1rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  color: #fff;
  border: 1px solid transparent;
  &.active {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
    border-color: rgba(0, 0, 0, 0.7);
  }
`;

const MonthCard = ({ usersLength, month, isActive, onHover }) => {
  const color = useCustomColor(usersLength);

  return (
    <MonthWrapper
      onMouseOver={onHover}
      style={{ background: color }}
      className={isActive ? "active" : ""}
    >
      {month}
    </MonthWrapper>
  );
};

export default MonthCard;
