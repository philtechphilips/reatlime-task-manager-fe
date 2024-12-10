export const unAuthRoutes: string[] = ["/", "/auth/sign-up", "/auth/sign-in"];

export default function authHeader() {
  if (typeof window !== "undefined") {
    const userJSON = localStorage?.getItem("user");

    if (userJSON) {
      const user = JSON.parse(userJSON);

      if (user?.state?.user && user?.state?.user?.token) {
        return { Authorization: "Bearer " + user?.state?.user?.token };
      }
    }
  }

  return {};
}
