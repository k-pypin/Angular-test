import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component'
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path:'', component: StartPageComponent },
  { path: 'edit', component:EditPageComponent }
  

]

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    EditPageComponent,
    SearchPipe
   
    
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
