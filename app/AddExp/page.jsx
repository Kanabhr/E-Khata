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
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AddButton() {
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [category, setCategory] = useState("");
//   const [date, setDate] = useState("");
//   const [notes, setNotes] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !amount || !category || !date) {
//       alert("All fields except notes are required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:3000/api/topics", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, description: amount, category, date, notes }),
//       });
//       if (res.ok) {
//         router.push("/");
//       } else {
//         throw new Error("Failed to save expense");
//       }
//     } catch (error) {
//       console.error("Error saving expense:", error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10">
//       <h1 className="text-2xl font-semibold mb-6">Add Expense</h1>

//       <div className="bg-white shadow rounded-2xl p-6">
//         <h2 className="text-lg font-medium mb-4">Add New Expense</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Title + Amount */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Title</label>
//               <input type="text" placeholder="Enter expense title" className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={title} onChange={(e) => setTitle(e.target.value)} />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Amount</label>
//               <input type="number" placeholder="0.00" className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={amount} onChange={(e) => setAmount(e.target.value)} />
//             </div>
//           </div>

//           {/* Category + Date */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Category</label>
//               <select className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="">Select a category</option>
//                 <option value="fo">Food</option>
//                 <option value="tr">Transport</option>
//                 <option value="sh">Shopping</option>
//                 <option value="en">Entertainment</option>
//                 <option value="ot">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Date</label>
//               <input type="date" className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={date} onChange={(e) => setDate(e.target.value)} />
//             </div>
//           </div>

//           {/* Notes */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Notes (Optional)</label>
//             <textarea placeholder="Add any additional notes..." className="w-full border rounded-lg px-3 py-2 bg-gray-50" value={notes} onChange={(e) => setNotes(e.target.value)} />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 mt-6">
//             <button type="button" className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => router.push("/")}>
//               Cancel
//             </button>
//             <button type="submit" className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
//               Save Expense
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
