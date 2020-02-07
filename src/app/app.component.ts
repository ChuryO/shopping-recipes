import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: Object = 'project';
    loadedFeature: Object = 'recipe';

    onNavigate(event: string): void {
        this.loadedFeature = event;
    }
}
