import MainLayout from "@/components/layout/MainLayout";
import DocumentViewer from "@/components/documents/DocumentViewer";

interface Props {
  params: Promise<{
    document: string;
  }>;
}

export default async function ViewerPage({
  params,
}: Props) {

  const { document } = await params;

  return (
    <MainLayout>

      <DocumentViewer
        document={decodeURIComponent(document)}
      />

    </MainLayout>
  );
}