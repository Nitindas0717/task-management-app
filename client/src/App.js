import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  useEffect(() => {
    axios.get("/api/tasks")
      .then(res => {
        console.log("Response from backend:", res.data);
      })
      .catch(err => {
        console.log("Error from backend:", err.response?.data || err.message);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Proxy Test</h1>
      <p>Check browser console for backend response.</p>
    </div>
  );
}

export default App;
