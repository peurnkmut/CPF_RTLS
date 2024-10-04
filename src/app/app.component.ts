import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RTLSComponent } from './pages/rtls/rtls.component';
import { HistoryComponent } from './pages/history/history.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewEncapsulation } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RTLSComponent,HistoryComponent,NavbarComponent,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testNg';

}
