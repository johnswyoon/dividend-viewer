import React from "react";

const Form = (props) => (
  <form onSubmit={props.getStock} autocomplete="off">
    <input type="text" name="ticker" placeholder="Ticker..." style={{textTransform:"uppercase"}} />
    <button>Get Quote</button>
  </form>
);

export default Form;