import { useEffect, useState } from "react";

function IpChecker() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getUserGeoData() {
      try {
        const res = await fetch("http://ip-api.com/json/");
        const data = await res.json();
        setUserData(data);
        console.log(data); // logs user location info
      } catch (error) {
        console.error("IP Info fetch failed", error);
      }
    }

    getUserGeoData();
  }, []);

  return (
    <div>
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default IpChecker;
