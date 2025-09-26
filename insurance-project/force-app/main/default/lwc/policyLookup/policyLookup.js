import { LightningElement, track } from 'lwc';
import findPolicies from '@salesforce/apex/PolicyController.findPolicies';

export default class PolicyLookup extends LightningElement {
  @track searchKey = '';
  @track results = [];

  handleKeyInput(event) {
    this.searchKey = event.target.value;
    if (this.searchKey.length > 2) {
      findPolicies({ searchKey: this.searchKey })
        .then(data => {
          this.results = data;
        })
        .catch(error => {
          console.error('Error fetching policies:', error);
          this.results = [];
        });
    } else {
      this.results = [];
    }
  }

  handleSelect(event) {
    const id = event.currentTarget.dataset.id;
    const name = event.currentTarget.dataset.name;
    const selectedEvent = new CustomEvent('policyselected', { detail: { id, name } });
    this.dispatchEvent(selectedEvent);
    this.results = [];
    this.searchKey = name;
  }
}