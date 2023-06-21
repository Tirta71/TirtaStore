import React from "react";

export default function Bio({ profileData }) {
  return (
    <div class="widjet --bio">
      <div class="widjet__head">
        <h3 class="uk-text-lead">Bio</h3>
      </div>
      <div class="widjet__body">
        <span>{profileData.Bio}</span>
      </div>
    </div>
  );
}
