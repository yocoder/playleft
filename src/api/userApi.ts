import axios, { AxiosResponse } from 'axios';

export class UserApi {
  private static baseUrl = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

  static async getUser(userId: number): Promise<AxiosResponse> {
    return axios.get(`${this.baseUrl}/users/${userId}`);
  }

  static async createUser(data: any): Promise<AxiosResponse> {
    return axios.post(`${this.baseUrl}/users`, data);
  }
}