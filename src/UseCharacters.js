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
  Overlay,
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
  Popover,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { characters } from "./characters";

// Make Character Display
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
                  <div className="col-4 img mincol">
                    <img className="img-thumbnail" src={img} alt={name}></img>
                  </div>
                  <div className="col-4 mincol">
                    <h3>Name: {name}</h3>
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Header as="h3">Description</Popover.Header>
                              <Popover.Body>
                                <strong>{description}</strong>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button variant="secondary">
                            Description
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
                  </div>
                  <div className="col-4 mincol">
                    <h4>Race: {race}</h4>
                    <h4>Class: {classGroup}</h4>
                  </div>
                  <aside className="col-4"></aside>
                  <button
                    className="btn btn-danger btn-outline-dark col-4"
                    onClick={() => removeItem(id)}
                  >
                    Remove
                  </button>
                </section>
              </div>
            </article>
          </div>
        );
      })}
      <br />
      <div className="row">
        <div className="col-2"></div>
        <button
          className="btn btn-warning btn-outline-dark col-8"
          onClick={() => setToon([])}
        >
          Remove All Heroes
        </button>
      </div>
      <br />
    </>
  );
};

// Popover Attempt

export default UseCharacters;
