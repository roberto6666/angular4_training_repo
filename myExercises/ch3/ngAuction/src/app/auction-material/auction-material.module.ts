import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
    MatInputModule, MatSelectModule, MatOptionModule, MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
        MatInputModule, MatSelectModule, MatOptionModule, MatCardModule,
        BrowserAnimationsModule
    ]
})
export class AuctionMaterialModule { }
