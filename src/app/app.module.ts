import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { AppComponent } from "./app.component";
import { PrimeMenuComponent } from "./prime-menu/prime-menu.component";
import { MenubarModule } from "primeng/menubar";
import { ChartModule } from "primeng/chart";

@NgModule({
  declarations: [AppComponent, PrimeMenuComponent],
  imports: [BrowserModule, ButtonModule, MenubarModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
