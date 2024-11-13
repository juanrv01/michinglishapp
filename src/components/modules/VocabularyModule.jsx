import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const VocabularyModule = ({ words }) => {
  const [index, setIndex] = useState(0);

  const nextWord = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <Card style={{ margin: '1rem' }}>
      <Card.Body>
        <Card.Title>Vocabulary Practice</Card.Title>
        <Card.Text>
          <strong>{words[index].word}</strong>: {words[index].definition}
        </Card.Text>
        <Button  variant="outline-primary" onClick={nextWord}>Next Word</Button>
      </Card.Body>
    </Card>
  );
};

export default VocabularyModule;

 {/*<VocabularyModule 
      words={[
        { word: "Father", definition: "The male parent of a child." },
        { word: "Mother", definition: "The female parent of a child." },
        // Más palabras relacionadas
       ]}
      />*/}