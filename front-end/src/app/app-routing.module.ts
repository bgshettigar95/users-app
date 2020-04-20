import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from 'src/app/users-list/users-list.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';


const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'add', component: AddUserComponent },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
