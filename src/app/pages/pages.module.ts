import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowPageComponent } from './show-page/show-page.component';

const routesPages : Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'show-page', component: ShowPageComponent}
]

@NgModule({
  declarations: [
    MainPageComponent,
    ShowPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPages)
  ]
})
export class PagesModule { }
