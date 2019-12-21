import { useEffect, useState } from "react";
import { getMonthsList, getMonthIDByDate } from "../helpers";

const FETCH_URL = `https://yschool.getsandbox.com/users`;

const months = getMonthsList();

const useFetchUsers = (initial = []) => {
  const [users, setUsers] = useState(initial);

  useEffect(() => {
    fetch(FETCH_URL)
      .then(res => res.json())
      .then(data => {
        return months.map((monthName, monthID) =>
          data.filter(user => monthID === getMonthIDByDate(user.dob))
        );
      })
      .then(data => setUsers(data));

    return () => {
      setUsers(initial);
    };
  }, []);

  return [users];
};

export { useFetchUsers };
