import React, { useEffect, useState } from 'react';

const DistanceCalculator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestPizzaStoreDistance, setNearestPizzaStoreDistance] = useState(null);

  useEffect(() => {
    // Function to get user's current location
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error.message);
        }
      );
    };

    // Function to calculate distance between user and pizza store
    const calculateDistance = async () => {
      if (!userLocation) {
        // If user location is not available, get it first
        getUserLocation();
        return;
      }

      const pizzaStoreLocation = {
        latitude: 40.730610,
        longitude: -73.935242,
      };

      const url = `https://distance-calculation-api-by-pizza-api.p.rapidapi.com/distance?lat1=${userLocation.latitude}&lon1=${userLocation.longitude}&lat2=${pizzaStoreLocation.latitude}&lon2=${pizzaStoreLocation.longitude}&metric=mi`;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '63ea23a8edmshad05ba2156ae330p168b47jsnc266516bee7d',
          'X-RapidAPI-Host': 'distance-calculation-api-by-pizza-api.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setNearestPizzaStoreDistance(result);
      } catch (error) {
        console.error(error);
      }
    };

    calculateDistance(); // Calculate distance when the component mounts

    // Clean up - remove event listeners if necessary
    return () => {
      // Add any necessary cleanup logic here
    };
  }, [userLocation]); // Dependency on userLocation ensures the effect runs when the user location changes

  return (
    <div className="asdf">
      <h1>Distance Calculator</h1>
      {nearestPizzaStoreDistance && <p>Distance to Nearest Pizza Store: {nearestPizzaStoreDistance}</p>}
    </div>
  );
};

export default DistanceCalculator;