# Notesa-App

![GitHub repo size](https://img.shields.io/github/repo-size/algol007/notesa-app-client)
![GitHub contributors](https://img.shields.io/github/contributors/algol007/notesa-app-client)
![GitHub stars](https://img.shields.io/github/stars/algol007/notesa-app-client?style=social)
![GitHub forks](https://img.shields.io/github/forks/algol007/notesa-app-client?style=social)

<p align="center">
  <img height="100" src="https://vuejs.org/images/logo.png">
</p>
<p align="center">
  Built with Vue Js.
</p>

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Create Environment Variable](#create-environment-variable)
- [Contributing](#contributing)
- [Related Project](#related-project-backend)

## Features

- Users who are not logged in can only view the book
- Users must sign up and sign in to make a transaction and see their profiles
- And others

## Requirements

- Vue.js - Download and Install [Vue.js](https://vuejs.org/).

## Screenshots

<p align='center'>
  <image width="250" src='https://github.com/algol007/notesa-app-client/blob/master/src/assets/screenshoot/notesa1.png' />
  <image width="250" src='https://github.com/algol007/notesa-app-client/blob/master/src/assets/screenshoot/notesa2.png' />
  <image width="250" src='https://github.com/algol007/notesa-app-client/blob/master/src/assets/screenshoot/notesa3.png' />
</p>

## Usage for development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/algol007/notesa-app-client`
3. Open the folder and type `npm install` for install dependencies
4. Create Environment Variable [here](#create-environment-variable)
5. Before run this, you must run [backend first](#related-project-backend)
6. Type `npm run serve` for run this app.

## Create Environment Variable

```
$ touch .env.local
$ nano .env.local
```

```
VUE_APP_BASE_URL = YOUR_BASE_URL
VUE_APP_URL = YOUR_URL
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request
