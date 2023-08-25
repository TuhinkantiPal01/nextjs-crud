import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } =await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated successfully" }, { status: 200 });
};
