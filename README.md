Sample app to verify players epub and ecml

## steps to generate a build
----------------------------
git clone the repo - https://github.com/vpPavithra/sampleApp.git

npm i
npm run ionic-build

## Environment
--------------
node - 16.20.2
java 17.0.5
capacitor - 5.5.1

 
** Reason for epub failure **
-----------------------------
 Loads a epub player, might break other cases due to depency plugin
 cordova-plugin-code-push is missing dependencies:
  - cordova-plugin-file (>=6.0.1)
  - cordova-plugin-advanced-http (>=2.2.0)
  cordova-plugin-media is missing dependencies:
  - cordova-plugin-file (^8.0.0)
  cordova-plugin-zip is missing dependencies:
  - cordova-plugin-file (>=2.0.0)


When we try to add below cordova plugin we face issue loading epub player
Epub fails to load with below plugins 
  "cordova-plugin-advanced-http": "2.5.1",
  "cordova-plugin-file": "8.0.0",
  "cordova-plugin-file-transfer": "git+https://github.com/shikshalokam/cordova-plugin-file-transfer.git",

Error on build app, without cordova-plugin-advanced-http dependency
  "sb-cordova-plugin-sync": "git+https://github.com/project-sunbird/sb-cordova-plugin-sync.git#release-4.9.0", -> http , throws build error
     