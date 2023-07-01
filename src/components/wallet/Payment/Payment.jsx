import React from "react";
import DanaImage from "../../../assets/Payment/dana.jpg";
import Bca from "./Method Payment/Bca";
import Dana from "./Method Payment/Dana";
import Ovo from "./Method Payment/Ovo";
import Gopay from "./Method Payment/Gopay";
export default function Payment({
  selectedPaymentMethod,
  topupAmount,
  handleTopupAmountChange,
  handleCloseModal,
  handleTopupSubmit,
}) {
  return (
    <div className="modal-overlay">
      {selectedPaymentMethod === "Bank Transfer Bca" && (
        <Bca
          selectedPaymentMethod={selectedPaymentMethod}
          topupAmount={topupAmount}
          handleTopupAmountChange={handleTopupAmountChange}
          handleCloseModal={handleCloseModal}
          handleTopupSubmit={handleTopupSubmit}
        />
      )}

      {selectedPaymentMethod === "Dana" && (
        <Dana
          selectedPaymentMethod={selectedPaymentMethod}
          topupAmount={topupAmount}
          handleTopupAmountChange={handleTopupAmountChange}
          handleCloseModal={handleCloseModal}
          handleTopupSubmit={handleTopupSubmit}
          DanaImage={DanaImage}
        />
      )}
      {selectedPaymentMethod === "Ovo" && (
        <Ovo
          selectedPaymentMethod={selectedPaymentMethod}
          topupAmount={topupAmount}
          handleTopupAmountChange={handleTopupAmountChange}
          handleCloseModal={handleCloseModal}
          handleTopupSubmit={handleTopupSubmit}
        />
      )}
      {selectedPaymentMethod === "Gopay" && (
        <Gopay
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
