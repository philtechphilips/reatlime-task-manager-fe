"use client";
import DashboardLayout from "@/layouts/dasboard";
import Analytics from "@/components/dashboard/home/Analytics";
import useUserStore from "@/store/userStore";
import Organization from "@/components/modals/Organization";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Dashboard() {
  const { user } = useUserStore();
  return (
    <DashboardLayout pageTitle="Dashboard">
      <DashboardContent user={user} />
    </DashboardLayout>
  );
}

const DashboardContent = ({ user, organizationData }: any) => {
  return (
    <div className="w-full md:pl-[260px] pt-4 px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
      <h2 className="font-semibold text-2xl text-gray-800">
        Hello,{" "}
        {user?.organizations?.[0]?.name ||
          organizationData?.organization?.name ||
          ""}
        👋
      </h2>
      <p className="text-sm text-gray-600 py-2">
        Here is what’s happening in your organization.
      </p>

      <section className="mt-6">
        <Analytics />
      </section>
    </div>
  );
};
