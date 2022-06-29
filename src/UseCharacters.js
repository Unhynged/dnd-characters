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
  Pagination,
  PageItem,
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
        const { id, name, race, classGroup, img, description, specialist } =
          player;
        return (
          <div key={id} className="container">
            <article className="row">
              <div className="col">
                <section className="row mt-3 mb-3">
                  <div className="col-4 img mincol">
                    <img className="img-thumbnail" src={img} alt={name}></img>
                  </div>
                  <div className="col-4 mincol">
                    <h3>Name: {name}</h3>
                    {/* Popover About*/}
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Header as="h3">
                                Description
                              </Popover.Header>
                              <Popover.Body>
                                <strong>{description}</strong>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button className="btn btn-primary btn-sm">
                            About
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
                  </div>
                  <div className="col-4 mincol">
                    {/* Popover Race*/}
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Header as="h3">Race</Popover.Header>
                              <Popover.Body>
                                <strong>{race}</strong>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button className="btn btn-success btn-sm">
                            Race
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
                    <br />
                    {/* Popover Class*/}
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Header as="h3">Class</Popover.Header>
                              <Popover.Body>
                                <strong>{classGroup}</strong>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button className="btn btn-success btn-sm">
                            Class
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
                    <br />
                    {/* Popover Specialization*/}
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Header as="h3">
                                Specialist
                              </Popover.Header>
                              <Popover.Body>
                                <strong>{specialist}</strong>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button className="btn btn-success btn-sm">
                            Specialization
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
                  </div>
                  {/* Remove Button */}
                  
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
      {/* Remove All Heroes Button */}
      <div className='row-1'>
        <button
          className="btn btn-warning btn-outline-dark btn-lg"
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
