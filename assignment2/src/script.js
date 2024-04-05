import React, { useState, useEffect } from "react";
import items from "./data.json";
import { useForm } from "react-hook-form";

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

  //   const function and payment are copied from assignment 12, delete as needed
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [dataF, setDataF] = useState({});
  const [viewer, setViewer] = useState(0);

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
                          //   onClick={() => addToCart(el)}
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
                  <img src={require(`${items.items[1].imageUrl}`)}></img>

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
                  <img src={require(`${items.items[2].imageUrl}`)}></img>

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
            {/* second row starts here */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img src={require(`${items.items[3].imageUrl}`)}></img>

                  <div className="card-body">
                    <p className="card-text">{items.items[3].description}</p>
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
                        ${items.items[3].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={require(`${items.items[4].imageUrl}`)}></img>

                  <div className="card-body">
                    <p className="card-text">{items.items[4].description}</p>
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
                        ${items.items[4].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={require(`${items.items[5].imageUrl}`)}></img>

                  <div className="card-body">
                    <p className="card-text">{items.items[5].description}</p>
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
                        ${items.items[5].price}
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

    const onSubmit = (data) => {
        console.log(data); // log all data
        console.log(data.fullName); // log only fullname
        // update hooks
        setDataF(data);
        setViewer(1);
      };

    return (
      <div>
        <div>
          <button onClick={setViewOne}>Back to Store</button>
        </div>
        Gaffer's Guild STORE (SE/ComS319 Assignment 2)
        <div className="card">
          <div className="row">
            {/* HERE, IT IS THE SHOPING CART */}
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Cart:</b>
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
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
              <div className="form-group">
                <div className="form-group">
                  <input
                    {...register("fullName", { required: true })}
                    placeholder="Full Name"
                    className="form-control"
                  />
                  {errors.fullName && (
                    <p className="text-danger">Full Name is required.</p>
                  )}
                </div>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Email"
                  className="form-control"
                />
                {errors.email && (
                  <p className="text-danger">Email is required.</p>
                )}
                <input
                  {...register("creditCard", { required: true })}
                  placeholder="Credit Card"
                  className="form-control"
                />
                {errors.creditCard && (
                  <p className="text-danger">Credit Card is required.</p>
                )}
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="form-control"
                />
                {errors.address && <p>Address is required.</p>}
                <input {...register("address2")} placeholder="Address 2" />
                <input
                  {...register("city", { required: true })}
                  placeholder="City"
                  // className="form-control"
                />
                {errors.city && <p>City is required.</p>}
                <input
                  {...register("state", { required: true })}
                  placeholder="State"
                  className="form-control"
                />
                {errors.state && (
                  <p className="text-danger">State is required.</p>
                )}
                <input
                  {...register("zip", { required: true })}
                  placeholder="Zip"
                  className="form-control"
                />
                {errors.zip && <p>Zip is required.</p>}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <button onClick={setViewThree}>Checkout</button> */}
      </div>
    );
  }
  //   //list of purchased items
  function View3() {
    

    const updateHooks = () => {
      setViewer(0);
      setDataF({});
    };

    return (
      <div>
        <h1>Payment summary:</h1>
        <h3>{dataF.fullName}</h3>
        <p>{dataF.email}</p>
        <p>{dataF.creditCard}</p>
        <p>{dataF.address}</p>
        {/* <p>{dataF.address2}</p> */}
        <p>
          {dataF.city},{dataF.state} {dataF.zip}
        </p>

        <button onClick={updateHooks} className="btn btn-secondary">
          Submit
        </button>
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
