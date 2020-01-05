import React, { useState } from "react";
import Calendar from "./Calendar/Calendar";
import Users from "./Users";
import Error from "./Error";
import { useFetchUsers } from "../hooks/use-fetch-users";
import styled from "styled-components";

const Title = styled.h1`
  margin: 1rem;
  text-align: center;
`;
const Container = styled.div`
  max-width: 54.6875rem;
  margin: 0 auto;
`;
const Loader = styled.div`
  position: absolute;
  color: #4caf50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  const { users, error } = useFetchUsers([]);

  const [activeMonth, setActiveMonth] = useState(new Date().getUTCMonth());

  const usersInMonth = !users.length ? [] : Object.values(users[activeMonth]);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Title>Demographic Density Demo</Title>
        </Container>
      </header>
      {error && (
        <Error>
          <p>{error}</p>
          <p>Please see console for more information</p>
        </Error>
      )}
      {!users.length ? (
        <Loader>Loading...</Loader>
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
