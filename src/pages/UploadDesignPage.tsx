"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess, showError } from "@/utils/toast"; // Assuming these toast utilities exist

const UploadDesignPage = () => {
  const [designTitle, setDesignTitle] = useState("");
  const [designDescription, setDesignDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!designTitle || !selectedFile) {
      showError("Please provide a design title and select a file.");
      setIsSubmitting(false);
      return;
    }

    // In a real application, you would send this data to a backend server.
    // For now, we'll simulate an upload.
    console.log("Uploading Design:", {
      title: designTitle,
      description: designDescription,
      file: selectedFile.name,
      fileType: selectedFile.type,
      fileSize: selectedFile.size,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    showSuccess("Design uploaded successfully! (Backend integration needed for actual storage)");
    setDesignTitle("");
    setDesignDescription("");
    setSelectedFile(null);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-background py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Upload Your Design</CardTitle>
          <CardDescription className="text-gray-600 dark:text-muted-foreground">
            Share your creative textile designs with us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="designTitle">Design Title</Label>
              <Input
                id="designTitle"
                type="text"
                placeholder="e.g., Floral Pattern Collection"
                value={designTitle}
                onChange={(e) => setDesignTitle(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="designDescription">Description (Optional)</Label>
              <Textarea
                id="designDescription"
                placeholder="Tell us more about your design..."
                value={designDescription}
                onChange={(e) => setDesignDescription(e.target.value)}
                rows={4}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="designFile">Upload Design File</Label>
              <Input
                id="designFile"
                type="file"
                accept="image/*,.pdf,.ai,.eps,.svg" // Common design file types
                onChange={handleFileChange}
                required
              />
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-2">Selected file: {selectedFile.name}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Uploading..." : "Submit Design"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadDesignPage;