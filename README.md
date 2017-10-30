# RNVideoVoiceCall

**RNVideoVoiceCall** is the 4th session build for showing the implementation of Signin and Signup screen to login or create user for voice call along with video call for both peer to peer or conference using Voximplant for react native

In this branch, we will be focusing on The Backend part using fetching of response and taking the json elements where we will setup Voximplant to login with the main user account, create a child user or login with the already assigned user , assign the user to certain new or previous application and enter the view.

**Note:**

1. The response's JSON maybe required to be stringified, so make usre you use it when formatting
2. As the react-native-voximplant package sends responses as the state of the account is changed, we use DeviceEventEmitter for listening and changing certain variables

Next, we store the login values or the new user create values locally using Async Storage and then use it next time the user opens the app so that s/he does not have to login each time the app is opened.

We will be using HTTPAPI of Voximplant.

[![RNVideoVoiceCall demo](https://i.imgur.com/mnsdKR6.gif)](https://www.youtube.com/watch?v=WLPueAdj52k&list=PLM5nyCrpk9vaYCZRjGg1TEU4cQZMYZqvy&index=1)

**Note:**

1. Arch Linux with VS-Code, thus support focused on Android App
2. Extensions: <a href="https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native" target="_blank">React Native Tools</a> , <a href="https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux" target="_blank">React-Native Snippets</a> , <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier</a>
3. Device run instead of SDK-build using <a href="https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm" target="_blank">Vysor</a>
4. Remove/Add Comment of the required system in Register.js : Create new Application and fetch application_id and assign user to it or assign user to all applications. **Default** is assign all where you may once create and fetch app_id and then put the app_id in place of all. Refer to Video Session

## Installation

Clone the source locally:
```
$ git clone https://github.com/aryaminus/RN-voice-video-call/
$ cd RN-voice-video-call
$ git checkout HttpApiSetup
```

**Start the application in development mode**
```
npm install
react-native link
react-native run android
```
or for VS-Code:
```
npm install
react-native link
```
then press F1 or Fn+F1 and React Native:Run Android on Device 

**Else**
Follow Code.txt and <a href="https://www.youtube.com/watch?v=WLPueAdj52k&list=PLM5nyCrpk9vaYCZRjGg1TEU4cQZMYZqvy&index=1" target="_blank">Youtube</a>

## Packages:
1. <a href="https://reactnavigation.org/docs/intro/" target="_blank">react-navigation</a>
2. <a href="https://github.com/voximplant/react-native-voximplant" target="_blank">react-native-voximplant</a>
3. <a href="https://github.com/joinspontaneous/react-native-loading-spinner-overlay" target="_blank">react-native-loading-spinner-overlay</a>

## Additional Links:
1. <a href="http://voximplant.com/docs/references/mobilesdk/ios/Protocols/VoxImplantDelegate.html" target="_blank">VoxImplantDelegate</a>
2. <a href="https://voximplant.com/docs/references/httpapi/" target="_blank">HTTP API</a>
3. <a href="https://manage.voximplant.com" target="_blank">Control Panel</a>
4. <a href="https://github.com/voximplant/react-native-demo" target="_blank">Voximplant official demo app</a>


### Installation
Follow Code.txt and Manual.md and Working.png

![Working demo](https://i.imgur.com/Xmp5bJi.png)

## Contributing

1. Fork it (<https://github.com/aryaminus/RN-voice-video-call/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


