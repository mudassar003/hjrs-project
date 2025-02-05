"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";

// Define the type for a journal record returned from the search query.
interface JournalResult {
  title: string;
  subject_area: string;
  unique_id: number;
}

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<JournalResult[]>([]);

  const handleSearch = async (searchTerm: string) => {
    setQuery(searchTerm);

    if (searchTerm.length > 2) {
      const { data, error } = await supabase
        .from("journals")
        .select("title, subject_area, unique_id")
        .ilike("title", `%${searchTerm}%`)
        .limit(5); // Limit the query to 5 results

      if (!error) {
        // Cast the data to JournalResult[] to satisfy TypeScript
        setResults((data as JournalResult[]) || []);
      }
    } else {
      setResults([]);
    }
  };

  const handleRedirect = (title: string, unique_id: number) => {
    const urlFriendlyTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    router.push(`/journals/${urlFriendlyTitle}-${unique_id}`);
  };

  return (
    <div className="h-screen bg-blue-100 flex items-center justify-center">
      <div className="text-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Find Your Journal</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for a journal..."
          className="border rounded-lg p-3 w-full mb-4"
        />
        {/* Show results only when available */}
        {results.length > 0 && (
          <ul className="bg-white border rounded-lg shadow-md w-full text-base">
            {results.map((result) => (
              <li
                key={result.unique_id}
                className="p-3 border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRedirect(result.title, result.unique_id)}
              >
                {result.title} - {result.subject_area}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
