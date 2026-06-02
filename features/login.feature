Feature: Login

Scenario: Send OTP

Given User opens login page
When User enters mobile number "9999999999"
And User clicks Send OTP button
Then OTP screen should be displayed