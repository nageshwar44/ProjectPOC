import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }
  sideNavToggeled():void{
    this.menuStatus=! this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
    
  }
 

}
