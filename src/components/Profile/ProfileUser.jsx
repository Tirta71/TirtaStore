import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import Swal from "sweetalert2";

export default function ProfileUser({ profileData }) {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(profileData.username);
  const [password, setPassword] = useState(profileData.password);
  const [Bio, setBio] = useState(profileData.Bio);
  const idUser = localStorage.getItem("userId");
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .put(`${API_URL}/${idUser}`, {
        username,
        password,
        Bio,
      })
      .then((response) => {
        Swal.fire("Profile Updated", "Success Updated Profile", "success").then(
          (result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          }
        );
        setEditing(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Failed to update profile:", error);
      });
  };

  const handleCancelClick = () => {
    // Reset the input fields and exit edit mode
    setUsername(profileData.username);
    setBio(profileData.Bio);
    setPassword(profileData.password);
    setEditing(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <div className="widjet --profile">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Profile</h3>
      </div>
      <div className="widjet__body">
        {editing ? (
          <div className="edit-profile-form">
            <div className="edit-profile-form__group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="edit-profile-form__group">
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="edit-profile-form__group">
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                value={Bio}
                onChange={handleBioChange}
              ></textarea>
            </div>
            <div className="edit-profile-form__actions">
              <button
                className="uk-button uk-button-primary"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="uk-button uk-button-default"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="user-info">
            <div className="user-info__avatar">
              <img src={profileData.image} alt="profile" />
            </div>
            <div className="user-info__box">
              <div className="user-info__title">{profileData.username}</div>
              <div className="user-info__text">
                {profileData && profileData.createdAt && (
                  <span>
                    Member since{" "}
                    {new Date(profileData.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        {!editing && (
          <button
            className="uk-button uk-button-danger"
            onClick={handleEditClick}
          >
            <i className="ico_edit"></i>
            <span className="uk-margin-small-left">Edit Profile</span>
          </button>
        )}
      </div>
    </div>
  );
}
