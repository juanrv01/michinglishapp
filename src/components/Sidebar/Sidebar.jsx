// src/components/Sidebar.js
import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ show, onClose }) => {
  return (
    <Offcanvas show={show} onHide={onClose} placement="start">
      {/* Header del Sidebar */}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>General English</Offcanvas.Title>
      </Offcanvas.Header>

      {/* Body del Sidebar */}
      <Offcanvas.Body>
        <p className="text-muted">English Challenges</p>

        {/* Lista de módulos */}
        <ListGroup variant="flush">
          {/* Item: Verbs */}
          <ListGroup.Item>
            <Link 
              to="/michinglishapp/verbs" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Verbs
            </Link>
          </ListGroup.Item>

          {/* Item: Adjectives */}
          <ListGroup.Item>
            <Link 
              to="/michinglishapp/adjectives" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Adjectives
            </Link>
          </ListGroup.Item>

          {/* Item: Vocabulary */}
          <ListGroup.Item>
            <Link 
              to="/michinglishapp/vocabulary" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Vocabulary
            </Link>
          </ListGroup.Item>

          {/* Item: Linking Words */}
          <ListGroup.Item>
            <Link 
              to="/michinglishapp/linking-words" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Linking Words
            </Link>
          </ListGroup.Item>

          {/* Item: Adverbs */}
          <ListGroup.Item>
            <Link 
              to="/michinglishapp/adverbs" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Adverbs
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;

