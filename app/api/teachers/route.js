import { NextResponse } from "next/server";
import Teacher from "../../../lib/models/TeacherSchema";
import dbConnect from "../../../lib/mongodb";

export async function GET(request) {
    await dbConnect();

    const teachers = await Teacher.find({});

    return NextResponse.json({ success: true, data: teachers });
}

export async function POST(request) {
    const body = await request.json();

    await dbConnect();

    const newTeacher = new Teacher(body);
    await newTeacher.save();

    return NextResponse.json({ success: true, data: newTeacher });
}