#### Manual install

1. Make sure you have "React Native" project created with `react-native init`
2. `cd` into a project directory where `package.json` file is located.
3. Run `npm install react-native-voximplant@latest --save`
4. Open up `android/app/main/java/[...]/MainApplication.java`
    - Add `import com.voximplant.reactnative.VoxImplantReactPackage;` to the imports at the top of the file
    - Add `new VoxImplantReactPackage()` to the list returned by the `getPackages()` method

5. Append the following lines to `android/settings.gradle`:

    ```
    include ':react-native-voximplant'
    project(':react-native-voximplant').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-voximplant/android')
    ```

6. Insert the following lines inside the dependencies block in `android/app/build.gradle`:

    ```
    compile project(':react-native-voximplant')
    ```    

7. And finally, in android/src/main/AndroidManifest.xml add user permissions

    ```
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.INTERNET" />
    ```

#### Automatic install via [`rnpm`](https://github.com/rnpm/rnpm)

`$ rnpm link`

All events are described at [http://voximplant.com/docs/references/mobilesdk/ios/Protocols/VoxImplantDelegate.html](http://voximplant.com/docs/references/mobilesdk/ios/Protocols/VoxImplantDelegate.html) 