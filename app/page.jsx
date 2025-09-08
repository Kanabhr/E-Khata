import TopicList from "@/components/Topic-list";
import PieChartComp from "@/components/piechart";

export default function HomePage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="grid gap-6 lg:grid-cols-2">
        <TopicList />
        <PieChartComp />
      </div>
    </main>
  );
}
//passwordfordb: pfz0Ubprl5IWKBCI
