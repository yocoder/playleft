Feature: User API

  Scenario: Get user by ID
    When I send a GET request to the user endpoint with id 1
    Then the response status should be 200
    And the response should include the username "Bret"