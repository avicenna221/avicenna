// src/pages/api/blogs/[id].js

import Blog from "@/lib/models/Blog";
import connect from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function GET(req, content) {
  // await dbConnect();

  try {
    await connect();
    const data = await Blog.find().sort({ createdAt: -1 }).limit(3);
    if (data)
      return NextResponse.json({ result: true, Data: data }, { status: 200 });
    else
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
