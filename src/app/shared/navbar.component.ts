import {Component} from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
                <div class="top-bar">
                    <div ><a [routerLink]="['']" class="top-bar-title">GigaByte Gaming Company</a></div>
                    <div>
                        <ul class="menu">
                            <li class="nav-menu"><a [routerLink]="['/admin']">Admin Area</a></li>
                        </ul>
                    </div>
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})

export class NavComponent {}