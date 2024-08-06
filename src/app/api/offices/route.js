import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import OfficesSchema from "@/lib/models/OfficesSchema";
export async function GET(req, res) {

  await connect();
  const data = await OfficesSchema.find();
  console.log("data", data);
  return NextResponse.json({ result: true, Data: data });
}
export async function POST(request) {
 try {
    const payload = await request.json();
    await connect();
    console.log(payload);
    const dataSave = new OfficesSchema(payload);
    const data = await dataSave.save();
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
