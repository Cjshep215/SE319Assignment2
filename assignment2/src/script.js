import React, { useState, useEffect } from "react";
import items from "./data.json";

export function App() {
  const [oneView, setOneView] = useState(true);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);

  //bootstrap album
  function View1() {
    return (
      <main>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img src="../pictures/BlueCaneVase.jpg"></img>

                  <div className="card-body">
                    <p className="card-text">{items.items[0].description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        ${items.items[0].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
              <div className="card shadow-sm">
                  <img src="./pictures/BlueCaneVase.jpg"></img>

                  <div className="card-body">
                    <p className="card-text">{items.items[1].description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        ${items.items[1].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
              <div className="card shadow-sm">
                  <img src="./pictures/BlueCaneVase.jpg"></img>

                  <div className="card-body">
                    <p className="card-text">{items.items[2].description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        ${items.items[2].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  //take from in-className (checkout screen)
  function View2() {
    return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    View 2This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">Price = </small>
                    {console.log(items.items[0].price)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //   //list of purchased items
  function View3() {
    return (
      <div>
        <h1>This is View 3</h1>
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          width={200}
          alt="view3"
        />
      </div>
    );
  }

  const setViewOne = () => {
    if (oneView === false) {
      setOneView(true);
      setSecondView(false);
      setThirdView(false);
    }
  };

  const setViewTwo = () => {
    if (secondView === false) {
      setOneView(false);
      setSecondView(true);
      setThirdView(false);
    }
  };

  const setViewThree = () => {
    if (thirdView === false) {
      setOneView(false);
      setSecondView(false);
      setThirdView(true);
    }
  };

  return (
    <div>
      <button onClick={setViewOne}>One</button>
      <button onClick={setViewTwo}>Two</button>
      <button onClick={setViewThree}>Three</button>
      {oneView && <View1 />}
      {secondView && <View2 />}
      {thirdView && <View3 />}
    </div>
  );
}

export default App;
