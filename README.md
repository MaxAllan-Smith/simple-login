# `simple-login` Application Setup

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [MongoDB Setup](#mongodb-setup)
3. [Running the Application](#running-the-application)

## Prerequisites
Before you begin, ensure you have Node.js and npm installed on your machine. If not, you can download and install them from [Node.js official website](https://nodejs.org/).

## MongoDB Setup

### 1. Installation

#### Windows:
- Download the MongoDB installer from the [MongoDB official website](https://www.mongodb.com/try/download/community).
- Launch the installer and follow the on-screen instructions.

#### macOS:
You can use Homebrew:
```bash
brew tap mongodb/brew
brew install mongodb-community@5.0
```

#### Linux:
Depending on your distribution, you may use the package manager specific to your distribution. Refer to the [official MongoDB installation guide for Linux](https://docs.mongodb.com/manual/administration/install-on-linux/).

### 2. Running MongoDB
After installation, start the MongoDB server.

#### Windows:
You can start MongoDB using the following command:
```bash
"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="C:\path_to_data_directory"
```

#### macOS & Linux:
```bash
mongod --dbpath /path_to_data_directory
```

> Note: Replace `/path_to_data_directory` with the path to your data directory.

### 3. Verify Installation
To verify that MongoDB is running, you can use the MongoDB shell by typing:
```bash
mongo
```

## Running the Application

### 1. Clone the Repository (if not done already)
```bash
git clone git@github.com:MaxAllan-Smith/simple-login.git
cd simple-login
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application

#### Development Environment:
To run the application in a development environment without creating the `index.js` file in the `dist` folder:
```bash
npm run dev
```

#### Build the Application:
To compile the application in TypeScript and create a `dist` folder with the compiled `index.js` file:
```bash
npm run build
```

#### Serve the Application:
To run the `index.js` file after it has been created by the build step:
```bash
npm run serve
```
