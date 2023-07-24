import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useProfile = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: myProfile = [] } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/allBookings/${user?.email}`
      );
      return response.json();
    },
  });

  return [myProfile, refetch];
};

export default useProfile;
