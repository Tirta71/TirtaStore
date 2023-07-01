import React from "react";

export default function Dana({
  selectedPaymentMethod,
  DanaImage,
  topupAmount,
  handleTopupAmountChange,
  handleCloseModal,
  handleTopupSubmit,
}) {
  return (
    <div className="modal-content">
      <h3>Payment</h3>
      <div className="modal-item-dana">
        <p>Payment Method: {selectedPaymentMethod}</p>
        <p>No : 081284964533</p>
        <img src={DanaImage} alt="Dana" style={{ width: "50%" }} />

        <p style={{ color: "red", lineHeight: "20px" }}>
          Pastikan Transfer menggunakan angka unik
          <br />
          Contoh : Rp. 10.802
        </p>
        <input
          type="text"
          placeholder="Masukkan Jumlah Topup"
          pattern="[0-9]"
          className="input-topup"
          value={
            topupAmount !== ""
              ? "Rp. " + parseInt(topupAmount).toLocaleString()
              : "Rp. 0"
          }
          onChange={handleTopupAmountChange}
          style={{ width: "100%" }}
        />
      </div>

      <div className="btn-modal">
        <button className="modal-close-button" onClick={handleCloseModal}>
          Close
        </button>
        <button className="btn-topup" onClick={handleTopupSubmit}>
          Top Up
        </button>
      </div>
    </div>
  );
}
