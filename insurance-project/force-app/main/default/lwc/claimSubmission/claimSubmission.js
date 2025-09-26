import { LightningElement, track } from 'lwc';
import submitClaim from '@salesforce/apex/ClaimController.submitClaim';

export default class ClaimSubmission extends LightningElement {
    @track policyNumber = '';
    @track claimAmount = 0;
    @track description = '';

    handlePolicyChange(event) {
        this.policyNumber = event.target.value;
    }

    handleAmountChange(event) {
        this.claimAmount = event.target.value;
    }

    handleDescriptionChange(event) {
        this.description = event.target.value;
    }

    handleSubmit() {
        if (!this.policyNumber || !this.claimAmount) {
            alert('Policy # and Claim Amount are required');
            return;
        }
        submitClaim({ policyNumber: this.policyNumber, claimAmount: this.claimAmount, description: this.description })
            .then(() => {
                alert('Claim submitted successfully');
            })
            .catch(error => {
                console.error('Error submitting claim', error);
            });
    }
}