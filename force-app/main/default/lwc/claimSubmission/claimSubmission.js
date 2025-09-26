import { LightningElement, track } from 'lwc';
import createClaim from '@salesforce/apex/ClaimService.createClaim';

export default class ClaimSubmission extends LightningElement {
    @track policyId;
    @track claimAmount;
    @track description;

    handlePolicyChange(event){ this.policyId = event.target.value; }
    handleAmountChange(event){ this.claimAmount = event.target.value; }
    handleDescriptionChange(event){ this.description = event.target.value; }

    handleSubmit(){
        if(!this.policyId || !this.claimAmount){
            alert('Please fill all required fields');
            return;
        }
        createClaim({ policyId: this.policyId, claimAmount: this.claimAmount, description: this.description })
            .then(()=> alert('Claim submitted successfully'))
            .catch(error => alert('Error: ' + error.body.message));
    }
}

