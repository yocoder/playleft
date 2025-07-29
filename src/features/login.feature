Feature: User Login

  Scenario: Successful login
    Given I open the browser
    When I navigate to "https://example.com/login"
    And I login with username "user1" and password "pass123"
    Then I should see the dashboard