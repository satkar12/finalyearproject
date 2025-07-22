"use client";

import { useUploadThing } from "@/lib/utils/uploadthings";
import UploadFormInput from "./upload-form-input";
import { generatePdfSummary } from "@/actions/upload-actions";
import { toast } from "sonner";
import { z } from 'zod';

const schema = z.object({
    file: z
        .instanceof(File, { message: 'Invalid file' })
        .refine((file) => file.size <= 20 * 1024 * 1024, "File size must be less than 20MB")
        .refine((file) => file.type.startsWith('application/pdf'), "File must be PDFs"),
});

export default function UploadForm() {
    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
            console.log("uploaded successfully!");
        },
        onUploadError: (err) => {
            console.error("Error occurred while uploading", err);
            toast.error("Error occurred while uploading!", {
                description: err.message,
            });
        },
        onUploadBegin: ({ file }) => {
            console.log("upload has begun for ", file);
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        const validatedFields = schema.safeParse({ file });

        if (!validatedFields.success) {
            toast.error("❌ Something went wrong!", {
                description:
                    validatedFields.error.flatten().fieldErrors?.file?.[0] ?? 'Invalid Error',
            });
            return;
        }

        toast("📄 Uploading Pdf...", {
            description: "We are uploading your PDF! ✨",
        });

        const resp = await startUpload([file]);

        if (!resp) {
            toast.error("❌ Something went wrong!", {
                description: "Please use a different file",
            });
            return;
        }

        toast("📄 Processing Pdf...", {
            description: "Hang tight! Our AI is reading your document! ✨",
        });
        //parse the pdf using langchain
        const summary = await generatePdfSummary(resp);
        console.log({ summary });
        //summarize the pdf using ai 
        //save the summary to the database
        //redirect  to the id summary page 


        // Further AI, DB, and routing logic...
    };


    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    );
}
