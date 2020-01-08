import { useEffect, useState } from "react";
import { getMonthsList, getMonthIDByDate } from "../helpers";

const FETCH_URL = `https://yalantis-react-school.herokuapp.com/api/task0/users`;

const months = getMonthsList();

const useFetchUsers = (initial = []) => {
  const [users, setUsers] = useState(initial);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(FETCH_URL)
      .then(res => res.json())
      .then(data => {
        return months.map((_, monthID) =>
          data.filter(user => monthID === getMonthIDByDate(user.dob))
        );
      })
      .then(data => setUsers(data))
      .catch(err => {
        setError(`${err.name} ${err.message}`);
      });

    return () => {
      setUsers([]);
      setError(false);
    };
  }, []);

  return { users, error };
};

export { useFetchUsers };
