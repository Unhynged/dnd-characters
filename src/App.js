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
import {useState} from 'react';
import { characters } from "./characters";

function App() {
  return (
    <div className='background'>
      <div className="container containerZ">
        <main>
        <Character />
        </main>
      </div>
    </div>
  );
}

export default App;
