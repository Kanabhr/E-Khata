"use client";
import { useRouter } from "next/navigation";
import { use } from "react";
export default function Removebtn({ id }) {
  const handleRemove = async () => {
    const conformiation = confirm("Are you sure you want to delete this topic?");
    if (conformiation) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        window.location.reload();
      }
    }
  };
  return (
    <>
      {" "}
      <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Remove
      </button>
      ;
    </>
  );
}
