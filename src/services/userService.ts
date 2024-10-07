import apiClients from "./api-clients";

export interface User {
  id: number;
  name: string;
}


class UserService {

  getAllusers() {
    const controller = new AbortController();
    const request = apiClients
      .get<User[]>("/users", {
        signal: controller.signal,
      });

    return { request, cancel: () => controller.abort() }
  }

  createUser(user: User) {
    return apiClients.post("/users", user);
  }

  deleteUser(id: number) {
    return apiClients.delete("/users/" + id);
  }

  updateUser(user: User) {
    return apiClients.patch("/users/" + user.id, user)
  }

}

export default new UserService();