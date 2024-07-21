import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import { Row, Col } from 'antd';

function MainComponent(props) {
  const { getUsers, userState, addUser, editUser, deleteUser } = props;
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    setUsers(userState.users);
  }, [userState.users]);

  const handleAddUser = ({ name, email }) => {
    const newId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const newUser = { id: newId, name, email };
    setUsers([...users, newUser]);
    addUser(newUser);
  };

  const handleEditUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    editUser(updatedUser);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    deleteUser(id);
  };

  const handleSubmit = ({ name, email }) => {
    if (editingUser) {
      handleEditUser({ id: editingUser.id, name, email });
      setEditingUser(null);
    } else {
      handleAddUser({ name, email });
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <div id="main-container-wrapper" style={{ padding: '20px' }}>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <InputHandler onSubmit={handleSubmit} editingUser={editingUser} />
        </Col>
      </Row>
      {userState.error && <p>Error: {userState.error}</p>}
      <Row justify="center">
        <Col span={24}>
          <SimpleTable
            dataSource={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MainComponent;
