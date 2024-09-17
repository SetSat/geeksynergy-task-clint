import React from 'react';
import { Button } from 'react-bootstrap';
import { deleteUser } from '../services/api';

const DeleteUser = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(userId);
      onDelete(userId);
    }
  };

  return <Button variant="danger" onClick={handleDelete}>Delete</Button>;
};

export default DeleteUser;
