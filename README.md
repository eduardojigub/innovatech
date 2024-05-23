<h1 align="center">Innovatech - C2S Challenge</h1>
This repository contains the code for the Innovatech App, developed in React Native with TypeScript using the Expo Managed Workflow for the challenge proprosed from C2S company. The app allows users to efficiently filter, search and fetch users from randomuser API. 
It utilizes local storage with the Async Storage library for storing data locally on the device.

## Screenshots

## Features

* Filter a user per name
* Filter a user per gender
* Infinite fetch and scroll on end reached of the flatlist. 
* Fetch user from randomuserAPI

## Prerequisites

Before you start, ensure that the following software is installed on your development environment:

* Node.js
* Expo CLI
* Yarn (or npm, as an alternative)

## Project Setup

Clone this repository to your local machine:

```bash
git clone git@github.com:eduardojigub/innovatech.git
```

Navigate to the project directory:

```bash
cd innovatech
```

Install project dependencies:

```bash
yarn install
```

or

```bash
npm install
```

Start the Expo:

```bash
npx expo start
```

OR - ||

You can also download the apk and install straight to your android phone using this like below:
https://drive.google.com/file/d/13lHTpDjjCgGAI7mdyQkOIJoTet7pbS-F/view?usp=drive_link

## Project Structure

The project follows this directory structure:
```bash
src/
├── assets/
│ ├── images/
│ └── fonts/
├── components/
│ ├── Button.tsx
│ └── Header.tsx
├── routes/
│ └── AppNavigator.tsx
├── screens/
│ ├── HomeScreen.tsx
│ ├── MealDetailsScreen.tsx
│ ├── CreateMealScreen.tsx
│ └── EditMealScreen.tsx
├── storage/
│ └── AsyncStorageManager.ts
├── theme/
│ ├── colors.ts
│ └── fonts.ts
└── utils/
├── helpers.ts
└── constants.ts
```


## Libraries and Tools Used

* React Native
* TypeScript
* Expo Managed Workflow
* Async Storage
* ESLint (Airbnb style guide)
* Path Mapping with Babel and TypeScript
* Use Context for state management. 

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or improvements for the app, feel free to open an issue or submit a pull request.

Please adhere to the best practices and follow the ESLint and Prettier guidelines to maintain code consistency.

Contact
If you have any questions or need to contact me, you can reach me via email at eduardobrunoit@gmail.com

Thank you for visiting this repository! I hope this app proves to be useful for you.
