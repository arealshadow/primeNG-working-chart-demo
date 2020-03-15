import { Component, OnInit } from "@angular/core";
// import { ButtonModule } from "primeng/button";

import { MenuItem } from "primeng/api";

@Component({
  selector: "app-prime-menu",
  templateUrl: "./prime-menu.component.html",
  styleUrls: ["./prime-menu.component.css"]
})
export class PrimeMenuComponent implements OnInit {
  items: MenuItem[];
  data: any;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: "New", icon: "pi pi-fw pi-plus" },
      { label: "Open", icon: "pi pi-fw pi-download" },
      { label: "Undo", icon: "pi pi-fw pi-refresh" }
    ];
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#42A5F5",
          borderColor: "#1E88E5",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          backgroundColor: "#9CCC65",
          borderColor: "#7CB342",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }
}
