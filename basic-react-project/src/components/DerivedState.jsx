import { useState } from "react";

export const DerivedState = () => {
  const [user, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angel", age: 45 },
  ]);

  //   Derived State: Count of User
  const userCount = user.length;

  //   Derived State: Average age
  const averageAge =
    user.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;
  return (
    <>
      <div>
        <h1>User List</h1>
        <ul>
          {user.map((currElem, index) => {
            return (
              <li key={index}>
                <h3>Name: {currElem.name}</h3>
                <h5>Age: {currElem.age}</h5>
                <h5>Total count: {userCount}</h5>
                <h5>Average age: {averageAge}</h5>
              </li>
            );
          })}{" "}
        </ul>
      </div>
    </>
  );
};
