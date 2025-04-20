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
                  {/* Item: modals-of-possibility */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/modals-of-possibility" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Modals of possibility
            </Link>
            
            </ListGroup.Item>
                  {/* Item: modals-of-deduction */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/modals-of-deduction" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Modals of deduction
            </Link>

            </ListGroup.Item>
                  {/* Item: zero_conditionals */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/zero-conditionals" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Zero conditionals
            </Link>

            </ListGroup.Item>
                  {/* Item: first_conditionals */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/first-conditionals" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              First conditionals
            </Link>

            </ListGroup.Item>
                  {/* Item: second_conditionals */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/second-conditionals" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Second conditionals
            </Link>

            </ListGroup.Item>
                  {/* Item: third_conditionals */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/third-conditionals" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Third conditionals
            </Link>

            </ListGroup.Item>
                  {/* Item: mixed_conditionals */}
                  <ListGroup.Item>
            <Link 
              to="/michinglishapp/mixed_conditionals" 
              onClick={onClose} 
              className="text-decoration-none"
            >
              Mixed conditionals
            </Link>

          </ListGroup.Item>  
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;

