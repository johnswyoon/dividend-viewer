import React from "react";

const Stocks = props => (
    <div className="stock__info">
      {
        props.name && <p className="stock__key">Name:
          <span className="stock__value"> {props.name}</span>
          </p>
      }
      {
        props.exchange && <p className="stock__key">Exchange: 
          <span className="stock__value"> {props.exchange}</span>
          </p>
      }
      {
        props.currentPrice && <p className="stock__key">Current Price:
          <span className="stock__value"> ${props.currentPrice} USD</span>
          </p>
      }
      {
        props.dailyChange && <p className="stock__key">Daily Change:
          <span className="stock__value"> {props.dailyChange}%</span>
          </p>
      }
      {
        props.exDate && <p className="stock__key">Ex-Dividend:
          <span className="stock__value"> {props.exDate}</span>
          </p>
      }
      {
        props.paymentDate && <p className="stock__key">Payment Date:
          <span className="stock__value"> {props.paymentDate}</span>
          </p>
      }
      {
        props.dividend_amount && <p className="stock__key">Dividend Amount:
          <span className="stock__value"> ${props.dividend_amount}</span>
          </p>
      }
      {
        props.freq && <p className="stock__key">Frequency:
          <span className="stock__value"> {props.freq.charAt(0).toUpperCase() + props.freq.slice(1)}</span>
          </p>
      }
      {
        props.error && <p className="stock__error">{props.error}</p>
      }
    </div>
);

export default Stocks;