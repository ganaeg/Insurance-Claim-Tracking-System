import { LightningElement } from 'lwc';

export default class ClaimStatusTracker extends LightningElement {
    steps = ['Submitted','Under Review','Approved','Paid'];
    status = 'Approved'; // mock for demo

    get activeIndex() {
        return this.steps.indexOf(this.status);
    }

    get progress() {
        const max = this.steps.length - 1;
        return Math.round((this.activeIndex / max) * 100);
    }

    // ✅ MUST return a valid CSS string
    get progressStyle() {
        return `width: ${this.progress}%`;
    }
}
