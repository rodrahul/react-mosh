import apiClients from "./api-clients";

export interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClients
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      });

    return { request, cancel: () => controller.abort() }
  }

  create<T>(entity: T) {
    return apiClients.post(this.endpoint, entity);
  }

  delete(id: number) {
    return apiClients.delete(this.endpoint + "/" + id);
  }

  update<T extends Entity>(entity: T) {
    return apiClients.patch(this.endpoint + "/" + entity.id, entity)
  }

}

const create = (endpoint: string) => new HttpService(endpoint)

export default create;