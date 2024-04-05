import React, { useState, useEffect } from "react";

export function App (){

    const [oneView, setOneView] = useState(false);
    const [secondView, setSecondView] = useState(false);
    const [thirdView, setThirdView] = useState(false);

    function View1() {
        return(<div>
            <h1>This is View 1</h1>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={200} alt="view1" />
        </div>);
    }

    function View2() {
        return(<div>
            <h1>This is View 2</h1>
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width={200} alt="view2" />
        </div>);
    }

    function View3() {
        return(<div>
            <h1>This is View 3</h1>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={200} alt="view3" />
        </div>);
    }

    const setViewOne = () => {
        if (oneView === false) {
            setOneView(true);
        } else {
            setOneView(false);
        }
    }

    const setViewTwo = () => {
        if (secondView === false) {
            setSecondView(true);
        } else {
            setSecondView(false);
        }
    }

    const setViewThree = () => {
        if (thirdView === false) {
            setThirdView(true);
        } else {
            setThirdView(false);
        }
    }


    return(<div>
        <button onClick ={setViewOne}>One</button>
        <button onClick ={setViewTwo}>Two</button>
        <button onClick ={setViewThree}>Three</button>
        {oneView && <View1 />}
        {secondView && <View2 />}
        {thirdView && <View3 />}
    </div>);

}
