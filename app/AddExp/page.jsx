"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddButton() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      alert("Title and description are required");
    }
    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, category }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.error("Error updating topic:", error);
    }
  };
  return (
    <>
      <form className="flex flex-col gap-3" action="">
        <input
          className="border border-slate-700 px-8 py-2"
          type="text"
          placeholder="Expense-Name"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          className="border border-slate-700 px-8 py-2"
          type="number"
          placeholder="Expense-Amount"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <select className="border border-slate-700 px-8 py-2" name="Category" id="" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Select-Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Rent">Rent</option>
          <option value="Grocery">Grocery</option>
          <option value="Utilities">Utilities</option>
          <option value="Loan/Emi">Loan/Emi</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <button onClick={handleSubmit} className="px-2 py-3 bg-green-500">
          Add Expense
        </button>
      </form>
    </>
  );
}
