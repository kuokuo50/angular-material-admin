import { Component, OnInit } from '@angular/core';
// Service
import { Feature, FeatureService } from '../../feature.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showMenu = false;
  features: Feature[] = [];
  errorMessage = '';

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.featureService.getFeatures().subscribe({
      next: features => {
        this.features = features;
      },
      error: err => this.errorMessage = err
    });
  }
}
