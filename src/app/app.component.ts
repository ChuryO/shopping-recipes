import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'project';
    loadedFeature = 'recipe';

    onNavigate(event: string) {
        this.loadedFeature = event;
    }
}
