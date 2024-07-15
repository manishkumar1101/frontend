import React, { useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser } = props;

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} />
      {userState.error && <p>Error: {userState.error}</p>}
      <SimpleTable dataSource={userState.users} />
    </div>
  );
}

export default MainComponent;
