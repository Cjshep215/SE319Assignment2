import React, { useState, useEffect } from "react";
import items from "./data.json";
import { useForm } from "react-hook-form";

export function App() {
  const [oneView, setOneView] = useState(true);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [query, setQuery] = useState('');

  const [itemList, setitemList] = useState(items.items);


  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  //   const function and payment are copied from assignment 12, delete as needed
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [dataF, setDataF] = useState({});

  // <button type="button" onClick={() => removeFromCart(el)}> - </button>{" "}
  // <button type="button" variant="light" onClick={() => addToCart(el)}> +</button>

  //bootstrap album
  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }
  function View1(itemList) {

    const listItems = itemList.map((el) => (
      <div className="col" key={el.id}>
        <div className="card shadow-sm">
          <img className="img-fluid" src={require(`${el.imageUrl}`)}></img>

          <div className="card-body">
            <p className="card-text">{el.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => addToCart(el)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => removeFromCart(el)}
                >
                  -
                </button>
              </div>
              <small className="text-body-secondary">
                ${el.price} <span className="close">&#10005;</span>
                {howManyofThis(el.id)}
              </small>
            </div>
          </div>
        </div>
      </div>
    ));

    const handleChange = (e) => {
      setQuery(e.target.value);
      const results = items.items.filter((eachItem) => {
        if (e.target.value === "") {
            return itemList;
        }
        return eachItem.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      View1(results);
    };
        

    return (
      <>
        <div className="album py-5 bg-body-tertiary">
          <nav className="nav">
          <input className="flex-grow-1" type="search" value={query} onChange={handleChange} />
            <button onClick={setViewTwo}>To Cart</button>
          </nav>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {listItems}
            </div>
          </div>
        </div>
      </>
    );
  }

  //take from in-className (checkout screen)
  function View2() {
    const cartItems = items.items.map(function (el) {
      if (howManyofThis(el.id) > 0) {
        return (
          <div className="container" key={el.id}>
            <img
              className="img-fluid"
              src={require(`${el.imageUrl}`)}
              width={75}
            />
            {el.name}
            <span> - </span>${el.price}
            <span className="close">&#10005;</span>
            {howManyofThis(el.id)}
          </div>
        );
      }
    });

    const onSubmit = (data) => {
      console.log(data); // log all data
      console.log(data.fullName); // log only fullname
      // update hooks
      setDataF(data);
      setViewThree();
    };

    return (
      <div className="container">
        <div>
          <button onClick={setViewOne} className="btn btn-secondary">Back to Store</button>
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
              <div>{cartItems}</div>
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
                {errors.state && (
                  <p className="text-danger">Address is required.</p>
                )}
                <input {...register("address2")} placeholder="Address 2" />
                <input
                  {...register("city", { required: true })}
                  placeholder="City"
                  // className="form-control"
                />
                {errors.state && (
                  <p className="text-danger">City is required.</p>
                )}
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
                  pattern="\b\d{5}\b"
                />
                {errors.state && (
                  <p className="text-danger">Zip is required.</p>
                )}
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
        setViewOne();
        setDataF({});
    };

    return (
        <div className="container"><h1>Payment summary</h1>
        <h3>Order for: {dataF.fullName}</h3>
      <table class="table">
        <tr>
        <th scope="col">Email: </th>
        <th scope="col">{dataF.email}</th>
        </tr>
        <tr>
        <th scope="col">CreditCard: </th>
        <th scope="col">{dataF.creditCard}</th>
        </tr>
        <tr>
        <th scope="col">Address: </th>
        <th scope="col">{dataF.address}</th>
        </tr>
        <tr>
        <th scope="col"></th>
        <th scope="col"><p>
          {dataF.city},{dataF.state} {dataF.zip}
        </p></th>
        </tr>
        <tr>
        <th scope="col">Address 2: </th>
        {/* address 2 is likely not stored correctly */}
        <th scope="col">{dataF.address2}</th>           
        </tr>
        <button onClick={updateHooks} className="btn btn-primary">
          Submit
        </button>
      </table>
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
      {/* <button onClick={setViewOne}>One</button>
      <button onClick={setViewTwo}>Two</button>
      <button onClick={setViewThree}>Three</button> */}
      {oneView && <View1 />}
      {secondView && <View2 />}
      {thirdView && <View3 />}
    </div>
  );
}

export default App;
