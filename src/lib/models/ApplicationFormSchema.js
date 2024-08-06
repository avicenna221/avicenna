// models/applicationFormSchema.js
import mongoose from "mongoose";

const ApplicationFormSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
   
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    currentAddress: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
   
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherMobileNumber: { type: String, required: true },
    
    matricDegree: { type: String, required: true },
    matricInstitute: { type: String, required: true },
    matricYearPassed: { type: String, required: true },

    fscDegree: { type: String, required: true },
    fscInstitute: { type: String, required: true },
    fscYearPassed: { type: String, required: true },

    program: { type: String, required: true },
    session: { type: String, required: true },
    profilePhoto: { url: String, public_id: String },
    passportCopy: { type: String },
    sscCertificate: { type: String, required: true },
    hscCertificate: { type: String, required: true },
    otherFiles: { type: String },
    remarks: { type: String },
    status: {
      type: String,
      enum: ["pending","reject", "accept","student"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.ApplicationForm ||
  mongoose.model("ApplicationForm", ApplicationFormSchema);
