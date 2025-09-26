public with sharing class ClaimController {
    @AuraEnabled
    public static Claim__c submitClaim(String policyNumber, String claimType, Decimal claimAmount) {
        // Create a new Claim__c record
        Claim__c newClaim = new Claim__c();
        newClaim.Policy_Number__c = policyNumber;
 
        newClaim.Claim_Amount__c = claimAmount;
        newClaim.Status__c = 'Submitted'; // default status
        insert newClaim;
        return newClaim;
    }
}