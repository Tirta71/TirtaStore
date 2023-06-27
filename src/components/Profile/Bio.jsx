import React from "react";

export default function Bio({ profileData }) {
  return (
    <>
      {profileData.Bio && (
        <div className="widjet --bio">
          <div className="widjet__head">
            <h3 className="uk-text-lead">Bio</h3>
          </div>
          <div className="widjet__body">
            <span>{profileData.Bio}</span>
          </div>
        </div>
      )}
    </>
  );
}
