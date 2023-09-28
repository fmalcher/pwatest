import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwatest';

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.versionUpdates.pipe(filter(e => e.type === 'VERSION_READY')).subscribe(() => {
      if (confirm('Es ist eine neue Version der Seite verfügbar. Installieren?')) {
        window.location.reload();
      }
    });
  }
}
