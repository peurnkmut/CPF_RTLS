import { Component, OnInit } from '@angular/core';
import {base64_logo} from "./imagedata"
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  cpf_logo = base64_logo;
 
  
}

