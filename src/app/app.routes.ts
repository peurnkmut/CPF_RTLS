import { Routes } from '@angular/router';
import { RTLSComponent } from './pages/rtls/rtls.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { SafetyComponent } from './pages/safety/safety.component';


export const routes: Routes = [
    // {
    //     path:'',
    //     redirectTo: 'home',
    //     pathMatch:'full'

    // },
    {
        path: '',
        component:HomeComponent,




        // children:[
        //     {
        //         path: 'history',
        //         component:HistoryComponent
        //     },
        //     {
        //         path: 'rtls',
        //         component:RTLSComponent
        //     },
        // ]
    },
    {
        path: 'rtls',
        component:RTLSComponent,
    },
    {
        path: 'history',
        component:HistoryComponent,
    },
    {
        path: 'safety',
        component:SafetyComponent,
    }


];
