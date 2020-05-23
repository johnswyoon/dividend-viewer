import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Stocks from "./components/Stocks";

const API_KEY = process.env.IEX_API_KEY;

class App extends React.Component {
  state = {
    ticker: undefined,
    name: undefined,
    exchange: undefined,
    currentPrice: undefined,
    dailyChange: undefined,
    exDate: undefined,
    paymentDate: undefined,
    dividend_amount: undefined,
    freq: undefined,
    error: undefined
  }
  getStock = async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.ticker.value;
    const api_call = await fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${API_KEY}&period=daily`);
    const api_call_dividend = await fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/dividends/next?token=${API_KEY}`);
    const data = await api_call.json();
    const dividend_data = await api_call_dividend.json();

    if (ticker){
      console.log(data);
      this.setState({
        name: data["companyName"],
        exchange: data["primaryExchange"],
        currentPrice: data["latestPrice"],
        dailyChange: data["changePercent"],
        exDate: dividend_data["exDate"],
        paymentDate: dividend_data["paymentDate"],
        dividend_amount: dividend_data["amount"],
        freq: dividend_data["frequency"],
        error: ""
      });
    } else {
      this.setState({
        name: undefined,
        exchange: undefined,
        currentPrice: undefined,
        dailyChange: undefined,
        exDate: undefined,
        paymentDate: undefined,
        dividend_amount: undefined,
        freq: undefined,
        error: "Please enter proper ticker symbol!"
      });
    }
  }

  render() {
    return (
      <div>
        <div class="wrapper">
          <div class="main">
            <div class="container">
              <div class="row">
                <div class="col-xs-5 title-container">
                  <Titles />
                </div>
                <div class="col-xs-7 form-container">
                  <Form getStock={this.getStock}/>
                  <Stocks
                    name={this.state.name}
                    exchange={this.state.exchange}
                    currentPrice={this.state.currentPrice}
                    dailyChange={this.state.dailyChange}
                    exDate={this.state.exDate}
                    paymentDate={this.state.paymentDate}
                    dividend_amount={this.state.dividend_amount}
                    freq={this.state.freq}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;