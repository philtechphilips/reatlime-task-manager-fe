import { SetupHttpClient } from "..";
import { TasksAPI } from "./task.types";

export function CreateMember(dto: TasksAPI.AddNewMemberDTO, token: string) {
  return SetupHttpClient.SendRequest({
    method: "post",
    path: "/members",
    body: dto,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response: any) => {
    if (response) {
      return response.data; // Ensure the returned type matches UserAPI.User
    }
    throw new Error(response?.error?.message);
  });
}
