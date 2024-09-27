import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const date = new Date();

  const [currentDate, setCurrentDate] = useState(

    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
  );
  const [showside, setShowside] = useState(true);
  const [data, setData] = useState(null);

  // Helper function to adjust date by number of days
  const adjustDate = (currentDate, change) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + change);

    return `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;
  };

  const handleLeft = () => {
    setCurrentDate(prevDate => adjustDate(prevDate, -1));
  };

  const handleRight = () => {
    setCurrentDate(prevDate => adjustDate(prevDate, +1));
  };

  const handleToggleModal = () => {
    setShowside(!showside);
  };

useEffect(() => {
  async function fetchData() {
    const NASA_KEY = `NpxgNn1aEegwBBYMHqOFgxRUcLWhwMi49d1qPEgB`;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${currentDate}`;

    // Use currentDate as the key for storing data
    const local_key = `apod_${currentDate}`;

    // Check if data is available in localStorage
    const storedData = localStorage.getItem(local_key);
    if (storedData) {
      const object_data = JSON.parse(storedData);
      const apiData = object_data[currentDate]; // This might be redundant
      setData(apiData); // Set the stored data
      return; // Skip the API fetch if data is available locally
    }

    try {
      const res = await fetch(url);
      const apiData = await res.json();

      // Handle errors
      if (res.status === 400 || apiData.code) {
        console.warn(`No data for the requested date: ${currentDate}`);
        const previousDate = adjustDate(currentDate, -1);
        setCurrentDate(previousDate); // Fetch for the previous date
        return;
      }

      // If the response is valid, store it in localStorage
      const object_data = {};
      object_data[currentDate] = apiData;
      localStorage.setItem(local_key, JSON.stringify(object_data));
      
      setData(apiData); // Set the fetched data
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  }

  fetchData();
}, [currentDate]); // Re-run when `currentDate` changes

  return (
    <>
      {data ? (
        <Main data={data} handleLeft={handleLeft} handleRight={handleRight} handleToggleModal={handleToggleModal} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showside && <Sidebar handleToggleModal={handleToggleModal} data={data} />}
      <Footer handleToggleModal={handleToggleModal} data={data} />

    </>
  );
}

export default App;

