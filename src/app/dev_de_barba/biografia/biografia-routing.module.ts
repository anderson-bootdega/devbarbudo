import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BiografiaComponent } from './biografia.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BiografiaComponent }
	])],
	exports: [RouterModule]
})
export class BiografiaRoutingModule { }
