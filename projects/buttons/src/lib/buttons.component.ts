import { Component, Input, OnInit } from '@angular/core';
import { __await } from 'tslib';

@Component({
  selector: 'lib-buttons',
  templateUrl: 'buttons.component.html',
  styleUrls: ['buttons.component.css'
  ]
})
export class ButtonsComponent implements OnInit {

  @Input() group: number;
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() icon: string;
  @Input() iconPos: string;
  @Input() customIcon: string;
  @Input() size: string;
  selectedGroup: string;
  otherIcons = ["add", "remove", "yes", "no"];

  constructor() {
    this.group = 1;
    this.text = "";
    this.disabled = false;
    this.icon = "";
    this.iconPos = "";
    this.customIcon = "";
    this.size = "large";
    this.selectedGroup = "primary";
  }

  ngOnInit(): void {
    this.icon = this.icon.toLowerCase();
    this.iconPos = this.iconPos.toLowerCase();
    this.size = this.size.toLowerCase();
    this.group != 1 ? this.setSelectedGroup(this.group) : 0;

    if(this.customIcon!="")
      this.icon = "";

    if(this.group >=1 && this.group<=3){
      if(this.group >=1 && this.group<=2){
        if (this.size != "large" && this.size != "medium" && this.size != "small")
          console.error("The available values for size are: Large, Medium, Small");
        
          if (this.icon != "" && this.iconPos == "")
            console.error("The available values for iconPos are: Left, Right");  
      }
      if (this.text == "" ) 
        console.error("Text value in button from groups 1, 2, 3 mustn't be empty");

    }
    else if (this.group == 4) {
      if (this.disabled)
        console.error("The other buttons can't be disabled");
      
      if (!this.otherIcons.includes(this.icon))
        console.error("The available values for icon in other buttons are: Add, Remove, Yes, No");
    }
  }

  private setSelectedGroup(nGroup: number) {
    if (nGroup == 1)
      this.selectedGroup = "primary";

    else if (nGroup == 2)
      this.selectedGroup = "secondary";

    else if (nGroup == 3)
      this.selectedGroup = "tertiary";

    else if (nGroup == 4) 
      this.selectedGroup = "other";
    
    else
      console.error("Group value in buttons must be between 1 and 4");
  }

  onClick() {
    console.log("click");
    console.log(this.icon)
  }

}
