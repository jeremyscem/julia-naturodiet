import { NextResponse } from "next/server";
import { blogData } from "staticData/blogData";

export async function GET() {
  return NextResponse.json(blogData); 
}