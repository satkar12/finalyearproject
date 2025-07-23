import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({
        pdf: {
            maxFileSize: '32MB', // 20MB
        }
    })
        .middleware(async () => {
            const user = await currentUser();

            if (!user) {
                throw new UploadThingError("Unauthorized");
            }

            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for user id:", metadata.userId);
            console.log("file url:", file.ufsUrl); // ✅ use .url, not .ufsUrl
            return { userId: metadata.userId, fileUrl: file.url };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
