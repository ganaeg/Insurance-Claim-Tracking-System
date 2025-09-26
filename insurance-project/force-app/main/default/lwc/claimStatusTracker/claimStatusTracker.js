import { LightningElement, track } from 'lwc';

export default class ClaimStatusTracker extends LightningElement {
    @track claims = [
        { Id: '1', Name: 'Claim A', Status__c: 'In Progress', progress: 50 },
        { Id: '2', Name: 'Claim B', Status__c: 'Approved', progress: 100 },
        { Id: '3', Name: 'Claim C', Status__c: 'Pending', progress: 25 }
    ];

    get claimsWithStyle() {
        return this.claims.map(c => {
            return { ...c, progressStyle: `width:${c.progress}%` };
        });
    }
}