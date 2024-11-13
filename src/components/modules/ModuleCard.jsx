import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ModuleCard = ({ title, description, buttonText, icon: Icon }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
      <Card.Title style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center' }}>
          {Icon && <Icon style={{ marginRight: '8px', fontSize: '1.5rem', color: '#007bff' }} />}
          {title}
        </Card.Title>
        <Card.Text style={{ fontSize: '0.9rem' }}>{description}</Card.Text>
        <Button  variant="outline-primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default ModuleCard;

{ /*<ModuleCard 
  title="Meet Your Family" 
  description="In this module, you will learn basic vocabulary to describe family members, their relationship to you, and adjectives to describe their characteristics. It’s the first step to understanding family-related English!" 
  buttonText="Start"
  icon={FaUserFriends} 
 /> */}