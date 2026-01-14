import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("SIGNUP BODY:", body);  // <- log what the backend receives

    const { username, email, password } = body;

    if (!username || !email || !password) {
      console.log("Validation failed: missing fields"); // optional
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();
    console.log("DB CONNECTED");  // <- log after DB connection

    const existingUser = await User.findOne({ email });
    console.log("EXISTING USER:", existingUser);  // <- log if user exists

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("PASSWORD HASHED");  // <- log after hashing

    await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log("USER CREATED");  // <- log after creation

    return NextResponse.json(
      { message: "Signup successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP_ERROR:", error); // <- log the exact error
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
