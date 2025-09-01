"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicform({ id, title, description, category }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCategory, setNewCategory] = useState(category);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, description: newDescription, category: newCategory }),
      });

      const data = await res.json();
      console.log("PUT response:", data); //  Debug response

      if (!res.ok) {
        throw new Error(data.error || "Failed to update topic");
      }

      router.push("/"); // Redirect to home after update
    } catch (error) {
      console.error("Error updating topic:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
        <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="border border-slate-700 px-8 py-2" type="text" placeholder="Expense-Name" />
        <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className="border border-slate-700 px-8 py-2" type="number" placeholder="Expense-Amount" />
        <select onChange={(e) => setNewCategory(e.target.value)} value={newCategory} className="border border-slate-700 px-8 py-2" name="Category" id="">
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
        <button className="px-2 py-3 bg-green-500">Update Expense</button>
      </form>
    </>
  );
}
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function EditTopicform({ id, title, description, category }) {
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);
//   const [newCategory, setNewCategory] = useState(category);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`/api/topics/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title: newTitle,
//           description: newDescription,
//           category: newCategory,
//         }),
//       });
//       if (res.ok) {
//         router.push("/");
//         router.refresh();
//       }
//     } catch (error) {
//       console.error("Error updating expense:", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-green-600 mb-8">Expense Tracker</h1>
//         <nav className="flex flex-col gap-3 text-gray-700">
//           <Link href="/" className="px-4 py-2 rounded-lg hover:bg-green-50">
//             Dashboard
//           </Link>
//           <Link href="/expenses" className="px-4 py-2 rounded-lg hover:bg-green-50">
//             Expenses
//           </Link>
//           <Link href="/reports" className="px-4 py-2 rounded-lg hover:bg-green-50">
//             Reports
//           </Link>
//           <Link href="/about" className="px-4 py-2 rounded-lg hover:bg-green-50">
//             About
//           </Link>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 flex justify-center items-center p-8">
//         <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Expense</h2>

//           {/* Title */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium mb-2">Title</label>
//             <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter expense title" required />
//           </div>

//           {/* Amount */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium mb-2">Amount</label>
//             <input type="number" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter amount" required />
//           </div>

//           {/* Category */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Category</label>
//             <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" required>
//               <option value="">Select Category</option>
//               <option value="Food">Food</option>
//               <option value="Travel">Travel</option>
//               <option value="Shopping">Shopping</option>
//               <option value="Bills">Bills</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between items-center">
//             <Link href="/" className="text-gray-600 hover:text-green-600 transition">
//               Cancel
//             </Link>
//             <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition shadow">
//               Update Expense
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }
