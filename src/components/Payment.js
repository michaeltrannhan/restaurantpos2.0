import React from 'react'
import { Link } from 'react-router-dom'

import './Payment.css'

import QrImg from "./assets/png/qr.png"
import Hint from "./assets/png/cvv_hint.png"

import { ReactComponent as BackLogo } from "./assets/svg/back.svg";
import { ReactComponent as Close } from "./assets/svg/close.svg";
import { ReactComponent as Info } from "./assets/svg/info.svg";
import { ReactComponent as Visa } from "./assets/svg/visa.svg";
import { ReactComponent as MasterCard } from "./assets/svg/mastercard.svg";
import { ReactComponent as Card } from "./assets/svg/card.svg";
import { ReactComponent as Qr } from "./assets/svg/qr.svg";
import { ReactComponent as VN } from "./assets/svg/vn.svg";


const TextInput = ({ IconLogo, label, half, end, onChange, fault }) => {
  const [value, setValue] = React.useState('');
  const [hint, setHint] = React.useState(false);

  function handleChange(e) {
    setValue(e.target.value);
    onChange(e)
  }

  return (
    <div style={{
      position: 'relative',
      marginRight: half && !end ? "10px" : "0",
      width: half ? "calc(50% - 5px)" : "100%",
      display: half ? "inline-block" : "unset"
    }}>
      {fault ? <p
        style={{
          position: "absolute",
          top: half ? "-15px" : "-25px",
          left: "0",
          fontSize: "9px",
          fontWeight: "bold",
          color: "red"
        }}
      >✻ Required</p> : ""}
      <div className="input-container">
        <input type="text"
          style={IconLogo ? {
            paddingLeft: "40px",
          } : {
            background: "unset"
          }}
          value={value}
          onChange={handleChange}
        />
        <label
          style={IconLogo ? {
            left: "40px",
          } : {}}
        >{label}</label>
        {end ? <Info
          className="info"
          onMouseEnter={() => { setHint(true) }}
          onMouseLeave={() => { setHint(false) }}
        /> : ""}
        {hint ? <img className="img-hint"
          src={Hint} alt="hint"></img> : ""}
      </div>
    </div>
  );
}

const Method = ({ method, selected, onClick }) => {
  const [hover, setHover] = React.useState(false)
  var text = method === 0 ? "Paying with your credit card will be automatically." :
    "The cashier will scan this and proceed to payment."
  var methodText = method === 0 ? "Credit Card" :
    " QR Code"
  var methodHint = method === 0 ? " - credit or debit" :
    " - pay with cash"
  var brand = method === 0 ? [
    <Visa className="brand" key={0} />,
    <MasterCard className="brand" key={1} />
  ] :
    [<Qr
      className="brand"
      key={0}
      style={{ marginLeft: "80px" }}
    />]

  return (
    <div
      className="item-container"
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
      onClick={onClick}
      style={selected ? {
        background: "#3EEAAA",
      } : {}}
    >
      <div className="item-hint">
        {text}
        <Close className="close" />
      </div>
      <div className="method-container" >
        <svg
          className="circle-select"
          style={selected ? {
            fill: "#2C3A57",
          } : {}}
        >
          {
            selected || hover ? <path fillRule="evenodd"
              clipRule="evenodd"
              d="M10 5C7.2 5 5 7.2 5 10C5 12.8 7.2 15 10 15C12.8 15 15 12.8 15 10C15 7.2 12.8 5 10 5ZM10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"
            /> :
              <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" />
          }

        </svg>
        <p
          className="circle-label"
          style={selected ? {
            color: "#2C3A57",
          } : {}}
        >
          {methodText}
          <span style={{
            fontSize: "10px",
          }}>{methodHint}</span>
        </p>
        {brand.map(item => { return item })}
      </div>
    </div>
  )
}

const CreditPay = ({ totalPay }) => {
  const [card, setCard] = React.useState(["", "", ""])

  return (
    <div className="info-container">
      <form>
        <TextInput IconLogo={Card} label={`Card number`}
          onChange={(e) => {
            let newCard = card.slice();
            newCard[0] = e.target.value
            setCard(newCard)
          }}
          fault={card[0] === ""}
        />
        <div style={{
          marginTop: "20px",
        }}>
          <TextInput label={`MM/YY`} half={true} style={{
          }}
            onChange={(e) => {
              let newCard = card.slice();
              newCard[1] = e.target.value
              setCard(newCard)
            }}
            fault={card[1] === ""}
          />
          <TextInput label={`CVV`} half={true} end={true}
            onChange={(e) => {
              let newCard = card.slice();
              newCard[2] = e.target.value
              setCard(newCard)
            }}
            fault={card[2] === ""}
          />
        </div>
      </form>
      <div className="pay-button"
        onClick={() => {
          var text = card.some((i) => { return i === "" }) ?
            "Some fields are empty" :
            "You have been scammed!"
          window.alert(text)
        }}
      >
        Pay ${totalPay.toFixed(2)}
      </div>
    </div>
  )
}

const QrPay = ({ totalPay }) => {
  return (
    <div className="info-container">
      <div className="qr-container">
        <img src={QrImg} alt="Qr" />
      </div>
      <div className="qr-label">
        Total: ${totalPay.toFixed(2)}
      </div>
    </div>
  )
}

const Payment = (props) => {
  const [select, setSelect] = React.useState(0)
  let totalPay = props.totalPay

  return (
    <div className="app">
      <div className="home-container">
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
      <div className="no-scrollbar">
        <div className="main-container">
          <div className="payment-container">
            <p className="header-font" >
              Business name <span style={{ float: "right" }}> ${totalPay.toFixed(2)}</span>
            </p>
            <p className="header-font" style={{
              fontSize: "14px",
              fontWeight: "normal"
            }} >
              2 items (expanded) <span style={{ float: "right" }}> inc. VAT</span>
            </p>
            <Method method={0} selected={0 === select} onClick={() => { setSelect(0) }} />
            <Method method={1} selected={1 === select} onClick={() => { setSelect(1) }} />
            {select === 0 ?
              <CreditPay totalPay={totalPay} /> : <QrPay totalPay={totalPay} />}
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
                  fontWeight: "normal",
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
      </div>
    </div >
  )
}

export default Payment;