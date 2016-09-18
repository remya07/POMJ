Feature: add proposal

Scenario: User can create Proposal

Given user is in dashboard page
When navigates to 'Proposal' Page
And creates proposal with default data
Then proposal should be created successfully
And should be visible in the list of proposals
  @ej-12
  Scenario: investors can view active proposal

    Given user is in dashboard page
    When navigates to 'Proposal' Page
    And creates proposal
    And make it active
    Then proposal should be created successfully
    When user logout as entreprenure
    And login as investor
    Then investors should be able to view the proposal
