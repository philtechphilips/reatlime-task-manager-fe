import { Kanban } from "@/components/dashboard/home/Kanban";
import DashboardLayout from "@/layouts/dasboard";

export default function Tasks() {
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

          <div className="h-10 border"></div>

          <div className="h-10 w-10 p-[1px] bg-white rounded-full z-20 flex items-center justify-center">
            <div className="h-8 w-8 p-[1px] bg-gray-100 rounded-full flex items-center justify-center">
              <i className="ri-add-line text-sm font-semibold"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:pl-[260px] px-5 bg-neutral-100 min-h-screen overflow-x-scroll pr-5">
        <section className="mt-6">
          <Kanban />
        </section>
      </div>
    </DashboardLayout>
  );
}

