Feature: Ledger Creation

Scenario: Create Ledger

Given User is logged in

When User navigates to Ledger page

And User clicks Add Ledger

And User enters Ledger Name "BDD Ledger"

And User selects Ledger Type

And User enters City "Salem"

And User enters District "Salem"

And User enters State "Tamil Nadu"

And User enters Country "India"

And User enters Pincode "636001"

And User enters Mobile Number "9876543210"

And User enters Email "bdd@test.com"

And User enters Description "BDD Ledger Creation"

And User clicks Save button

Then Ledger should be created successfully

And Take Ledger Screenshot