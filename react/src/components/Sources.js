
import React, { useState, useEffect } from "react";

const gitHubUrl = "http://127.0.0.1:8080/article_api_internal?l=fr&id=jesus-aimait-marthe-et-sa-sur-et-lazare-jn-11-5-abbe-montfort-gillet&messageIds&allRecommendationIds";
//const gitHubUrl = "https://holychatter.com:445/article_api_internal?l=fr&id=jesus-aimait-marthe-et-sa-sur-et-lazare-jn-11-5-abbe-montfort-gillet&messageIds&allRecommendationIds";

function Sources() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
	const response = await fetch(gitHubUrl);
	const jsonData = await response.json();
	setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.rightRecommendationsHtmlForLongSreens}</h5>
      </div>
    </div>
  );
}

export default Sources;