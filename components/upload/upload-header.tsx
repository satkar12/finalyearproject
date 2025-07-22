import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function UploadHeader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            <Badge variant={'secondary'} className="relative px-6 py-2 text-base font-medium bg-linear-to-r from-rose-300 to-rose-600 rounded-full group-hover:bg-gray-50 transition-colors"><Sparkles className="w-7 h-7 mr-2 text-white-600 animate-pulse"></Sparkles>
                <p className="text-base">AI-Powered Content Creation</p>
            </Badge>
            <div className="text-4xl font-bold capitalize tracking-tight text-gray-900 sm:text-5xl">
                Start Uploading Your PDFs

            </div>
            <div>
                <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center ">Upload your pdf and let our AI do the magic! </p>
            </div>


        </div>
    );
}