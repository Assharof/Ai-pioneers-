import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { enrollments } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await db.insert(enrollments).values({
      studentName: body.studentName,
      studentAge: body.studentAge,
      parentName: body.parentName,
      whatsappPhone: body.whatsappPhone,
      email: body.email,
      learningGoal: body.learningGoal || null,
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
  }
}
