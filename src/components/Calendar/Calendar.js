import React from "react";
import MonthCard from "./MonthCard";
import styled from "styled-components";
import { getMonthsList } from "../../helpers";

const months = getMonthsList("en");

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Calendar = ({ users, activeMonth, setActiveMonth }) => {
  const monthsList = months.map((month, monthID) => {
    console.log(Object.values(users[monthID]));
    return (
      <MonthCard
        key={monthID}
        month={month}
        usersLength={Object.values(users[monthID]).length}
        onHover={() => setActiveMonth(monthID)}
        isActive={activeMonth === monthID}
      />
    );
  });
  return <Wrapper>{monthsList}</Wrapper>;
};

export default Calendar;
