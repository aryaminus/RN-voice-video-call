# RNVideoVoiceCall

**RNVideoVoiceCall** is the 4th session build for showing the implementation of Signin and Signup screen to login or create user for voice or video calling peer to peer or conference in modern apps.

[![RNVideoVoiceCall demo]()](https://youtu.be/-sweQ2HzjrA)

**Note:**

1. Arch Linux with VS-Code, thus support focused on Android App
2. Extensions: <a href="https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native" target="_blank">React Native Tools</a> , <a href="https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux" target="_blank">React-Native Snippets</a> , <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier</a>
3. Device run instead of SDK-build using <a href="https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm" target="_blank">Vysor</a>

## Installation

Clone the source locally:
```
$ git clone https://github.com/aryaminus/RN-voice-video-call
$ cd RN-voice-video-call
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
Follow Code.txt and <a href="https://youtu.be/-sweQ2HzjrA" target="_blank">Youtube</a>

## Packages:
<a href="https://reactnavigation.org/docs/intro/" target="_blank">react-navigation</a>

### Installation
Follow Code.txt and Working.png

**Major Properties:**
 - To hide navabr in certain component & back option in final screen
 - To using different properties of TextInput and moving cursor from 1 field to other with returnkeytype and hiding password using secureTextEntry
 - To store the input fields locally using Asyncstorage (server integration in next sessions)

![Working demo](https://i.imgur.com/UuMpvwT.png)

## Contributing

1. Fork it (<https://github.com/aryaminus/RN-voice-video-call/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


