import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsersAxios } from "./api/users";
import { useDebounce } from "./Custom_Hook/useDebounce";

export default function AP() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  const { data, isLoading } = useQuery({
    queryKey: ["users", debouncedSearch],
    queryFn: getUsersAxios,
    staleTime: 5000,
  });

  if (isLoading) return <h2>Loading...</h2>;

  const filteredUsers = data.filter((u) =>
    u.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <>
      <input
        placeholder="Search user..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}
