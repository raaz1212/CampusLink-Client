import { useQuery } from "@tanstack/react-query";

const useReview = () => {
  const { data: reviews = [], isLoading: loading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_API}/reviews`);
      return res.json();
    },
  });
  return [reviews, loading];
};

export default useReview;
