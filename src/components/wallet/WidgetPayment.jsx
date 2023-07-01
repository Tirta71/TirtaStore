import React, { useState } from "react";
import axios from "axios";
import WalletActivity from "./WalletActivity";
import "./wallet.css";
import { API_URL } from "../../api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Payment from "./Payment/Payment";

export default function WidgetPayment({ historyTransaction }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [topupAmount, setTopupAmount] = useState("");

  const paymentMethods = [
    { value: "Bank Transfer Bca", label: "Bank Transfer" },
    {
      value: "Dana",
      label: "Dana",
    },
    {
      value: "Ovo",
      label: "Ovo",
    },
    {
      value: "Gopay",
      label: "Gopay",
    },
  ];
  const idUser = localStorage.getItem("userId");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    !selectedPaymentMethod
      ? toast.error("Pilih pembayaran")
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
      const digits = topupAmount.toString().split("");
      const uniqueDigits = new Set(digits);

      if (uniqueDigits.size < 3) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: "Tidak ada Angka unik <br />  Contoh : Rp. 10.123",
        });
        setShowModal(false);

        return;
      }

      let imagePayment = "";
      if (selectedPaymentMethod === "Dana") {
        imagePayment =
          "https://gadgetdiva.id/wp-content/uploads/2019/07/DANA.jpg";
      } else if (selectedPaymentMethod === "Bank Transfer Bca") {
        imagePayment =
          "https://cdn-2.tstatic.net/bangka/foto/bank/images/20211222-bca.jpg";
      } else if (selectedPaymentMethod === "Ovo") {
        imagePayment =
          "https://th.bing.com/th/id/OIP.iWMikLzEVv6siHUpWAWBWQHaEh?pid=ImgDet&rs=1";
      } else if (selectedPaymentMethod === "Gopay") {
        imagePayment =
          "https://logos-marques.com/wp-content/uploads/2021/07/GoPay-Logo-2016.png";
      }

      const data = {
        Pembayaran: selectedPaymentMethod,
        price: topupAmount,
        date: new Date().toLocaleString(),
        title: "Top Up wallet",
        status: false,
        image: imagePayment,
      };

      await axios.post(`${API_URL}/${idUser}/walletTransaction`, data);
      Swal.fire({
        title: "Pastikan Sudah Sesuai",
        text: "Transfer Sesuai angka yang di input",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sudah Sesuai",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Success", "Tunggu Admin Validasi", "success").then(() => {
            window.location.reload();
          });
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
            {selectedPaymentMethod && (
              <button type="submit" className="submit-button">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
      <WalletActivity historyTransaction={historyTransaction} />

      {showModal && (
        <Payment
          selectedPaymentMethod={selectedPaymentMethod}
          topupAmount={topupAmount}
          handleTopupAmountChange={handleTopupAmountChange}
          handleCloseModal={handleCloseModal}
          handleTopupSubmit={handleTopupSubmit}
        />
      )}
    </div>
  );
}
