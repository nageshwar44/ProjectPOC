import { Component,OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-budget-report',
  templateUrl: './budget-report.component.html',
  styleUrls: ['./budget-report.component.css']
})
export class BudgetReportComponent {
constructor(){

}

ngOnInit(): void {
  var myChart = new Chart("barchart", {
    type: 'radar',
    
    data: {
      
        labels: ['01.00', '02.00', '03.00', '04.00', '05.00', '06.00','07.00'],
        datasets: [{
          
            label: 'Data 1',
            
            data: [0, 20, 40, 100, 25,29,30 ],
            backgroundColor: [
              // this is for rounded balls
              'rgba(175, 229, 179, 0.12)'
              
                
            ],
            //this is for curve border
            borderColor: [
              'rgba(11, 125, 17, 1)'
                
            ],
            borderWidth: 2
        },
        {
          label: 'Data 2',
          data: [10, 20, 25, 15, 18,22, 30],
          backgroundColor: [
              'rgba(238, 192, 95, 0.12)'
          ],
          borderColor: [
              'rgba(226, 178, 6, 1)'
          ],
          borderWidth: 2
      },
      {
        label: 'Data 3',
        data: [20, 28, 38, 45, 35,20, 46],
        backgroundColor: [
            'rgba(77, 134, 225, 0.16)'
        ],
        borderColor: [
            'rgba(12, 118, 193, 1)'
        ],
        borderWidth: 2
    }]
        
    },
    options: {
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: true
        }]
      }
    }
});
}

}
