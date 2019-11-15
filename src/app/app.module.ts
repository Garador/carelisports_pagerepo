import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/pages/index/index.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { CarouselComponent } from './components/ui/carousel/carousel.component';
import { CarouselSmallComponent } from './components/ui/carousel-small/carousel-small.component';
import { ParallaxComponent } from './components/ui/parallax/parallax.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { SportComponent } from './components/pages/sport/sport/sport.component';
import { ParallaxHeaderComponent } from './components/ui/parallax-header/parallax-header.component';
import { EventListPreviewComponent } from './components/ui/event-list-preview/event-list-preview.component';
import { EventAvailabilityComponent } from './components/pages/event-availability/event-availability.component';
import { DisneyExperienceComponent } from './components/pages/disney-experience/disney-experience.component';
import { TicketsComponent } from './components/pages/tickets/tickets.component';
import { SomethingMagicalComponent } from './components/ui/something-magical/something-magical.component';
import { JotformComponent } from './components/ui/jotform/jotform.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    CarouselComponent,
    CarouselSmallComponent,
    ParallaxComponent,
    FooterComponent,
    SportComponent,
    ParallaxHeaderComponent,
    EventListPreviewComponent,
    EventAvailabilityComponent,
    DisneyExperienceComponent,
    TicketsComponent,
    SomethingMagicalComponent,
    JotformComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
