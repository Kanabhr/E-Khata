import EditTopicform from "@/components/EditTopicform";
const getTopic = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
  }
};
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
