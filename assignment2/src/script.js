import React, { useState, useEffect } from "react";
import items from "./data.json";

export function App() {
    const [oneView, setOneView] = useState(true);
    const [secondView, setSecondView] = useState(false);
    const [thirdView, setThirdView] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    };

    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    // <button type="button" onClick={() => removeFromCart(el)}> - </button>{" "}
    // <button type="button" variant="light" onClick={() => addToCart(el)}> +</button>


  //bootstrap album
  function View1() {
    return (
      <main>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img src={require(`${items.items[0].imageUrl}`)}></img>

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
      const cartItems = cart.map((el) => (
        <div key={el.id}>
          <img class="img-fluid" src={el.image} width={150} />
          {el.title}${el.price}
        </div>
      ));

      return (
        <div>
          Gaffer's Guild STORE (SE/ComS319 Assignment 2)
          <div className="card">
            <div className="row">
              {/* HERE, IT IS THE SHOPING CART */}
              <div className="col-md-8 cart">
                <div className="title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Glass Vase Cart</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                      Products selected {cart.length}
                    </div>
                  </div>
                </div>
                {/* <div>{listItems}</div> */}
              </div>
              <div className="float-end">
                <p className="mb-0 me-5 d-flex align-items-center">
                  <span className="small text-muted me-2">Order total:</span>
                  <span className="lead fw-normal">${cartTotal}</span>
                </p>
                <p className="mb-0 me-5 d-flex align-items-md-end">
                    <button onClick={setViewOne}>One</button>
                    <button onClick={setViewThree}>Three</button>
                </p>
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
