import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";

export default function Counter() {
  const { count, name } = useSelector((state) => ({
    ...state.counterReducer,
    ...state.nameReducer,
  }));
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrementCount = () => {
    dispatch({
      type: "DECR",
    });
  };

  return (
    <div>
      <h2>Compteur: {count}</h2>
      <div className="bloc-btn">
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <h2>{name}</h2>
    </div>
  );
}
