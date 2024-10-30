import { useQuery } from "@tanstack/react-query";
import { Game } from "../enterties/Game";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: (s) => apiClient.getGame(slug),
  });

export default useGame;
