import { useQuery } from "@tanstack/react-query";
import { fetchGetURL } from "./fetchGetURL";

export const useGetURL = () => {
  useQuery({
    queryKey: ["url"],
    queryFn: fetchGetURL,
  });
};
