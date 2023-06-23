import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../api";
import { toast } from "react-toastify";
import "./admin.css";

export default function UserForm() {
  const [transactionData, setTransactionData] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchTransactionData();
    const interval = setInterval(fetchTransactionData, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (transactionData) {
      fetchUserData();
    }
  }, [transactionData]);

  const fetchTransactionData = async () => {
    try {
      const response = await axios.get(API_URL);
      const users = response.data;

      const transactionsPromises = users.map(async (user) => {
        const transactionsResponse = await axios.get(
          `${API_URL}/${user.id}/walletTransaction`
        );
        const transactions = transactionsResponse.data.map((transaction) => ({
          ...transaction,
          userId: user.id,
        }));
        return transactions;
      });

      const transactions = await Promise.all(transactionsPromises);
      setTransactionData(transactions.flat());
    } catch (error) {
      console.error("Failed to fetch transaction data:", error);
      setTransactionData(null);
    }
  };

  const fetchUserData = async () => {
    try {
      const userIds = transactionData.map((transaction) => transaction.userId);
      const uniqueUserIds = Array.from(new Set(userIds));

      const usersPromises = uniqueUserIds.map(async (userId) => {
        const userResponse = await axios.get(`${API_URL}/${userId}`);
        return { [userId]: userResponse.data.username };
      });

      const usersData = await Promise.all(usersPromises);
      const mergedUserData = Object.assign({}, ...usersData);

      setUserData(mergedUserData);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUserData({});
    }
  };

  const handleUpdateStatus = async (userId, itemId, newStatus) => {
    try {
      const updatedData = transactionData.map((item) => {
        if (item.id === itemId && item.userId === userId) {
          return { ...item, status: newStatus };
        }
        return item;
      });

      await axios.put(`${API_URL}/${userId}/walletTransaction/${itemId}`, {
        status: newStatus,
      });

      setTransactionData(updatedData);

      toast.success("Status diperbarui");
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const filteredTransactionData = transactionData
    ? transactionData.filter((item) => !item.status)
    : [];

  const transactionsByUser = {};
  filteredTransactionData.forEach((transaction) => {
    if (!transactionsByUser[transaction.userId]) {
      transactionsByUser[transaction.userId] = [];
    }
    transactionsByUser[transaction.userId].push(transaction);
  });

  return (
    <div className="admin-container">
      <h2>Transaction Data</h2>

      {filteredTransactionData.length > 0 ? (
        <div>
          {Object.keys(transactionsByUser).map((userId) => (
            <div key={userId}>
              <h4 style={{ marginTop: "2rem " }}>
                Username: {userData[userId]}
              </h4>
              <table className="transaction-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsByUser[userId].map((item) => (
                    <tr key={item.id} className="transaction-item">
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.price}</td>
                      <td>{item.date}</td>
                      <td>{item.title}</td>
                      <td>{item.status ? "True" : "False"}</td>
                      <td>
                        {!item.status && (
                          <button
                            onClick={() =>
                              handleUpdateStatus(
                                item.userId,
                                item.id,
                                !item.status
                              )
                            }
                            className="status-button"
                          >
                            Update Status
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <p>No transaction data with false status available.</p>
      )}
    </div>
  );
}
