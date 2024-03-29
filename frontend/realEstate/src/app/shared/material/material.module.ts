import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [],
  exports:[MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatCardModule,MatTooltipModule,MatTabsModule],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
