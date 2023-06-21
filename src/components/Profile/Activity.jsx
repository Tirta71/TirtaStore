import React from "react";

export default function Activity({ profileData }) {
  return (
    <div className="widjet --activity">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Recent Activity</h3>
      </div>

      {profileData && profileData.history && (
        <div className="widjet__body">
          {profileData.history.map((item) => (
            <div className="widjet-game" key={item.id}>
              <div className="widjet-game__info">
                <h4>{item.transaction}</h4>
                <div className="widjet-game__record">Date: {item.date}</div>
                <div className="widjet-game__last-played">
                  Rp. {item.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
