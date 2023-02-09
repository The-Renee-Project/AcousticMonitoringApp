# AcousticMonitoringApp

## Prerequisite 
1. Allow USB debugging on the device 
## Directions to start the app 
1. Install [Nativescript](https://docs.nativescript.org/environment-setup.html#windows-android).

2. cd to the appication root directory "AudioMoth9" 

3. Run the following commands to install the required plug-ins: 
   ```
    tns plugin add nativescript-task-dispatcher
    tns plugin add nativescript-dna-deviceinfo
    ns plugin add nativescript-audio
    tns plugin add nativescript-geolocation
   ```
4. Run the following commands to install the app: 
    ```
    ns clean
    ns run android
   ```
## Access files (only works on some devices)
```
cd platform-tools 
adb shell
run-as org.nativescript.AudioMoth9 ls /data/user/0/org.nativescript.AudioMoth9/files 
```


## If gradle error appears when running app: 

1. create new app 
 ```
    ns create AudioMoth
```
2. Copy the code in the following files in 'AudioMoth9':
-  home-view-model.ts
-  home-page.ts
-  AndroidManifest.xml 

3. Copy the [tasks](https://github.com/juliale02/AcousticMonitoringApp/tree/main/AudioMoth9/src) folder into your 'src' directory 
4. Navigate to the app.gradle file and change minSDK version to 21
4. Install the same plug-ins as before 

## Improvements to be made 
- The start button is set to be disabled after it is clicked. Refreshing the app is required to start a new recording session, this is to avoid event collisions. We need to figure out how to avoid event collisions when "start" is clicked 
- Audio permissions are requested at the start of the first recording, so we need to figure out how to explicitly ask the user for permissions at the same time as the others
- Internal temperture sensor remains undetected (could be dependent on device)





   

