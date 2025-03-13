This is a React Native application that fetches and displays random user profiles. Users can navigate through the profiles using "Prev" and "Next" buttons. The application features a gradient background and smooth transition effects when navigating between profiles.

Features
Fetches random user profiles from an API.
Displays user profiles with a fade-in and fade-out transition effect.
Allows navigation through profiles using "Prev" and "Next" buttons.
Disables navigation buttons when at the first or last profile.
Gradient background for the main view.
Installation
Follow these steps to set up and run the application locally:

Clone the repository:

sh
Copy
git clone https://github.com/Chandrasekhar0583/User_details
Install dependencies:

sh
Copy
npm install
Install Expo CLI (if you haven't already):

sh
Copy
npm install -g expo-cli
Running the Application Locally
Start the development server:

sh
Copy
expo start
Scan the QR code with the Expo Go app:

Open the Expo Go app on your mobile device.
Scan the QR code shown in the terminal or browser to run the app.
Project Structure
bash
Copy
.
├── App.js             # Entry point of the application
├── Profile.js         # Component to display individual user profiles
├── mainpage.js        # Main component that fetches and displays user profiles with navigation buttons
├── package.json       # Contains project dependencies and configurations
└── README.md          # This file
File Descriptions:
App.js: The entry point of the application that ties everything together.
Profile.js: A component responsible for displaying individual user profiles.
mainpage.js: The main component that fetches and displays user profiles, along with navigation buttons to cycle through them.
Additional Notes
Ensure you have a stable internet connection, as the application fetches data from an external API.
The application uses the axios library to make HTTP requests.
The react-native-paper library is used for UI components like buttons.
License
This project is licensed under the MIT License.