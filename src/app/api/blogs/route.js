import Blog from "@/lib/models/Blog";
import connect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dlbwn1vnu",
  api_key: "282398165396233",
  api_secret: "Gi2_J4XLQeULCubkXx57LJ4v2aE",
});
export async function GET(req, res) {
  // await dbConnect();
  try {
    await connect();
    const data = await Blog.find();
    return NextResponse.json({ result: true, Data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
export async function POST(req, res) {
  try {
    await connect();
    let data = await req.json();
    console.log("result", data);

    if (data.bannerPhoto != null) {
      console.log("enter");
      const fileResult = await cloudinary.uploader.upload(data.bannerPhoto, {
        asset_folder: "news",
        resource_type: "auto",
      });

      data.bannerPhoto = {
        public_id: fileResult.public_id,
        url: fileResult.secure_url,
      };
    }
    const blog = await Blog.create(data);
    return NextResponse.json({ success: true, Data: blog }, { status: 201 });

    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

//delete
export async function DELETE(req, res) {
  try {
    await connect();
    const formData = await req.formData();

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log("formDataObj", formDataObj);
    // if (formDataObj.url != null) {
    //   await cloudinary.uploader.destroy(formDataObj.url);
    // }
    // const deleteRes = await Blog.deleteOne({ _id: formDataObj.id });
    // if (!deleteRes) {
    //   return NextResponse.json({ success: false }, { status: 404 });
    // }
    return NextResponse.json(
      { success: true, message: "Data deleted successfully" },
      { status: 200 }
    );

    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
