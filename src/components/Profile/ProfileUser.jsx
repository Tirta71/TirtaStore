import React from "react";

export default function ProfileUser({ profileData }) {
  return (
    <div className="widjet --profile">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Profile</h3>
      </div>
      <div className="widjet__body">
        {profileData ? (
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
        ) : (
          <p>Loading...</p>
        )}
        <a className="uk-button uk-button-danger" href="04_profile.html">
          <i className="ico_edit"></i>
          <span className="uk-margin-small-left">Edit Profile</span>
        </a>
      </div>
    </div>
  );
}
