import React from "react";
// import 'antd/dist/reset.css'; 
import "./assets/css/style.css";
import { connect } from "react-redux";
import "../node_modules/antd/dist/antd.css";
import MainComponent from "./components/mainComponent";
import { addUser, getUsers, deleteUser, editUser } from "./actions/userActions";

function App(props) {
  return (
    <div>
      <MainComponent {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userState,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  deleteUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
