import { notFound } from "next/navigation";
import { supabase } from "../../../../utils/supabaseClient";

// Define the type for a Journal record.
interface Journal {
  title: string;
  publisher: string;
  subject_area: string;
  subject_subcategories: string;
  country: string;
  jpi: string;
  category: string;
  issn_print: string;
  issn_online: string;
}

// Define the type for the params object
interface PageProps {
  params: Params;
}

type Params = { slug: string };

// Fetch journal data asynchronously
async function fetchJournal(unique_id: number): Promise<Journal | null> {
  const { data, error } = await supabase
    .from("journals")
    .select(`title, publisher, subject_area, subject_subcategories, country, jpi, category, issn_print, issn_online`)
    .eq("unique_id", unique_id)
    .single();
  
  if (error || !data) {
    return null;
  }
  return data;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = params;
  return {
    title: `Journal - ${slug}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const parts = slug.split("-");
  const uniqueIdString = parts[parts.length - 1];
  const unique_id = Number(uniqueIdString);

  if (isNaN(unique_id)) {
    notFound();
  }

  const journal = await fetchJournal(unique_id);
  if (!journal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header section with Category Badge and Journal Info */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center">
              <span className="text-4xl md:text-6xl text-white font-extrabold">
                {journal.category}
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 break-words whitespace-normal">
              {journal.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-1">
              {journal.publisher}
            </p>
          </div>
        </div>

        {/* Details grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Subject Area:</span> {journal.subject_area}
            </p>
            <p className="text-gray-700 mt-4">
              <span className="font-semibold">Subject Subcategories:</span> {journal.subject_subcategories}
            </p>
            <p className="text-gray-700 mt-4">
              <span className="font-semibold">Country:</span> {journal.country}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">JPI:</span> {journal.jpi}
            </p>
            <p className="text-gray-700 mt-4">
              <span className="font-semibold">ISSN (Print):</span> {journal.issn_print}
            </p>
            <p className="text-gray-700 mt-4">
              <span className="font-semibold">ISSN (Online):</span> {journal.issn_online}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
