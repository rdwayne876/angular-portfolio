import { Component } from '@angular/core';
import { navLinks } from 'src/constants';
import { styles } from 'src/styles';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  style= styles
  active!: string;
  navLinks = navLinks
  menu: string = "/assets/menu.svg"
  close: string = "/assets/close.svg"
  toggle: boolean | undefined

  setActive( link: string){
    this.active = link
  }

  setToggle(){
    this.toggle = !this.toggle
  }
}



