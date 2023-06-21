import React from "react";

export default function WidgetWallet({ dataWallet }) {
  console.log(dataWallet);
  return (
    <div className="uk-width-2-3@l">
      <div className="widjet --wallet">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Wallet</h3>
        </div>
        <div className="widjet__body">
          <div className="wallet-info">
            <div className="wallet-value">Rp {dataWallet.amount}</div>
            <div className="wallet-label">
              {dataWallet.amount === 0 ? "Disable" : "Available"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
