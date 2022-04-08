import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

const User = ({ match }) => {
  const { name, last } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        User {name} {last} Us
      </h1>
      <p>My current location is {(location.pathname)}</p>
      {location.pathname === `/user/qqqqq/wwwww` ? (
        <button onClick={() => history.goBack()}>Click me</button>
      ) : null}
    </>
  );
};
export default User;
