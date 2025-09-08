"use client";
import { useRouter } from "next/navigation";

export default function Removebtn({ id, children }) {
  const router = useRouter();

  const handleRemove = async () => {
    const confirmation = confirm("Are you sure you want to delete this topic?");
    if (confirmation) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh(); // refresh page without full reload
      }
    }
  };

  return (
    <button onClick={handleRemove} className="p-2 rounded-full hover:bg-red-50 transition" title="Delete">
      {children ? children : "Remove"}
    </button>
  );
}
