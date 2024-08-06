import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import ApplicationFormSchema from "@/lib/models/ApplicationFormSchema";
import Blog from "@/lib/models/Blog";

export async function POST(request, content) {
  try {
    const formData = await request.formData();
    await connect();
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log("formDataObj", formDataObj);
    if (formDataObj.url != "null") {
        await cloudinary.uploader.destroy(formDataObj.url);
      }
    const deleteRes = await ApplicationFormSchema.deleteOne({ _id: formDataObj.id });
    if (!deleteRes) {
      return NextResponse.json({ success: false }, { status: 404 });
    }
    return NextResponse.json(
      { success: true, message: "Data deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
