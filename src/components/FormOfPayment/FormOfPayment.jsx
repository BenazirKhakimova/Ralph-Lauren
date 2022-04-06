import React, { useState } from "react";
import "./FormOfPayment.css";
const FormOfPayment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  function handleChange() {
    if (!name || !email || !address || !state || !zip) {
      alert("OK!");
    } else "Fill In";
    setName("");
    setEmail("");
    setAddress("");
    setState("");
    setZip("");
  }

  return (
    <div>
      <div className="container form-payment">
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="title">Billing Adress</h3>
              <div className="inputBox">
                <span>Full name:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eldiyar Kaskeev"
                />
              </div>
              <div className="inputBox">
                <span>email:</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="inputBox">
                <span>adsress:</span>
                <input
                  type="text"
                  placeholder="room - street"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <span>city:</span>
                <input type="text" placeholder="Bishkek" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>state:</span>

                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Kyrgyzstan"
                  />
                </div>
                <div className="inputBox">
                  <span>zip code:</span>
                  <input
                    type="text"
                    placeholder="996"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="title">payment</h3>
              <div className="inputBox form-input">
                <span>card accepted:</span>
                <img
                  className="img-form"
                  src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                  alt=""
                />
                <img
                  className="img-form"
                  src="https://cdn-icons-png.flaticon.com/512/196/196581.png"
                  alt=""
                />
                <img
                  className="img-form"
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                  alt=""
                />
              </div>
              <div className="inputBox">
                <span>name on card:</span>
                <input type="text" placeholder="Mr. Kaskeev Eldiyar" />
              </div>
              <div className="inputBox">
                <span>credit card number:</span>
                <input type="number" placeholder="1111-2222-3333" />
              </div>
              <div className="inputBox">
                <span>exp month:</span>
                <input type="text" placeholder="January" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>exp year:</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div className="inputBox">
                  <span>CVV:</span>
                  <input type="number" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>
          <input
            onClick={() => handleChange()}
            type="submit"
            value="OK"
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default FormOfPayment;
