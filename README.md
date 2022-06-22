# ButtonsLib

Download and import in your project root using the command `npm install <file-route>`  
Add to imports in app.module.ts or corresponding module.  
  
Source code can be found in [projects/buttons/src/lib](https://github.com/Batman-exe/ButtonsLib/tree/master/projects/buttons/src/lib)
  
  
## Use
  
You can call the library in this way: 
 
![use of lib](/src/assets/use.png?raw=true "")
 
The lib-buttons container take full width of its container, therefore the div tag with the property fit content is neccesary to ensure proper operation of `(click)` 
 
##Inputs

##### group 
`number` used to select the buttons group, must be between `1` and `4` (4 represents the group others from figma).    

##### text
`string` used to enter the button text (text not available in group 4). 
  
##### disabled
`boolean` used to disable the button, true indicates that the button is disabled, false by default. (not available in group 4)

##### icon
`string` used to select the icon to use in the button, if empty it won't display an icon. 
These are the allowed values (if not specified just available in groups 1 to 3): 
<ul>
  <li>download</li>
  <li>upload</li>
  <li>rightarrow</li>
  <li>leftarrow</li>
  <li>search</li>
  <li>save</li>
  <li>eye</li>
  <li>create</li>
  <li>briefcase</li>
  <li>add (can be used in all groups)</li>
  <li>remove (just available in group 4)</li>
  <li>yes (just available in group 4)</li>
  <li>no (just available in group 4)</li>
</ul>

##### iconPos
`string` used to indicate the position of the icon according to text, possible values are `left`or `right` (availeible in groups 1 and 2). 

##### customIcon
`string` used to insert a custom image as icon, it is recommended to use png images, the value of customIcon must be the path to the image. 

##### size
`string` used to select the size of the button, values allowed `large`, `medium`, `small`. 
 
  
   
    
    
Samples can be found in [src/app/app.component.html](https://github.com/Batman-exe/ButtonsLib/blob/master/src/app/app.component.html)
