import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';




@NgModule({
  declarations: [],
  exports:[MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatCardModule,MatTooltipModule],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
