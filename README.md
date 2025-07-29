
# playleft
=======
## API and UI Testing

This framework supports:

- UI automation via Playwright, with Page Objects and Gherkin scenarios.
- API testing using Axios, with API helpers and Gherkin scenarios.
- Shared reporting via Allure and Playwright HTML reporter.

### To run UI tests

```bash
npm test # runs all features, or use tags
```

### To run API tests

```bash
npx cucumber-js src/features/api/user.feature --require-module ts-node/register
```

### To run all and view Allure report

```bash
npm run test:allure
```

