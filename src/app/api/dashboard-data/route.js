import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";
import ApplicationFormSchema from "@/lib/models/ApplicationFormSchema";
import PublicationSchema from "@/lib/models/PublicationSchema";
import Contact from "@/lib/models/Contact";
import { NextRequest } from "next/server";
export async function GET(req, res) {

  await connect();
  const contacts = await Contact.countDocuments();
  const blogs = await Blog.countDocuments();
  const applications = await ApplicationFormSchema.countDocuments();
  const pub = await PublicationSchema.countDocuments();
 
  return NextResponse.json({ result: true, Data: {contacts:contacts,blogs:blogs,applications:applications,publications:pub} });
}