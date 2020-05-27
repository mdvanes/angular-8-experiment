import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navlink",
  templateUrl: "./navlink.component.html",
  styleUrls: ["./navlink.component.css"],
})
export class NavlinkComponent implements OnInit {
  @Input() name: string;
  public currentRoute;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.currentRoute = url;
    });
  }
}
