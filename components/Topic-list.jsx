"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, Edit } from "lucide-react";
import Removebtn from "./removebtn";
// import PieChartComp from "./piechart";
export default function TopicList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000";

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/topics`, { cache: "no-store" }); // relative path works everywhere
        if (!res.ok) throw new Error("Failed to fetch topics");
        const data = await res.json();
        setTopics(data?.topics || []);
      } catch (error) {
        console.error("Error fetching topics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return (
      <section className="w-full p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading topics...</p>
      </section>
    );
  }
  return (
    <section className="w-full p-6 bg-gray-50 min-h-screen">
      {/* Dashboard header */}
      <header className="flex items-center justify-between mb-6">
        {/* <PieChartComp /> */}
        <h1 className="text-xl font-semibold text-gray-800">All Topics</h1>
        <Link href="/AddExp" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
          + Track Expense
        </Link>
      </header>

      {/* Sleek grid of topic cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => (
          <div key={t._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
            <h2 className="text-base font-semibold text-gray-900 mb-1">{t.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">{t.description}</p>

            {/* Footer actions */}
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 bg-gray-100 rounded-md text-gray-500">{t.category || "Uncategorized"}</span>
              <div className="flex items-center gap-2">
                <Link href={`/EditTopic/${t._id}`} className="text-blue-600 hover:text-blue-800 transition">
                  <Edit size={16} />
                </Link>
                <Removebtn id={t._id}>
                  <Trash2 size={16} className="text-red-600 hover:text-red-800 transition" />
                </Removebtn>
              </div>
            </div>
          </div>
        ))}
      </div>

      {topics.length === 0 && <div className="text-center text-gray-500 mt-10">No topics found. Start by adding one.</div>}
    </section>
  );
}

