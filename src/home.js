import React, { useState, useEffect } from "react";

function Home() {
  const [randomValue, setRandomValue] = useState(null);

  useEffect(() => {
    const setRandomValueAtSpecificTime = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      // Check if it's a specific time (e.g., 8 am or 9 am)
      if (currentHour === 8 || currentHour === 9) {
        // Generate a random value
        const newValue = Math.random();

        // Set the random value in the state
        setRandomValue(newValue);
      }
    };

    // Call the function initially
    setRandomValueAtSpecificTime();

    // Set up an interval to check the time every minute
    const interval = setInterval(() => {
      setRandomValueAtSpecificTime();
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Random Value at 8 am and 9 am:</h1>
      {randomValue !== null && <p>{randomValue}</p>}
    </div>
  );
}

export default Home;
