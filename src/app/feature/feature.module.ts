import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Module
import { FeatureRoutingModule } from './feature-routing.module';
// Component
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';


@NgModule({
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ]
})
export class FeatureModule { }
