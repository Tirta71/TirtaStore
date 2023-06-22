import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css"; // Import CSS file

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedAmount, setEditedAmount] = useState("");
  const [editedStatus, setEditedStatus] = useState(false);
  const [editedHistoryIndex, setEditedHistoryIndex] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://6491b88b2f2c7ee6c2c8cc9b.mockapi.io/user"
      );
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setLoading(false);
    }
  };

  const handleEditWallet = async (userId) => {
    try {
      const userIndex = userData.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        const updatedData = { ...userData[userIndex] };
        updatedData.wallet.amount = parseInt(editedAmount);

        const response = await axios.put(
          `https://6491b88b2f2c7ee6c2c8cc9b.mockapi.io/user/${userId}`,
          updatedData
        );

        const updatedUserData = [...userData];
        updatedUserData[userIndex] = response.data;
        setUserData(updatedUserData);

        console.log("Wallet data updated successfully");
        setEditedAmount("");
      } else {
        console.error("User data not found for ID:", userId);
      }
    } catch (error) {
      console.error("Failed to update wallet data:", error);
    }
  };

  const handleEditHistoryStatus = async (
    userIndex,
    historyIndex,
    updatedStatus
  ) => {
    try {
      const updatedData = { ...userData[userIndex] };
      updatedData.history[historyIndex].status = updatedStatus;

      const response = await axios.put(
        `https://6491b88b2f2c7ee6c2c8cc9b.mockapi.io/user/${updatedData.id}`,
        updatedData
      );

      const updatedUserData = [...userData];
      updatedUserData[userIndex] = response.data;
      setUserData(updatedUserData);

      console.log("History status updated successfully");
    } catch (error) {
      console.error("Failed to update history status:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>User Data</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Image</th>
              <th>Wallet Amount</th>
              <th>History</th>
              <th>Favorites</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <img src={user.image} alt="User Avatar" width="50" />
                </td>
                <td>
                  <div className="wallet-container">
                    <div className="wallet-amount">{user.wallet.amount}</div>
                    <div className="wallet-edit">
                      <input
                        type="number"
                        value={editedAmount}
                        onChange={(e) => setEditedAmount(e.target.value)}
                      />
                      <button onClick={() => handleEditWallet(user.id)}>
                        Save
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <ul>
                    {user.history.map((history, historyIndex) => (
                      <li key={historyIndex}>
                        {editedHistoryIndex === historyIndex ? (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleEditHistoryStatus(
                                index,
                                historyIndex,
                                editedStatus
                              );
                              setEditedHistoryIndex(null);
                            }}
                          >
                            <div className="history-edit">
                              <input
                                type="checkbox"
                                checked={editedStatus}
                                onChange={(e) =>
                                  setEditedStatus(e.target.checked)
                                }
                              />
                              <button type="submit">Save</button>
                            </div>
                          </form>
                        ) : (
                          <div className="history-details">
                            <strong>Title:</strong> {history.title}
                            <br />
                            <strong>Genre:</strong> {history.genre}
                            <br />
                            <strong>Rating:</strong> {history.rating}
                            <br />
                            <strong>Price:</strong> {history.price}
                            <br />
                            <strong>Jumlah:</strong> {history.jumlah}
                            <br />
                            <strong>Image:</strong>{" "}
                            <img
                              src={history.image}
                              alt="History Image"
                              width="50"
                            />
                            <br />
                            <strong>Date:</strong> {history.date}
                            <br />
                            {/* Render tombol Edit untuk pengeditan status */}
                            <strong>Status:</strong>{" "}
                            {history.status ? "Completed" : "Pending"}
                            <br />
                            <button
                              className="edit-button"
                              onClick={() =>
                                setEditedHistoryIndex(historyIndex)
                              }
                            >
                              Edit
                            </button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {user.favorites.map((favorite, favoriteIndex) => (
                      <li key={favoriteIndex}>
                        <strong>Title:</strong> {favorite.title}
                        <br />
                        <strong>Genre:</strong> {favorite.genre}
                        <br />
                        <strong>Rating:</strong> {favorite.rating}
                        <br />
                        <strong>Image:</strong>{" "}
                        <img
                          src={favorite.image}
                          alt="Favorite Image"
                          width="50"
                        />
                        <br />
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
