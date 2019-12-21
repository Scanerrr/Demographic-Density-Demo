import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  margin: 2rem 0 0.8rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const UserWrapper = styled.div`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  margin: 0.5rem;
  padding: 1rem;
`;

const Users = ({ users }) => {
  return (
    <>
      <Title>List of users</Title>
      <Wrapper>
        {users.map(user => (
          <UserWrapper key={user.id}>
            {user.firstName} {user.lastName}
          </UserWrapper>
        ))}
      </Wrapper>
      People was born {users.length}
    </>
  );
};

export default Users;
