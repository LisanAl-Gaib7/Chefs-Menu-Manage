Chefs-Menu-Manage

  Chef's Menu Manager

Welcome to the Chef's Menu Manager app. This is a simple Android app that helps a chef create and manage their restaurant menu. The chef can add menu items and view all the items that have been added.

  What Does the App Do?

The app works like a digital menu notebook. It allows the chef to:

Add menu items: The chef can enter the name of the food, a description, the type of course and the price.
Choose a course: The chef can choose if the food is a Starter, Main, Dessert or Drink from the dropdown menu.
View the menu: All the menu items that have been added will show in a list underneath the form.
Count the menu items:** The app automatically shows the total number of items that are currently on the menu.

What You Need

Before running the app, make sure these things are installed on your computer:

    Node.js – Use the LTS version from the Node.js website.
    VS Code – This is the code editor I used for the project.
    Expo Go – This needs to be installed on your Android phone so you can test the app.

   How to Run the App

Step 1: Extract the Project

If the project was sent as a ZIP file, right-click the file and select Extract All.

After extracting it, you should have the ChefMenuApp project folder.

Step 2: Open the Project in the Terminal

Open Command Prompt or the terminal in VS Code.

Go to the folder where the project is saved. For example:

text
cd Desktop\ChefMenuApp


If your folder is saved somewhere else, change the path to where your project is located.

 Step 3: Install the Dependencies

Before running the app for the first time, you need to install all the required project files.

Type:

text
npm install


Wait for it to finish installing.

 Step 4: Start the App

Once everything has been installed, start the Expo development server by typing:

  text
npx expo start


This will start the app and display a QR code.

How to Open the App on Your Phone

To test the app on an Android phone:

1. Make sure your computer and phone are connected to the same Wi-Fi.
2. Open the Expo Go app on your phone.
3. Select Scan QR Code.
4. Scan the QR code that appears after running `npx expo start`.
5. Wait for the app to load on your phone.
6. Once it loads, you can start adding menu items and testing the app.
