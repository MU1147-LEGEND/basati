"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { departments } from "../../data/departments";
import AddTeacherBTN from "./AddTeacherBTN";

export default function AddTeacherForm({ addTeacherAction }) {
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setUploadError(null);

        try {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const base64Image = buffer.toString("base64");

            const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
            if (!imgbbApiKey) {
                throw new Error("Image upload failed: ImgBB API key missing.");
            }

            const imgbbResponse = await fetch(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `image=${encodeURIComponent(base64Image)}`,
                }
            );

            const imgbbData = await imgbbResponse.json();

            if (imgbbData.success) {
                setUploadedImageUrl(imgbbData.data.url);
            } else {
                throw new Error(imgbbData.error.message);
            }
        } catch (error) {
            console.error("Error uploading image to ImgBB:", error);
            setUploadError("Failed to upload image: " + error.message);
            setUploadedImageUrl(null);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex-1 space-y-4 p-8 pt-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline" size="icon">
                        <Link href="/dashboard">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Add New Teacher
                        </h1>
                        <p className="text-muted-foreground">
                            Fill out the form below to add a new faculty member.
                        </p>
                    </div>
                </div>
            </div>

            <div className="dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <CardHeader>
                    <CardTitle>Faculty Information</CardTitle>
                    <CardDescription>
                        Please provide the details for the new teacher.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={addTeacherAction} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="e.g., Dr. Mohammad Rahman"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position">Position</Label>
                                <Input
                                    id="position"
                                    name="position"
                                    placeholder="e.g., Principal & Head of Department"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="e.g., m.rahman@basti.edu"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department">Department</Label>
                                <Select
                                    onValueChange={setSelectedDepartment}
                                    value={selectedDepartment}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.map((dept) => (
                                            <SelectItem
                                                key={dept.id}
                                                value={dept.department_id}
                                            >
                                                {dept.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <input
                                    type="hidden"
                                    name="department"
                                    value={selectedDepartment}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="education">
                                    Education (Degree)
                                </Label>
                                <Input
                                    id="education"
                                    name="education"
                                    placeholder="e.g., PhD in Computer Science"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="specialization">
                                    Specialization
                                </Label>
                                <Input
                                    id="specialization"
                                    name="specialization"
                                    placeholder="e.g., Artificial Intelligence"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="experience">
                                    Years of Experience
                                </Label>
                                <Input
                                    id="experience"
                                    name="experience"
                                    type="text"
                                    placeholder="e.g., 10"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="joiningDate">
                                    Joining Date
                                </Label>
                                <Input
                                    id="joiningDate"
                                    name="joiningDate"
                                    type="date"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subjects">
                                Subjects Taught (comma-separated)
                            </Label>
                            <Textarea
                                id="subjects"
                                name="subjects"
                                placeholder="e.g., Advanced Programming, Database Systems"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Profile Picture</Label>
                            <Input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                disabled={isUploading}
                            />
                            {isUploading && (
                                <p className="text-sm text-blue-500">
                                    Uploading image...
                                </p>
                            )}
                            {uploadError && (
                                <p className="text-sm text-red-500">
                                    {uploadError}
                                </p>
                            )}
                            {uploadedImageUrl && (
                                <p className="text-sm text-green-500">
                                    Image uploaded:{" "}
                                    <a
                                        href={uploadedImageUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View
                                    </a>
                                </p>
                            )}
                            <input
                                type="hidden"
                                name="imageUrl"
                                value={uploadedImageUrl || ""}
                            />
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button variant="outline" asChild>
                                <Link href="/dashboard">Cancel</Link>
                            </Button>
                            <AddTeacherBTN isUploading={isUploading} />
                        </div>
                    </form>
                </CardContent>
            </div>
        </div>
    );
}
