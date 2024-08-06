// pages/api/application/index.js

import connect from "@/lib/mongodb";
import ApplicationFormSchema from "@/lib/models/ApplicationFormSchema";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dlbwn1vnu",
  api_key: "282398165396233",
  api_secret: "Gi2_J4XLQeULCubkXx57LJ4v2aE",
});

//get data
export async function GET(req, res) {
  try {
    await connect();
    const data = await ApplicationFormSchema.find({status:"student"});
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
//post data