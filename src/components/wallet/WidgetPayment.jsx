import React from "react";
import WalletActivity from "./WalletActivity";

export default function WidgetPayment() {
  return (
    <div className="uk-width-1-3@l">
      <div className="widjet --payment-method">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Payment Method</h3>
          <a href="#!">Edit</a>
        </div>
        <div className="widjet__body">
          <div className="payment-card">
            <div className="payment-card__head">
              <div className="payment-card__chip">
                <img src="assets/img/payment-card-chip.svg" alt="chip" />
              </div>
              <div className="payment-card__logo">
                <img src="assets/img/payment-card-logo.svg" alt="logo" />
              </div>
            </div>
            <div className="payment-card__number">**** **** **** 6958</div>
            <div className="payment-card__value">$ 18,320.00</div>
          </div>
        </div>
      </div>
      <WalletActivity />
    </div>
  );
}
