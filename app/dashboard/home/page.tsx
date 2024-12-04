import DashboardLayout from "@/layouts/dasboard";
import Analytics from "@/components/dashboard/home/Analytics";
import { Kanban } from "@/components/dashboard/home/Kanban";

export default function Dashboard() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="w-full md:pl-[260px] px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
        <h2 className="font-semibold text-2xl text-gray-800">
          Hello, Isola Pelumi 👋
        </h2>
        <p className="text-sm text-gray-600 py-2">
          Here is what’s happening on Dashboard Since it was launced
        </p>

        <section className="mt-6">
          <Analytics />
        </section>
      </div>
    </DashboardLayout>
  );
}
