import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('areaChart', { static: false }) areaChartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    if (this.areaChartRef) {
      const ctx = this.areaChartRef.nativeElement.getContext('2d');
      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Earnings",
            tension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
          }],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgb(255,255,255)",
              bodyColor: "#858796",
              titleColor: '#6e707e',
              borderColor: '#dddfeb',
              borderWidth: 1,
              padding: 15,
              displayColors: false,
              intersect: false,
              mode: 'index',
              callbacks: {
                label: function(context: any) {
                  let label = context.dataset.label || '';
                  return label + ': $' + context.parsed.y;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { maxTicksLimit: 7 }
            },
            y: {
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                callback: function(value: any) { return '$' + value; }
              },
              grid: {
                color: "rgb(234, 236, 244)"
              }
            }
          }
        }
      });
    }
  }
}
