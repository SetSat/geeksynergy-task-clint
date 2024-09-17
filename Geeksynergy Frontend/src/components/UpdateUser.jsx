import React, { useState, useEffect } from "react";
import { updateUser } from "../services/api";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
  });

   
  useEffect(() => {
    if (location.state && location.state.user) {
      setFormData({
        id: location.state.user._id,
        name: location.state.user.name,
        phone: location.state.user.phone,
      });
    }
  }, [location.state]);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);  
      alert("User updated successfully");
      navigate("/home");  
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit">Update User</Button>
    </Form>
  );
};

export default UpdateUser;

//Geeksynergy Task server
