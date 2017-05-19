import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifeInABoxComponent } from './life-in-a-box/life-in-a-box.component';
import { BoxRowComponent } from './box-row/box-row.component';
import { BoxComponent } from './box/box.component';
import { ViewSelectorComponent } from './view-selector/view-selector.component';

const Router = RouterModule.forRoot([{path: '', component: HomeComponent}], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifeInABoxComponent,
    BoxRowComponent,
    BoxComponent,
    ViewSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	Router,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
