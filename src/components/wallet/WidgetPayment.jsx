import React, { useState, useEffect } from "react";
import axios from "axios";
import WalletActivity from "./WalletActivity";
import "./wallet.css";
import { API_URL } from "../../api";

export default function WidgetPayment({ historyTransaction }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [topupAmount, setTopupAmount] = useState("");
  const paymentMethods = [
    { value: "Bank Transfer Bca", label: "Bank Transfer" },
    { value: "Dana", label: "Dana" },
  ];
  const idUser = localStorage.getItem("userId");

  useEffect(() => {
    // Fetch history transaction data from API
    fetchHistoryTransaction();
  }, []);

  const fetchHistoryTransaction = async () => {
    try {
      const response = await axios.get(`${API_URL}/${idUser}`); // Replace with the actual API URL
      const data = response.data;

      return data;
    } catch (error) {
      console.error("Failed to fetch history transaction:", error);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTopupAmountChange = (event) => {
    setTopupAmount(event.target.value);
  };

  const handleTopupSubmit = async () => {
    try {
      const data = {
        price: topupAmount,
        date: new Date().toLocaleString(),
        title: "Top Up wallet",
        status: false,
        image:
          "https://cdn-2.tstatic.net/bangka/foto/bank/images/20211222-bca.jpg",
      };

      // Perform the top-up action and update the history
      const response = await axios.put(`${API_URL}/${idUser}`, {
        history: [...historyTransaction, data],
      }); // Ganti dengan URL API yang sesuai

      console.log("Top-up successful:", response.data);
      // Close the modal and update the historyTransaction state
      setShowModal(false);
      historyTransaction(response.data.history || []);
    } catch (error) {
      console.error("Failed to perform top-up:", error);
    }
  };

  return (
    <div className="uk-width-1-3@l">
      <div className="widjet --payment-method">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Payment Method</h3>
          <a href="#!" className="edit-link">
            Edit
          </a>
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

              <input
                type="text"
                placeholder="Masukkan Jumlah Topup"
                className="input-topup"
                value={topupAmount}
                onChange={handleTopupAmountChange}
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
