import { LightningElement, track } from 'lwc';
import getDashboardData from '@salesforce/apex/ClaimController.getDashboardData';
import { loadScript } from 'lightning/platformResourceLoader';
import CHARTJS from '@salesforce/resourceUrl/chartjs';

export default class ManagerDashboard extends LightningElement {
  chartJsInitialized = false;
  chart;
  @track totalClaims = 0;
  @track totalAmount = 0;
  @track openVsApproved = '';

  renderedCallback() {
    if (this.chartJsInitialized) return;
    this.chartJsInitialized = true;
    loadScript(this, CHARTJS + '/chart.min.js')
      .then(() => {
        this.loadData();
      })
      .catch(error => {
        console.error('ChartJS load error', error);
      });
  }

  loadData() {
    getDashboardData()
      .then(res => {
        this.totalClaims = res.totalClaims || 0;
        this.totalAmount = res.totalAmount || 0;
        const counts = res.counts || {};
        const open = counts['Submitted'] || 0;
        const approved = counts['Approved'] || 0;
        this.openVsApproved = `${open} / ${approved}`;
        this.buildChart(counts);
      })
      .catch(err => console.error(err));
  }

  buildChart(counts) {
    const labels = Object.keys(counts);
    const data = labels.map(k => counts[k]);
    const ctx = this.template.querySelector('canvas.chart').getContext('2d');
    if (this.chart) this.chart.destroy();
    // eslint-disable-next-line no-undef
    this.chart = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Claims by Status',
          data
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}