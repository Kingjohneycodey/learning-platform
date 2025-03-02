/livestream
│── /public
│── /src
│   │── /actions
│   │   ├── streamActions.js
│   │   ├── chatActions.js
│   │── /reducers
│   │   ├── streamReducer.js
│   │   ├── chatReducer.js
│   │── /components
│   │   ├── Livestream.js
│   │   ├── Chat.js
│   │── /screens
│   │   ├── StreamScreen.js
│   │── /styles
│   │   ├── livestream.css
│   │   ├── chat.css
│   │── store.js
│   │── App.js
│── server.js (Backend for WebSockets)
│── package.json


# Setting Up Agora Environment Variables

## Step 1: Create an Agora Account
1. Go to [Agora Console](https://console.agora.io/).
2. Sign up or log in to your account.

## Step 2: Create a New Project

## Step 3: Retrieve Required Parameters
After creating the project, you will find these details:
- App ID: Required to initialize Agora services.
- Temporary Token (for testing purposes only, expires in 24 hours).
- Channel Name: Choose any name when starting a livestream.

## Step 4: Set Up Environment Variables
In your project root, create a `.env` file and add the following:

```
REACT_APP_AGORA_APP_ID=your_app_id_here
REACT_APP_CHANNEL_NAME=your_channel_name_here
REACT_APP_AGORA_TEMP_TOKEN=your_temporary_token_here
```
## Step 5: Access the Variables in Code
In your React app, use:

```javascript
const APP_ID = process.env.REACT_APP_AGORA_APP_ID;
const CHANNEL_NAME = process.env.REACT_APP_CHANNEL_NAME;
const TOKEN = process.env.REACT_APP_AGORA_TEMP_TOKEN;
```