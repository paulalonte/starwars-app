import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';

import { HttpClientModule } from '@angular/common/http';
import { CharactersEffects } from './effects/characters.effects';
import { HeaderComponent } from './shared/header/header.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { HomeworldComponent } from './characters/homeworld/homeworld.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CharactersComponent,
    HomeComponent,
    HeaderComponent,
    CharacterDetailComponent,
    HomeworldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([CharactersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
