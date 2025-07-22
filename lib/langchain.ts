import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";





export async function fetchAndExtractPdfText(fileUrl: string) {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();

    const loader = new PDFLoader(new Blob([arrayBuffer]));

    const docs = await loader.load();
    //combine all the pages 

    return docs.map((docs) => docs.pageContent).join("\n");


}