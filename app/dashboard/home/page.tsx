"use client";
import DashboardLayout from "@/layouts/dasboard";
import Analytics from "@/components/dashboard/home/Analytics";
import useUserStore from "@/store/userStore";
import Organization from "@/components/modals/Organization";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Dashboard() {
  const { user } = useUserStore();
  const getUserOrg = async (userId: string | undefined) => {
    if (!userId) {
      throw new Error("User ID is required");
    }
  
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/members/user/${userId}`, 
      {
        headers: {
          Authorization: `Bearer ${user?.token}`, // Use Bearer schema for the token
        },
      }
    );
    
    return response.data; 
  };
  
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['userOrg', user?.id], 
    queryFn: () => getUserOrg(user?.id), 
    enabled: !!user?.id,
  });
console.log(data, "data member")
 
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="w-full md:pl-[260px] pt-4 px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
        <h2 className="font-semibold text-2xl text-gray-800">
          Hello, {user?.organizations?.[0]?.name || data?.organization?.name || ''}
          👋
        </h2>
        <p className="text-sm text-gray-600 py-2">
          Here is what’s happening in your organization.
        </p>

        <section className="mt-6">
          <Analytics />
        </section>
      </div>
      {user && !user.organizations && !data && (
        <div className="bg-black flex items-center justify-center bg-opacity-60 w-screen h-screen fixed top-0 z-[1000]">
          <Organization />
        </div>
      )}
    </DashboardLayout>
  );
}

