import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Character from "./UseCharacters";
import "./index.css";

function App() {
  return (
    <main>
      <div className="container">
        <Character />
      </div>
    </main>
  );
}

export default App;
