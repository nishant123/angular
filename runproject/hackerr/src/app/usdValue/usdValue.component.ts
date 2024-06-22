import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "usd-value",
  templateUrl: "./usdValue.component.html",
  styleUrls: ["./usdValue.component.scss"]
})
export class UsdValue implements OnInit {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string;
usdv:number;
  constructor() {
  }

  ngOnInit() {
  }
  changeusdval(arg) {
    
  }
}
