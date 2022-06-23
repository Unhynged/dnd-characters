import React from "react";
import { characters } from "./characters";

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
          <div key={id} className='container'>
            <div className="row mt-3">
              <div className="row mt-3 mb-3">
                <div className="col-3">
                    <img className="img-thumbnail" src={img}></img>
                </div>
                <div className="col-3">
                  <h1>{name}</h1>
                  <p>{description}</p>
                </div>
                <div className="col-3">
                  <h4>{race}</h4>
                </div>
                <div className="col-3">
                  <h4>{classGroup}</h4>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={() => setToon([])}>
        clear items
      </button>
    </>
  );
};

export default UseCharacters;
