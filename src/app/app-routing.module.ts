import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: AppLayoutComponent,
                children: [
                  {
                    path: 'dev_de_barba',
                    children: [
                      { 
                        path: 'biografia', 
                        loadChildren: () => import('./dev_de_barba/biografia/biografia.module').then(m => m.BiografiaModule) 
                      },
                      { 
                        path: 'formacao', 
                        loadChildren: () => import('./dev_de_barba/formacao/formacao.module').then(m => m.FormacaoModule) 
                      },
                    ]
                  },
                ]
              },
            
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
