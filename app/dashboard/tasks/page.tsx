"use client";

import { Kanban } from "@/components/dashboard/home/Kanban";
import AddMemberForm from "@/forms/add-member/AddMemberForm";
import makeNetworkCall from "@/http/http.service";
import DashboardLayout from "@/layouts/dasboard";
import useUserStore from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Tasks() {
  const { user } = useUserStore();
  const [openForm, setOpenForm] = useState(false);

  const handleFormModal = () => setOpenForm((prev) => !prev);

  return (
    <DashboardLayout pageTitle="Tasks">
      <TaskView
        user={user}
        openForm={openForm}
        handleFormModal={handleFormModal}
      />
    </DashboardLayout>
  );
}

// Define props for the TaskView component
type TaskViewProps = {
  user: any;
  openForm: boolean;
  handleFormModal: () => void;
  organizationData?: any;
};

type Member = {
  id: string;
  fullName: string;
};

const TaskView = ({
  user,
  openForm,
  handleFormModal,
  organizationData,
}: TaskViewProps) => {
  const [members, setMembers] = useState<Member[]>([]);

  const getMemberByOrgId = async (organizationId: string) => {
    const response = await makeNetworkCall({
      method: "get",
      url: `/members/organization/${organizationId}`,
    });
    if (response?.data && response.data) {
      setMembers(response.data); // Unwrap `data` correctly here
      return response.data;
    }
    throw new Error(response?.error?.message || "Error fetching members");
  };

  useEffect(() => {
    getMemberByOrgId(
      user?.organizations
        ? user?.organizations[0].id
        : organizationData?.organization?.id,
    );
  }, []);

  return (
    <>
      {/* Top Header Section */}
      <div className="w-full flex items-center justify-between md:pl-[260px] px-5 border py-2">
        <p className="text-sm font-semibold">Tasks</p>
        <div className="flex items-center gap-2">
          {/* Avatar Stack */}
          <div className="flex items-center">
            {members &&
              members.map((item, index) =>
                index < 3 ? (
                  <div
                    key={index}
                    className={`h-10 w-10 bg-red-950 rounded-full p-1 flex items-center justify-center ${
                      index > 0 ? `-ml-2` : ``
                    } z-${20 - index}`}
                  >
                    <p className="text-white">
                      {index === 2 && members.length > 3
                        ? `+ ${members.length - 2}`
                        : "0"}
                    </p>
                  </div>
                ) : null,
              )}
          </div>

          {/* Add Member Button */}
          {user?.organizations && (
            <>
              <div className="h-10 border"></div>
              <div
                onClick={handleFormModal}
                className="h-10 cursor-pointer w-10 p-[1px] bg-white rounded-full z-20 flex items-center justify-center"
              >
                <div className="h-8 w-8 p-[1px] bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="ri-add-line text-sm font-semibold"></i>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Kanban Board Section */}
      <div className="w-full md:pl-[260px] px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
        <section className="mt-6">
          <Kanban />
        </section>
      </div>

      {/* Add Member Modal */}
      {openForm && (
        <div className="bg-black flex items-center justify-center bg-opacity-60 w-screen h-screen fixed top-0 z-[1000]">
          <AddMemberForm formHandler={handleFormModal} user={user} />
        </div>
      )}
    </>
  );
};
