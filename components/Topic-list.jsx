// import Removebtn from "./removebtn";
// import Link from "next/link";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return res.json();
//   } catch (error) {
//     console.error("Error fetching topics:", error);
//   }
// };
// export default async function TopicList() {
//   const { topics } = await getTopics();
//   return (
//     <>
//       {topics.map((t) => (
//         <div key={t._id} className="p-4 bg-slate-300 my-3 display flex justify-between ">
//           <div>
//             <h2>{t.title}</h2>
//             <h2>{t.description}</h2>
//             <h2>{t.category}</h2>
//           </div>
//           <div className="flex gap-2">
//             <Removebtn id={t._id} />
//             <Link href={`/EditTopic/${t._id}`}>Edit</Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }"use client";

import Link from "next/link";
import { Trash2, Edit } from "lucide-react"; // dashboard icons
import Removebtn from "./removebtn";
const baseUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000";

const getTopics = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching topics:", error);
  }
};
export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <section className="w-full p-6 bg-gray-50 min-h-screen">
      {/* Dashboard header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">All Topics</h1>
        <Link href="/AddExp" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-blue-700 transition">
          + Track Expense
        </Link>
      </header>

      {/* Grid of topic cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics?.map((t) => (
          <div key={t._id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{t.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">{t.description}</p>

            {/* Footer actions */}
            <div className="flex items-center justify-between text-sm">
              <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-500">{t.category || "Uncategorized"}</span>
              <div className="flex items-center gap-3">
                <Link href={`/EditTopic/${t._id}`} className="text-blue-600 hover:text-blue-800 transition">
                  <Edit size={18} />
                </Link>
                <Removebtn id={t._id}>
                  <Trash2 size={18} className="text-red-600 hover:text-red-800 transition" />
                </Removebtn>
              </div>
            </div>
          </div>
        ))}
      </div>

      {topics?.length === 0 && <div className="text-center text-gray-500 mt-10">No topics found. Start by adding one.</div>}
    </section>
  );
}
