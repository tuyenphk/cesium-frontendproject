# CESIUM FRONT-END PROJECT

## How to run the project 

This project is built by React so make sure you must have Nodejs installed on your machine. You can follow the instruction of this link to download it, https://nodejs.org/en/

Then you can run the project by the guide below:

1. Clone this project in your machine: <strong>git clone https://github.com/tuyenphk/cesium-frontendproject.git</strong>
2. Install all dependencies in package.json: <strong>npm install</strong>
3. Running the project: <strong>npm start</strong>

## Link

This project is deployed at: https://tpham-frontendproject.netlify.app/

## Features

I have completed the features below:
- Display the current list of materials by storing on the js file
- Allow the user to create, delete and edit the material inputs
- Select a material's color through color picker
- Calculate and display the total value of material listed

## Tech Stack

Frontend: React (Hook), Material-UI, Date Picker, React Color, CSS style

## About the project

I have completed what is shown up in this repository around 3 hours. Due to the time alloted, I don't have enough time for the internal documentation and unit testing. They are not difficult so if I have more time, I can finish all of it.

<strong>Test Project:</strong>

Assume the left box is the material list and the right box is the material form, the user can follow my guide below to test the project's functions:
- Fill out the name, volume number, cost value and choose any color on the color picker option, it will automatically add this material into the material list on the left side or using the "Add" button.
- When the user wants to edit the material, you can hover onto the name display on the material list. It will display all the information already added on the material form with the "Save" and "Cancel" button. Then you may make change and click on the "Save" button to update, otherwise "Cancel" button to decline.
- When the user wants to delete the material, you have to hover onto the name display on the material list. It will allow you to edit on the material form as description above. You also have another option to click on "Delete" button above those boxes to delete it out of the material list.
- The cost of current material and the total cost of material list are calculated and displayed.

<strong>Bugs:</strong>

There are some errors I have still fixed but don't have enough time:
- The user can make change on the delivery date but it can not be saved and updated.
- I have designed the material list and the material form are separated components and passed those to the parent component (App.js). When filling the material form, it will automatically add new material to the material list and the user can also use "Add" button with the same functionality. It is because I use trigger child component (AddMaterial.js) to parent component (App.js). I try to fix to add new material by only "Add" button.
- When the user updates only name, volume, cost or date, the color of this material disappeared. Otherwise if the user also updates the color, everything displays fine on the material list.

<strong>Questions:</strong>

1. Based on your UX design, it does not show up how to edit material so I added 2 buttons, "Save" and "Cancel", when editing the material. I think it is easy for the user to manage materials. How do you think?
2. I may not confused on the picture 1 of your UX design for total cost, it's displayed $1000.00 when click on "Gravel material". However, the feature description mentions to calculate and display the total value of material listed. As my understanding, if the user click on whatever material, it will display the cost of this material otherwise display the total value of material listed. Is my understanding the same with yours?

<strong>Note:</strong> Thanks for giving me an apportunity to do this project. I am really enjoyed 3-hour working under the time pressure. If I have a chance to present this with you, it's aweasome. Please let me know if you have any other questions.  