![alt-text](screen-shots/Screen Shot 2020-02-02 at 3.08.24 PM.png)
![alt-text](https://github.com/JustinMonty20/Random-Password-Generator/blob/c887b01e320e526ebc223fb6e6bffe27014e9001/screen-shots/Screen Shot 2020-02-02 at 3.06.43 PM.png)

Random(ish) Password Generator.

When the user clicks on the generate password button in the middle of the screen which thanks to the 'click event handler' then the function i created is ran. 
Beginning with prompt and followed by a series of confirms displayed as popups. 

1st. the user is asked how long they would like their password to be. If it is not in between the specified range displayed in the popup then it will ask them to try again and press the button which then they will receive the same instructions and popups. 

2nd. a series of confirms asking the user what type of letters, numbers, and or special characters they would like in their new password.  

3rd. Depending on which ones they confirm or deny it will omit those characters from the future password we generate for them.  

4th. Whatever confirms they say ok to will then grab the arrays they chose and populate the once empty array. 

5th. There is a for loop runs through the once empty array. It runs through the arrays based on how long the user wanted their password to be from the very first prompt.  

Finally, the user's new (but not secure) password is displayed into the text area with the id of password by an event.  

Below is the link to the deployed site on github pages. 

https://justinmonty20.github.io/Random-Password-Generator/








