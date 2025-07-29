import { When, Then } from '@cucumber/cucumber';
import { UserApi } from '../../api/userApi';
import { expect } from '@playwright/test';

When('I send a GET request to the user endpoint with id {int}', async function (userId: number) {
  this.apiResponse = await UserApi.getUser(userId);
});

Then('the response status should be {int}', function (status: number) {
  expect(this.apiResponse.status).toBe(status);
});

Then('the response should include the username {string}', function (username: string) {
  expect(this.apiResponse.data.username).toBe(username);
});