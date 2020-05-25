import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  public currentRoute;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.currentRoute = url;
    });
  }
}
