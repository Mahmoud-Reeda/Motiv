import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <h1>Oops!</h1>
        <p>sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
        <Button variant="link" onClick={() => navigate("/", { replace: true })}>
          Go Back
        </Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
