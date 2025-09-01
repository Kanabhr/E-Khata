// import { NextResponse } from "next/server";
// import connectMongoDB from "@/libs/mongodb";
// import Topic from "@/Model/Topic";

// // UPDATE topic
// export async function PUT(request, { params }) {
//   try {
//     const { id } = params; // ✅ works fine, no need to await
//     const { title, description } = await request.json(); // ✅ match frontend body

//     await connectMongoDB();

//     const updatedTopic = await Topic.findByIdAndUpdate(
//       id,
//       { title, description },
//       { new: true } // ✅ return updated doc
//     );

//     if (!updatedTopic) {
//       return NextResponse.json({ error: "Topic not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Topic updated successfully", topic: updatedTopic }, { status: 200 });
//   } catch (error) {
//     console.error("Error updating topic:", error);
//     return NextResponse.json({ error: "Failed to update topic" }, { status: 500 });
//   }
// }

// // GET topic by id
// export async function GET(request, { params }) {
//   try {
//     const { id } = params;
//     await connectMongoDB();
//     const topic = await Topic.findById(id);
//     return NextResponse.json({ topic }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching topic:", error);
//     return NextResponse.json({ error: "Failed to fetch topic" }, { status: 500 });
//   }
// }
