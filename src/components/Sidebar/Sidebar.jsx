// src/components/Sidebar.js
import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';

const Sidebar = ({ show, onClose }) => {
  return (
    <Offcanvas show={show} onHide={onClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>General English</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p className="text-muted">Level 13 / 16 - Advanced</p>
        <ListGroup variant="flush">
          <ListGroup.Item onClick={onClose}>Unit 1: Success</ListGroup.Item>
          <ListGroup.Item onClick={onClose}>Unit 2: Art and creativity</ListGroup.Item>
          <ListGroup.Item onClick={onClose}>Unit 3: Contributing to society</ListGroup.Item>
          <ListGroup.Item onClick={onClose}>Unit 4: Arguing your point</ListGroup.Item>
          <ListGroup.Item onClick={onClose}>Unit 5: Dealing with news</ListGroup.Item>
          <ListGroup.Item onClick={onClose}>Unit 6: Trade</ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
