import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import mongoose from "mongoose";
import Contact from "@/lib/models/Contact";
import { NextRequest } from "next/server";
export async function GET(req, res) {

  await connect();
  const contacts = await Contact.find();
  console.log("data", contacts);
  return NextResponse.json({ result: true, Data: contacts });
}
export async function POST(request) {
 

  try {
    const payload = await request.json();
    await connect();
    console.log(payload);
    const newContact = new Contact(payload);
    const contact = await newContact.save();
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
export async function DELETE(request,content) {
 

  try {
    console.log("payload",content.params);
    await connect();
    
   
    
    const newContact = await Contact.deleteOne({_id:"093b"});
   if(!newContact){
    return NextResponse.json({ success: false,},{status:404});
   }
    return NextResponse.json({ success: true, message:"Data deleted successfully" },{status:200});
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
