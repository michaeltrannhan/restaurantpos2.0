import React from 'react'
import { Link } from 'react-router-dom'

import './Payment.css'

import { ReactComponent as BackLogo } from "./assets/svg/back.svg";
import { ReactComponent as Visa } from "./assets/svg/visa.svg";
import { ReactComponent as MasterCard } from "./assets/svg/mastercard.svg";
import { ReactComponent as Card } from "./assets/svg/card.svg";
import { ReactComponent as VN } from "./assets/svg/vn.svg";


function TextInput({ IconLogo, label, half, end }) {
  const [value, setValue] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div style={{
      marginRight: half && !end ? "10px" : "0",
      width: half ? "calc(50% - 5px)" : "100%",
      display: half ? "inline-block" : "unset"
    }}>
      {IconLogo ?
        <div className="icon-container">
          <IconLogo className="icon" />
        </div> : ""}
      <div className="input-container" style={IconLogo ? {
        width: "calc(100% - 40px)",
      } : {}}>
        <input type="text" value={value} onChange={handleChange} />
        <label>{label}</label>
      </div>
    </div>
  );
}


const Payment = (props) => {
  let totalPay = props.totalPay

  return (
    <div className="app">
      <div className="home-container" >
        <Link to="/">
          <button className="home-button" >
            <BackLogo className="home-logo"
            />
          </button>
        </Link>
        <p className="home-font" > Back </p>
        <p className="home-font home-label" > PAYMENT </p>
        <div className="home-font" style={{
          float: "right",
          marginTop: "15px",
          marginRight: "30px",
          fontSize: "15px",
          fontWeight: "bold",
          color: "grey",
        }}>
          Home <span style={{
            color: "#2C3A57",
            margin: "0 10px 0 10px"
          }}>•</span>
          <span style={{
            color: "black",
          }}>Payment</span>
        </div>
      </div>
      <div className="main-container">
        <div className="payment-container">
          <p className="header-font" >
            Business name <span style={{ float: "right" }}> ${totalPay.toFixed(2)}</span>
          </p>
          <p className="header-font" style={{
            fontSize: "14px",
            fontWeight: "normal"
          }} >
            1 item (expanded) <span style={{ float: "right" }}> inc. VAT</span>
          </p>
          <div className="item-container">
            <div className="item-hint">
              Checkout is running in test mode. Click here for test data.
              <span style={{
                position: "relative",
                left: "55px",
                top: "-15px",
                fontStyle: "normal",
              }}>x</span>
            </div>
            <div className="method-container" >
              <svg className="circle-select">
                <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 5C7.2 5 5 7.2 5 10C5 12.8 7.2 15 10 15C12.8 15 15 12.8 15 10C15 7.2 12.8 5 10 5ZM10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"
                />
              </svg>
              <p className="circle-label">
                Credit Card
                <span style={{
                  fontSize: "10px",
                }}> - credit or debit</span>
              </p>
              <Visa className="brand" />
              <MasterCard className="brand" />
            </div>
          </div>
          <div className="info-container">
            <form>
              <TextInput IconLogo={Card} label="Card number" />
              <div style={{
                marginTop: "20px",
              }}>
                <TextInput label="MM/YY" half={true} style={{
                }} />
                <TextInput label="CVV" half={true} end={true} />
              </div>
            </form>
            <div className="pay-button">
              Pay ${totalPay.toFixed(2)}
            </div>
          </div>
          <Link to="/" style={{ textDecoration: "none" }} >
            <div className="cancel-button">Cancel payment</div>
          </Link>
          <div className="footer" >
            <VN style={{
              width: "15px",
              height: "15px",
              verticalAlign: "middle",
              marginRight: "5px"
            }} />
            Dintero <span
              style={{
                fontSize: "10px",
                fontWeight: "normal"
              }}
            >
              CHECKOUT
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                float: "right",
                marginRight: "10px"
              }}
            >
              Terms
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Payment;