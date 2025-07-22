
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";


export default function Upload() {
    return (
        <section className="min-h-screen bg-[#fde6cc]">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <UploadHeader />
                    <UploadForm />
                </div>

            </div>

        </section >
    );
}