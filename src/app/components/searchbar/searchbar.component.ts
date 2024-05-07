import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {}
