import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @Input() sideNavStatus:boolean=false;
    list=[
  
      {
        number:1,
        name:'Dashboard',
        icon:'fa-solid fa-dashboard',
        link:'dashboard'
      },
      
      {
        number:2,
        name:'charts',
        icon:'fa-solid fa-chart-simple',
        link:'chart'
      },{
        number:3,
        name:'Cards',
        icon:'bi bi-wallet2',
        link:'card'
      }
    
    ]

    pages=[
  
      {
        number:1,
        name:'Profile',
        icon:'fa fa-user',
        link:'profile'
        
      },
      {
        number:2,
        name:'FAQ',
        icon:'fa-solid fa-question',
        link:'faq'
      },
      {
        number:3,
        name:'Contact',
        icon:'  fa fa-phone',
        link:'contact'
      },
      {
        number:4,
        name:'Register',
        icon:'fa fa-sign-in',
        link:'register'
      },
      {
        number:5,
        name:'Login',
        icon:'fa fa-sign-in',
        link:'login'
      },
      {
        number:6,
        name:'Error',
        icon:'bi-bug',
        link:'error'
      }
      
    ]
    
  constructor(){
  
  }
  ngOnInit(): void {
    
  }
  }
  
