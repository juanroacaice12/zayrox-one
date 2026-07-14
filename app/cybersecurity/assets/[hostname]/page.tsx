import MainLayout from "@/components/layout/MainLayout";
import AssetProfile from "@/components/cybersecurity/AssetProfile";

interface Props {
  params: Promise<{
    hostname: string;
  }>;
}

export default async function AssetPage({
  params,
}: Props) {

  const { hostname } = await params;

  return (
    <MainLayout>

      <AssetProfile hostname={hostname} />

    </MainLayout>
  );

}