"use client";
import { Input } from "@/components/ui/input";


import { Button } from "@/components/ui/button";

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-end items-center gap-1.5">
                <Input id="file" type="file" name="file" accept="application/pdf" required className="bg-white" />
                <Button>Upload your PDF</Button>
            </div>
        </form>
    );
}