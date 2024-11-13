import React, { useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';

const GrammarModule = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState(''); // 'success' or 'danger'
  const [alertMessage, setAlertMessage] = useState('');

  const checkAnswer = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setAlertVariant('success');
      setAlertMessage('Correct!');
    } else {
      setAlertVariant('danger');
      setAlertMessage('Try again!');
    }
    setShowAlert(true);
    setUserAnswer('');
    
    setTimeout(() => {
      setShowAlert(false);
      setCurrentQuestion((prevIndex) => (prevIndex + 1) % questions.length);
    }, 3000);
  };

  return (
    <Card style={{ margin: '1rem', maxWidth: '400px' }}>
      <Card.Body>
        <Card.Title>Grammar Practice</Card.Title>
        
        {showAlert && (
          <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
        
        <Card.Text>{questions[currentQuestion].question}</Card.Text>
        
        <Form.Group style={{ marginBottom: '1rem' }}>
          <Form.Select 
            value={userAnswer} 
            onChange={(e) => setUserAnswer(e.target.value)}
            style={{ width: '100%', maxWidth: '300px' }}
          >
            <option value="">Select an answer</option>
            {questions[currentQuestion].options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </Form.Select>
        </Form.Group>
        
        <Button onClick={checkAnswer} disabled={!userAnswer} style={{ marginTop: '10px' }}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GrammarModule;

 {/*
         <GrammarModule 
  questions={[
    { 
      question: "My ___ is my mother's father.", 
      answer: "grandfather",
      options: ["uncle", "brother", "grandfather", "cousin"] 
    },
    { 
      question: "Your ___ is your sibling's child.", 
      answer: "niece",
      options: ["niece", "nephew", "cousin", "aunt"] 
    },
  ]}
/> */}