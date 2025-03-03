import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                
                items: [
                    { label: 'Quem Sou', icon: 'pi pi-fw pi-id-card', routerLink: ['/dev_de_barba/biografia'] },
                    { label: 'Formação', icon: 'pi pi-fw pi-check-square', routerLink: ['/dev_de_barba/formacao'] },
                    { label: 'Habilidades', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] }
                ],
               
            }, 

          
        ];
    }
}
