import reactQuery from "@tanstack/react-query";

export default function useGeocodeQuery() {
  const { isLoading, error, data } = reactQuery.useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json()
      ),
  });

  console.log(isLoading, error, data);
}
