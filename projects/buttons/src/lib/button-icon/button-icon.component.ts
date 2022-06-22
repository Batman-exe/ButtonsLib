import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {

  @Input() icon : string;
  @Input() inOthers : boolean;
  constructor() {
    this.icon = "rightarrow";
    this.inOthers = false;
   }

  ngOnInit(): void {
    let validIcons = ["download", "upload", "rightarrow", "leftarrow","search", "save", "eye", "create", "briefcase", "add", "remove", "yes", "no"];
    this.icon = this.icon.toLowerCase();
    if(!validIcons.includes(this.icon))
      console.error("icon value it's not a valid value.");
  }

}
