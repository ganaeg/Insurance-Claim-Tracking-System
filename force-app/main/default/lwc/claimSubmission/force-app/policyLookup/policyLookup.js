import { LightningElement, track } from 'lwc';
import searchPolicies from '@salesforce/apex/ClaimController.searchPolicies';

const DELAY = 300;

export default class PolicyLookup extends LightningElement {
  @track searchKey = '';
  @track results = [];
  timer;

  handleKeyInput(evt) {
    window.clearTimeout(this.timer);
    this.searchKey = evt.target.value;
    this.timer = window.setTimeout(() => {
      this.doSearch();
    }, DELAY);
  }

  doSearch() {
    if (!this.searchKey) {
      this.results = [];
      return;
    }
    searchPolicies({ searchKey: this.searchKey })
      .then((res) => {
        this.results = res;
      })
      .catch((err) => {
        this.results = [];
        console.error(err);
      });
  }

  handleSelect(evt) {
    const id = evt.currentTarget.dataset.id;
    const name = evt.currentTarget.dataset.name;
    this.dispatchEvent(new CustomEvent('policyselect', {
      detail: { policyId: id, policyName: name }
    }));
    this.searchKey = name;
    this.results = [];
  }
}
