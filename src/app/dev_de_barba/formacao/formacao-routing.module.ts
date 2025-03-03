import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormacaoComponent } from './formacao.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FormacaoComponent }
	])],
	exports: [RouterModule]
})
export class FormacaoRoutingModule { }
