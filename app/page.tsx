import MainLayout from "@/components/layout/MainLayout";
import DashboardHome from "@/components/dashboard/DashboardHome";
import RobotStatusCard from "@/components/cards/RobotStatusCard";

export default function Home() {
  return (
    <MainLayout>
      <DashboardHome />
      <RobotStatusCard />
    </MainLayout>
  );
}