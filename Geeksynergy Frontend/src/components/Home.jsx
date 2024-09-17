import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    }
  };

  const handleUpdate = (user) => {
    navigate(`/update-user/${user._id}`, { state: { user } }); 
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <div>
      <h2>User List</h2>
      <Button variant="secondary" onClick={handleLogout} className="mb-3">
        Logout
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Profession</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.profession}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(user)}>
                  Update
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
