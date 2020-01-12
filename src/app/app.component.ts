import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface ContactList {
  name: string;
  email: string;
  phone: string;
}

var ELEMENT_DATA: ContactList[] = [
  { name: "Alice", email: "alice@google.com", phone: "1111-1111" },
  { name: "Lilian", email: "lilian@amazon.com", phone: "2222-2222" },
  { name: "Ada", email: "ada@microsoft.com", phone: "3333-3333" },
  { name: "Jacob", email: "jacob@apple.com", phone: "4444-4444" },
  { name: "Mark", email: "mark@facebook.com", phone: "5555-5555" }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayedColumns: string[] = ["name", "email", "phone"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public name = "";
  public email = "";
  public phone = "";

  addContact() {
    var newContact: ContactList = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };
    ELEMENT_DATA.push(newContact);
    this.dataSource._updateChangeSubscription();

    this.name = "";
    this.email = "";
    this.phone = "";
  }
}
