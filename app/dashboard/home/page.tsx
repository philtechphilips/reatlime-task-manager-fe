"use client";
import DashboardLayout from "@/layouts/dasboard";
import Analytics from "@/components/dashboard/home/Analytics";
import useUserStore from "@/store/userStore";

export default function Dashboard() {
  const { user } = useUserStore();
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="w-full md:pl-[260px] px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
        <h2 className="font-semibold text-2xl text-gray-800">
          Hello, {user?.fullName} 👋
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
