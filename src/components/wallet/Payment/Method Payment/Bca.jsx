import React from "react";

export default function Bca({
  selectedPaymentMethod,
  topupAmount,
  handleTopupAmountChange,
  handleCloseModal,
  handleTopupSubmit,
}) {
  return (
    <div className="modal-content">
      <h3>Payment</h3>
      <div className="modal-item">
        <p>Payment Method: {selectedPaymentMethod}</p>
        <p>Transfer: 8213132 BCA</p>
        <p>AN: Tirta Samara</p>
        <p style={{ color: "red", lineHeight: "20px" }}>
          Note : Pastikan Transfer Sesuai No Rekening
          <br />
          dan transfer menggunakan angka unik
          <br />
          Contoh : Rp. 10.802
        </p>
        <input
          type="text"
          placeholder="Masukkan Jumlah Topup"
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
