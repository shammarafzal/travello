import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ammar",
      image:
        "https://images.unsplash.com/photo-1653834979224-a412b48a1b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
