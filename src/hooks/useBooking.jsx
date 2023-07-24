import { useEffect, useState } from "react";
import axios from "axios";

const useBooking = (userEmail) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log("Fetching bookings for userEmail:", userEmail);
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API}/bookings`
        );
        console.log("Response:", response.data);

        // Filter the bookings based on userEmail (case-insensitive)
        const filteredBookings = response.data.filter((booking) =>
          booking.candidateEmail.toLowerCase().includes(userEmail.toLowerCase())
        );

        setBookings(filteredBookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchBookings();
    } else {
      setBookings([]);
      setLoading(false);
    }
  }, [userEmail]);

  return [bookings, loading];
};

export default useBooking;
