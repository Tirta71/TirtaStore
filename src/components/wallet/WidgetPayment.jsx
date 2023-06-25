import React, { useState } from "react";
import axios from "axios";
import WalletActivity from "./WalletActivity";
import "./wallet.css";
import { API_URL } from "../../api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function WidgetPayment({ historyTransaction }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [topupAmount, setTopupAmount] = useState("");
  const avatarImage =
    "https://cdn-2.tstatic.net/bangka/foto/bank/images/20211222-bca.jpg";
  const paymentMethods = [
    { value: "Bank Transfer Bca", label: "Bank Transfer" },
    { value: "Dana", label: "Dana (Belom bisa hihihi)" },
  ];
  const idUser = localStorage.getItem("userId");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    !selectedPaymentMethod
      ? toast.error("Pilih pembayaran")
      : selectedPaymentMethod === "Dana"
      ? toast.error("Dana belum bisa hihihi")
      : setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTopupAmountChange = (event) => {
    const input = event.target.value;
    // Menghapus semua karakter selain angka
    const filteredInput = input.replace(/[^0-9]/g, "");
    setTopupAmount(filteredInput);
  };
  const handleTopupSubmit = async () => {
    try {
      if (topupAmount <= 10000) {
        toast.error("Minimal top up 10000");
        return;
      }
      const data = {
        price: topupAmount,
        date: new Date().toLocaleString(),
        title: "Top Up wallet",
        status: false,
        image: `${avatarImage}`,
      };

      await axios.post(`${API_URL}/${idUser}/walletTransaction`, data);
      Swal.fire(
        "Top Up Berhasil",
        "Tunggu Admin validasi data Dulu ya",
        "Success"
      ).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      setShowModal(false);
    } catch (error) {
      console.error("Failed to perform top-up:", error);
    }
  };

  return (
    <div className="uk-width-1-3@l">
      <div className="widjet --payment-method">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Payment Method</h3>
        </div>
        <div className="widjet__body">
          <form onSubmit={handleSubmit}>
            {paymentMethods.map((method) => (
              <div className="payment-option" key={method.value}>
                <input
                  type="radio"
                  id={`payment-method-${method.value}`}
                  name="payment-method"
                  value={method.value}
                  checked={selectedPaymentMethod === method.value}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor={`payment-method-${method.value}`}>
                  {method.label}
                </label>
              </div>
            ))}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <WalletActivity historyTransaction={historyTransaction} />

      {showModal && (
        <div className="modal-overlay">
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
        </div>
      )}
    </div>
  );
}
