"use client";
import { Kanban } from "@/components/dashboard/home/Kanban";
import AddMemberForm from "@/forms/add-member/AddMemberForm";
import DashboardLayout from "@/layouts/dasboard";
import useUserStore from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Tasks() {
  const { user } = useUserStore();
  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleFormModal = () => {
    setOpenForm(!openForm);
  };
  return (
    <DashboardLayout pageTitle="Tasks">
      <div className="w-full flex items-center justify-between md:pl-[260px] px-5 border py-2">
        <div>
          <p className="text-sm font-semibold">Tasks</p>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center">
            <div className="h-10 w-10 p-1 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            <div className="h-10 w-10 p-[1px] bg-white rounded-full -ml-4 z-20 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            <div className="h-10 w-10 p-[1px] bg-white rounded-full -ml-4 z-20 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            <div className="h-10 w-10 p-[1px] bg-white rounded-full -ml-4 z-20 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            <div className="h-10 w-10 p-[1px] bg-white rounded-full -ml-4 z-20 flex items-center justify-center">
              <div className="h-8 w-8 p-[1px] bg-gray-100 rounded-full flex items-center justify-center">
                <p className="text-sm font-semibold">+20</p>
              </div>
            </div>
          </div>
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
      <div className="w-full md:pl-[260px] px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
        <section className="mt-6">
          <Kanban />
        </section>
      </div>

      {openForm && (
        <div className="bg-black flex items-center justify-center bg-opacity-60 w-screen h-screen fixed top-0 z-[1000]">
          <AddMemberForm formHandler={handleFormModal} user={user} />
        </div>
      )}
    </DashboardLayout>
  );
}
