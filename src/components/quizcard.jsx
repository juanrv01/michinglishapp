import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Image, Row, Col, Container } from 'react-bootstrap';
import { shuffleArray } from "../helpers/shuffleArray";

function extractQuestionsWithUserData(data) {
  const allQuestions = [];
  data.forEach((userData) => {
    const { user, topics } = userData;
    topics.forEach((topic) => {
      const { questions } = topic;
      questions.forEach((question) => {
        allQuestions.push({
          ...question,
          profileImage: user.profileImage,
          socialLink: user.socialLink,
          username: user.username
        });
      });
    });
  });
  return allQuestions;
}

const QuizCard = () => {
  const data = useSelector((state) => state.data.data);

  const [finalData, setFinalData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [finished, setFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const allQuestions = extractQuestionsWithUserData(finalData);

  // Shuffle questions each time the quiz is started
  const startQuiz = () => {
    setFinalData(shuffleArray([...data])); // Shuffle questions
    setHasStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(120);
    setFinished(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  // Countdown timer
  useEffect(() => {
    if (hasStarted && timeLeft > 0 && !finished) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setFinished(true);
    }
  }, [timeLeft, hasStarted, finished]);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [currentQuestion]);

  const handleAnswer = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);

      if (option === allQuestions[currentQuestion].answer) {
        setScore(score + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }

      setTimeout(() => {
        if (currentQuestion + 1 < allQuestions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setFinished(true);
        }
      }, 1000);
    }
  };

  const handleRestart = () => {
    startQuiz(); // Reinitialize quiz with shuffled questions
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="d-flex justify-content-center">
      {!hasStarted ? (
        <Card className="mb-4 shadow-sm text-center" style={{ maxWidth: '800px' }}>
          <Card.Body>
            <h2>Welcome to the Quiz!</h2>
            <Button variant="primary" onClick={startQuiz}>Start</Button>
          </Card.Body>
        </Card>
      ) : !finished ? (
        <Card className="mb-4 shadow-sm" style={{ maxWidth: '800px' }}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <Image
                  src={allQuestions[currentQuestion].profileImage}
                  roundedCircle
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  className="mb-2"
                />
                <div className="font-weight-bold">{allQuestions[currentQuestion].socialLink}</div>
              </Col>
              <Col xs={12} md={8}>
                <Card.Title className="mb-3 text-center text-md-start">
                  {allQuestions[currentQuestion].question}
                </Card.Title>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                  {allQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedOption === option
                          ? isCorrect
                            ? 'success'
                            : 'danger'
                          : 'outline-primary'
                      }
                      className="m-1"
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedOption}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>
            <div className="mt-3 text-center">
              <h5>Time left: {timeLeft}s</h5>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-4 shadow-sm text-center" style={{ maxWidth: '800px' }}>
          <Card.Body>
            <h2>Quiz Finished!</h2>
            <h4>Your score: {score} / {allQuestions.length}</h4>
            <Button variant="primary" onClick={handleRestart}>Restart</Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default QuizCard;



