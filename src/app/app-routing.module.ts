import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  {
    //inside of routes you can define the route path of what you component you want to link. 

    path: 'users',
    component: UsersComponent,
  },
  {
  path: '**:',
    //Cleaner and more clear way of showing exactly where this is redirecting too:
  
    redirectTo: 'users',
    //If a page is not found or goes to anything else
    //this will tell the page to redirect to the users component instead
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
