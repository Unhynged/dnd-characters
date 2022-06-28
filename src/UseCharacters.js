// IMPORTS
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
import { characters } from "./characters";

// 
const UseCharacters = () => {
  const [toon, setToon] = React.useState(characters);

  const removeItem = (id) => {
    setToon((oldToon) => {
      let newToon = oldToon.filter((player) => player.id !== id);
      return newToon;
    });
  };

  return (
    <>
      {toon.map((player) => {
        const { id, name, race, classGroup, img, description } = player;
        return (
          <div key={id} className="container">
            <article className="row">
              <div className="col sectioncol">
                <section className="row mt-3 mb-3">
                  <div className="col-4 img">
                    <img className="img-thumbnail" src={img} alt={name}></img>
                  </div>
                  <div className="col-4">
                    <h3>Name: {name}</h3>
                    <p>Description: {description}</p>
                  </div>
                  <div className="col-4">
                    <h4>Race: {race}</h4>
                    <h4>Class: {classGroup}</h4>
                  </div>
                </section>
                <div>
                  <button
                    className="btn btn-danger btn-outline-dark"
                    onClick={() => removeItem(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          </div>
        );
      })}
      <br />
      <div className="row">
        <button
          className="btn btn-warning btn-outline-dark"
          onClick={() => setToon([])}
        >
          Remove All Heroes
        </button>
      </div>
      <br />
    </>
  );
};

export default UseCharacters;
