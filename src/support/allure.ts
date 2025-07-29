import { After, Before, Status } from '@cucumber/cucumber';
import { allure } from 'allure-playwright';

Before(function () {
  allure.epic('Login Feature');
});

After(function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    // Capture screenshot logic here
  }
});