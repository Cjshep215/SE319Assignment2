import React, { useState, useEffect } from "react";
import items from "./data.json";
import { useForm } from "react-hook-form";

export function App() {
  const [oneView, setOneView] = useState(true);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [query, setQuery] = useState("");

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [dataF, setDataF] = useState({});


  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  function View1() {
    const listItems = itemList.map((el) => (
      <div className="col" key={el.id}>
        <div className="card shadow-sm">
          <img className="img-fluid" src={require(`${el.imageUrl}`)}></img>

          <div className="card-body">
            <h5>{el.name}</h5>
            <hr className="border-3"></hr>
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
        return eachItem.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setitemList(results);
    };

    
    const setView2Clean = () => {
        setQuery("");
        setitemList(items.items);
        setViewTwo();
    }
    

    return (
      
        <div className="album">
          <nav className="navbar bg-primary" style={{paddingLeft:20, paddingRight:20}}>
            <input
              type="search"
              value={query}
              onInput={handleChange}
            />
            <div className="flex-grow-1"></div>
            <button onClick={setView2Clean}>To Cart</button>
          </nav>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {listItems}
            </div>
          </div>
        </div>
      
    );
  }

  const cartItems = items.items.map(function (el) {
    if (howManyofThis(el.id) > 0) {
      return (
        <div className="container" key={el.id}>
          <img
            className="img-fluid"
            src={require(`${el.imageUrl}`)}
            width={75}
          />
          <span> </span>
          {el.name}
          <span> - </span>${el.price}
          <span className="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      );
    }
  });
  function View2() {

    const onSubmit = (data) => {
      setDataF(data);
      setViewThree();
    };

    return (
      <div className="container">
        <div>
          <button onClick={setViewOne} className="btn btn-secondary">
            &#x21DA; Back to Store
          </button>
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
            <form onSubmit={handleSubmit(onSubmit)} className="container mt-5" id="infoForm">
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
                <input {...register("address2")} placeholder="Address 2" className="form-control"/>
                <input
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="form-control"
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
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  function View3() {
    const updateHooks = () => {
        setitemList(items.items);
        setCart([]);
        setCartTotal(0);
        setQuery("");
        setDataF({});
        setViewOne();
    };

    return (
      <div className="container">
        <h1>Payment summary</h1>
        <h3>Order for: {dataF.fullName}</h3>
        <div>{cartItems}</div>
        <h5 className="float-end">Total: ${cartTotal}</h5>
        <h4 style={{textDecorationLine: 'underline'}}>Payment Info: </h4>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="col">Email</th>
              <td>{dataF.email}</td>
            </tr>
            <tr>
              <th scope="col">CreditCard: </th>
              <td>{dataF.creditCard}</td>
            </tr>
            <tr>
              <th scope="col">Address: </th>
              <td>
                {dataF.address} {dataF.address2}
              </td>
            </tr>
            <tr>
              <th scope="col"></th>
              <td>
                {dataF.city}, {dataF.state} {dataF.zip}
              </td>
            </tr>
          </tbody>
        </table>
          <button onClick={updateHooks} className="btn btn-primary">
            Return
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
      {oneView && <View1 />}
      {secondView && <View2 />}
      {thirdView && <View3 />}
    </div>
  );
}

export default App;
