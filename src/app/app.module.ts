import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
// Added by generator with `ng g c ../my-project-name/my-foo --module=app`
import { MyFooComponent } from '../my-project-name/my-foo/my-foo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from '../my-project-name/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FooWrapperComponent } from '../my-project-name/foo-wrapper/foo-wrapper.component';
import { ReactiveFormComponent } from '../my-project-name/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    MyFooComponent,
    DashboardComponent,
    NotificationComponent,
    HeroSearchComponent,
    FooWrapperComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
