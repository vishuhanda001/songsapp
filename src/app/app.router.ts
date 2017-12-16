import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SongslistComponent} from './songslist/songslist.component';



export const router:Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:SongslistComponent},
]

export const routes:ModuleWithProviders = RouterModule.forRoot(router);