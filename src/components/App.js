import React, { useState } from "react";
import Calendar from "./Calendar/Calendar";
import Users from "./Users";
import { useFetchUsers } from "../hooks/use-fetch-users";
import styled from "styled-components";

const Title = styled.h1`
  margin: 1rem;
  text-align: center;
`;
const Container = styled.div`
  max-width: 875px;
  margin: 0 auto;
`;

const App = () => {
  const [users] = useFetchUsers([]);

  const [activeMonth, setActiveMonth] = useState(new Date().getUTCMonth());

  const usersInMonth = !users.length ? [] : Object.values(users[activeMonth]);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Title>Demographic Density Demo</Title>
        </Container>
      </header>
      {!users.length ? (
        "Loading..."
      ) : (
        <>
          <Container>
            <Calendar
              users={users}
              activeMonth={activeMonth}
              setActiveMonth={setActiveMonth}
            />
          </Container>
          <Container>
            <Users users={usersInMonth} />
          </Container>
        </>
      )}
    </div>
  );
};

export default App;
