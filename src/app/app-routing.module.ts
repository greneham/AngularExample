import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './users/detail/detail.component';
import { ListComponent } from './users/list/list.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [{
	path: '',
	component: ListComponent
}, {
	path: 'users/:id',
	component: ListComponent
}, {
	path: 'user-details/:id',
	component: DetailComponent
}, {
	path: 'error',
	component: ErrorComponent
}, {
	path: '**',
	component: NotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
