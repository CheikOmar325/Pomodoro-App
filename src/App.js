// Import necessary dependencies from React and react-bootstrap
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

// Import child components
import Timer from "./Timer";
import VideoPlayer from "./VideoPlayer";

// Define App function component
function App() {

  // Define state variables with useState hooks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [timerVisible, setTimerVisible] = useState(false);
  const [duration, setDuration] = useState(25);
  const [quote, setQuote] = useState("");

  // Define useEffect hook to fetch a random quote when component mounts
  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
    }
    fetchQuote();
  }, []);

  // Define functions to handle form submissions and button clicks
  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleNewTaskSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleTaskDelete(taskIndex) {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  }

  // Render App component with JSX
  return (
    <Container>
      <Row>
        <Col>
          {/* Display app title and a random quote */}
          <h1>TASK MANAGEMENT APP</h1>
          <p><i><em>&quot;{quote}&quot;</em></i></p>

          {/* Render form to add new tasks */}
          <Form onSubmit={handleNewTaskSubmit}>
            <Form.Group controlId="newTask">
              <Form.Label style={{ fontSize: "1.2em" }}>New Task:</Form.Label>
              <Form.Control type="text" value={newTask} onChange={handleNewTaskChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Add Task</Button>
          </Form>
          <br></br>

          {/* Render a list of tasks with delete buttons */}
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                {task}
                <Button variant="danger" size="sm" onClick={() => handleTaskDelete(index)}>Delete</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Render a button to toggle the timer and the Timer component */}
          <Button variant="secondary" onClick={() => setTimerVisible(!timerVisible)}>Toggle Timer</Button>
          {timerVisible && <Timer duration={duration} />}

          {/* Render the VideoPlayer component */}
          <Col className="text-center">
            <VideoPlayer videoId="jfKfPfyJRdk" />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

// Export App component as the default export of the module
export default App;
