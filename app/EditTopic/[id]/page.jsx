import EditTopicform from "@/components/EditTopicform";
const baseUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000";

async function getTopic(id) {
  try {
    const res = await fetch(`${baseUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topic. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching topic:", error.message);
    return null; // so component won’t break
  }
}

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopic(id);
  const { title, description, category } = topic;

  return (
    <>
      <EditTopicform id={id} title={title} description={description} category={category} />
    </>
  );
}
