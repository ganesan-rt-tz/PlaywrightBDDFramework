Feature: Login

@smoke @regression
Scenario: Valid Login

Given User opens login page
When User enters mobile number "9999999999"
And User clicks Send OTP button
And User enters OTP "123456"
And User clicks Verify OTP button
Then Dashboard should be displayed


@sanity @regression
Scenario: Invalid Mobile Number

Given User opens login page
When User enters mobile number "8888888888"
And User clicks Send OTP button
Then Error message should be displayed


@regression
Scenario: Empty Mobile Number

Given User opens login page
When User leaves mobile number blank
And User clicks Send OTP button
Then Mobile number required message should be displayed


@sanity @regression
Scenario: Invalid OTP

Given User opens login page
When User enters mobile number "9999999999"
And User clicks Send OTP button
And User enters OTP "111111"
And User clicks Verify OTP button
Then Invalid OTP message should be displayed


@sanity @regression
Scenario: Empty OTP

Given User opens login page
When User enters mobile number "9999999999"
And User clicks Send OTP button
And User clicks Verify OTP button
Then Please enter 6 digit OTP message should be displayed


@smoke @regression
Scenario: Logout

Given User is logged in
When User clicks Logout button
Then Login page should be displayed


Scenario: Screenshot Test

Given User opens login page
Then Take screenshot