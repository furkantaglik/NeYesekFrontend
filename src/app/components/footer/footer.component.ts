import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
