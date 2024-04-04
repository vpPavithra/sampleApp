const fs = require('fs');
const path = require('path');

if (process.argv[2] === 'android') {
  const fix = `namespace "org.sunbird.app"`;
	const androidbuild = 'android/capacitor-cordova-android-plugins/build.gradle';
  const codeToPatch = 'namespace "capacitor.cordova.android.plugins"';
// const patch =codeToPatch+ fix +"// patchTag";
	const androidManifest = 'android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml';
	const googleServicesBase = 'google-services.json';
	const googleServicesCap = ['android/app/google-services.json', 'android/capacitor-cordova-android-plugins/google-services.json'];
  // const buildExtrasGradle = 'buildConfig/build-extras.gradle';
  // const buildExtrasCap = ['android/app/build-extras.gradle', 'android/capacitor-cordova-android-plugins/build-extras.gradle'];
  // const buildData = 'buildConfig/data';
  // const buildDataCap = ['android/app', 'android/capacitor-cordova-android-plugins'];

  const androidMainActivity = 'MainActivity.java';
  const androidMainActivityCap = 'android/app/src/main/java/org/sunbird/app/MainActivity.java';

    // package name fix
	fs.readFile(androidManifest, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		data = data.replace('capacitor.cordova.android.plugins', 'org.sunbird.app'); // CHANGE APPLICATION ID
		fs.writeFile(androidManifest, data, (err) => {
			if (err) {
				console.error("********* err", err);
			}
		});
	});

    // google-service fix 
    googleServicesCap.forEach(capService => {
        fs.copyFile(googleServicesBase, capService, (err) => {
            if (err) {
                console.error(err);
            }
        });
    })

    // extras-gradle fix 
    // buildExtrasCap.forEach(extrasCap => {
    //     fs.copyFile(buildExtrasGradle, extrasCap, (err) => {
    //         if (err) {
    //             console.error(err);
    //         }
    //     });
    // })

    // extras-gradle fix 
    fs.copyFile(androidMainActivity, androidMainActivityCap, (err) => {
      if (err) {
        console.error(err);
      }
    });

    // build gardle fix
    fs.readFile(androidbuild, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		data = data.replace(codeToPatch, fix); // CHANGE APPLICATION ID
      fs.writeFile(androidbuild, data, (err) => {
        if (err) {
          console.error("********* err", err);
        }
      });
    });

    // copy bundled data
    // buildDataCap.forEach(data => {
    //   copyFolderRecursiveSync(buildData, data);
    // })
    function copyFileSync(source, target) {
      let targetFile = target;
      //if target is a directory a new file with the same name will be created
      if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
          targetFile = path.join(target, path.basename(source));
        }
      }
      fs.writeFileSync(targetFile, fs.readFileSync(source));
    }
    
    function copyFolderRecursiveSync(source, target) {
      let files = [];
      //check if folder needs to be created or integrated
      let targetFolder = path.join(target, path.basename(source));
      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
      }
    
      //copy
      if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
          let curSource = path.join(source, file);
          if (fs.lstatSync(curSource).isDirectory()) {
            copyFolderRecursiveSync(curSource, targetFolder);
          } else {
            copyFileSync(curSource, targetFolder);
          }
        });
      }
    }
}
