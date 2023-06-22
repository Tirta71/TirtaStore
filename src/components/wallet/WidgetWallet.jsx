import React from "react";
import PageLoader from "../Loading/PageLoader";

export default function WidgetWallet({ dataWallet }) {
  return (
    <div className="uk-width-2-3@l">
      <div className="widjet --wallet">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Wallet</h3>
        </div>
        <div className="widjet__body">
          <div className="wallet-info">
            {dataWallet.amount ? (
              <div className="wallet-value">Rp {dataWallet.amount}</div>
            ) : (
              <PageLoader />
            )}
            <div className="wallet-label">
              {dataWallet.amount === 0 ? "Disable" : "Available"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
