import MainLayout from "@/components/layout/MainLayout";
import FolderView from "@/components/documents/FolderView";

interface Props {
  params: Promise<{
    folder: string;
  }>;
}

export default async function FolderPage({
  params,
}: Props) {

  const { folder } = await params;

  return (
    <MainLayout>

      <FolderView
        folder={decodeURIComponent(folder)}
      />

    </MainLayout>
  );
}