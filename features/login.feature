Feature: Login

Scenario: Login with valid mobile number and OTP

Given User opens login page
When User enters mobile number "9999999999"
And User clicks Send OTP button
And User enters OTP "123456"
And User clicks Verify OTP button
Then Dashboard should be displayed