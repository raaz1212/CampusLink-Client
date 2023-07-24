import { useQuery } from "@tanstack/react-query";

const useUser = (email) => {
  const { data: singleUser = {}, isLoading: loading } = useQuery({
    queryKey: ["singleUser", email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_API}/user/${email}`
      );
      return res.json();
    },
  });
  return [singleUser, loading];
};

export default useUser;
