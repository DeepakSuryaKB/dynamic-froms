import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextInputComponent } from './form-builder/from-comp/text-input/text-input.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RadioInputComponent } from './form-builder/from-comp/radio-input/radio-input.component';
import { CheckboxInputComponent } from './form-builder/from-comp/checkbox-input/checkbox-input.component';
import { TextAreaInputComponent } from './form-builder/from-comp/text-area-input/text-area-input.component';
import {MatButtonModule} from '@angular/material/button';// <--- import FormsModule
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    TextInputComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    TextAreaInputComponent
  ],
  imports: [
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [],
  entryComponents:[TextInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
