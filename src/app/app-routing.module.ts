import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { SportComponent } from './components/pages/sport/sport/sport.component';
import { EventAvailabilityComponent } from './components/pages/event-availability/event-availability.component';
import { DisneyExperienceComponent } from './components/pages/disney-experience/disney-experience.component';
import { TicketsComponent } from './components/pages/tickets/tickets.component';

const routes: Routes = [{
	path: '', component: IndexComponent
}, {
	path: 'Sports',
	children:[{
		path:':sportId',
		children:[{
			path:'',
			component:SportComponent
		},{
			path:'availability/:eventId',
			component:EventAvailabilityComponent
		}]
	}]
},{
	path: 'Tickets',
	component: TicketsComponent
},
{
	path:'Disney-Experience',
	component: DisneyExperienceComponent
}
,{path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
