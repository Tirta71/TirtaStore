import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/SideBar/SideBar";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";
import HeaderHome from "../components/Home/HeaderHome";
import ProfileUser from "../components/Profile/ProfileUser";
import Bio from "../components/Profile/Bio";
import Activity from "../components/Profile/Activity";
import UploadItems from "../components/Profile/UploadItems";
import { API_URL } from "../api";
import PageLoader from "../components/Loading/PageLoader";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      axios
        .get(`${API_URL}/${userId}`)
        .then((result) => {
          setProfileData(result.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [userId]);

  return (
    <div className="page-profile">
      <input id="toggle" type="checkbox" />
      <ToggleTheme />
      <div className="page-wrapper">
        <HeaderHome />
        <div className="page-content">
          <SideBar />
          <main className="page-main">
            {isLoading ? (
              <PageLoader />
            ) : (
              <div className="uk-grid" data-uk-grid>
                <div className="uk-width-2-3@l">
                  {profileData && <ProfileUser profileData={profileData} />}
                  {profileData && <Bio profileData={profileData} />}
                  {profileData && <Activity profileData={profileData} />}
                </div>
                {profileData && <UploadItems favorite={profileData} />}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
