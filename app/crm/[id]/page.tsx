import MainLayout from "@/components/layout/MainLayout";
import ClientProfile from "@/components/crm/ClientProfile";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ClientPage({
  params,
}: Props) {

  const { id } = await params;

  return (
    <MainLayout>

      <ClientProfile
        company={decodeURIComponent(id)}
      />

    </MainLayout>
  );
}