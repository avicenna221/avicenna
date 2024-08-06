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
    const data = await ApplicationFormSchema.find({ status: { $in: ['accept', 'reject','pending'] } });
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
export async function POST(req, res) {
  if (req.method == "POST") {
    try {
      console.log("payload");
      const formData = await req.formData();

      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));

      await connect();
      const profilePhoto = formData.get("profilePhoto");

      console.log("formDataObj", formDataObj);

      if (profilePhoto != null) {
        console.log("enter");
        const fileResult = await cloudinary.uploader.upload(profilePhoto, {
          asset_folder: "news",
          resource_type: "auto",
        });

        formDataObj.profilePhoto = {
          public_id: fileResult.public_id,
          url: fileResult.secure_url,
        };
      }

      const aplicationForm = new ApplicationFormSchema(formDataObj);
      await aplicationForm.save();

      console.log("sucess");
      if (aplicationForm)
        return NextResponse.json(
          {
            success: true,
            message: "Form created Successfully",
            Data: aplicationForm,
          },
          { status: 201 }
        );
      else
        return NextResponse.json(
          { success: true, message: "Form not submitted" },
          { status: 400 }
        );
    } catch (error) {
      console.log("fail");
      console.log("error.message", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
  }
}

//update data
export async function PATCH(req, res) {
  try {
    await connect();
    const formData = await req.formData();

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log("payload2", formDataObj);
    const data = await ApplicationFormSchema.findById({ _id: formDataObj.id });
    if (data) {
      data.status = formDataObj.status;
      await data.save();
      const data2 = await ApplicationFormSchema.find();
      return NextResponse.json({ result: true, Data: data2 }, { status: 201 });
    } else
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
// const handler = createRouter();

// handler.use(upload.fields([
//   { name: 'profilePhoto', maxCount: 1 },
//   { name: 'passportScanCopy', maxCount: 1 },
//   { name: 'sscCertificate', maxCount: 1 },
//   { name: 'hscCertificate', maxCount: 1 },
//   { name: 'otherFiles', maxCount: 1 },
// ]));

// handler.post(async (req, res) => {
//   await connect();
// console.log("hy");
//   const {
//     fullName, gender, religion, dob, email, phone, currentAddress, city, country, hasPassport,
//     passportNumber, passportExpiry, fatherName, fatherOccupation, fatherMobileNumber, motherName, motherOccupation, motherMobileNumber,
//     degrees, program, session, remarks, disclaimer,
//   } = req.body;

//   const profilePhoto = req.files['profilePhoto'][0].path;
//   const passportScanCopy = req.files['passportScanCopy']? req.files['passportScanCopy'][0].path:null;
//   const sscCertificate = req.files['sscCertificate'][0].path;
//   const hscCertificate = req.files['hscCertificate'][0].path;
//   const otherFiles = req.files['otherFiles'] ? req.files['otherFiles'][0].path : null;

//   try {
//     const application = await ApplicationFormSchema.create({
//       fullName, gender, religion, dob, email, phone, currentAddress, city, country, hasPassport,
//       passportNumber, passportExpiry, fatherName, fatherOccupation, fatherMobileNumber, motherName, motherOccupation, motherMobileNumber,
//       degrees, program, session, profilePhoto, passportScanCopy, sscCertificate, hscCertificate, otherFiles, remarks, disclaimer,
//     });
//     res.status(201).json({ success: true, data: application });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

// export default handler;
