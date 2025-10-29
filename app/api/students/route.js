import { NextResponse } from "next/server";
import Student from "../../../lib/models/StudentSchema";
import dbConnect from "../../../lib/mongodb";

export async function GET(request) {
    await dbConnect();

    const students = await Student.find({});

    return NextResponse.json({ success: true, data: students });
}
