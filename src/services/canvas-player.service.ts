import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as X2JS from 'x2js';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Events } from 'src/util/events';

declare global {
    interface Window {
        handleAction: (methodName, params) => void;
    }
}
@Injectable({
    providedIn: 'root'
})
export class CanvasPlayerService {
    profileData: any = {
        "uid": "be2012e9-7fda-4053-b2e5-c9ba81c9514b",
        "handle": "Guest1",
        "createdAt": 1717050668839,
        "medium": [],
        "board": [],
        "subject": [],
        "profileType": "teacher",
        "grade": [],
        "syllabus": [
            "ap_k-12_1"
        ],
        "source": "local",
        "gradeValue": "",
        "categories": "{\"fwCategory1\":[\"State (Andhra Pradesh)\"],\"fwCategory2\":[\"English\",\"Hindi\"],\"fwCategory3\":[\"Class 3\",\"Class 4\"],\"fwCategory4\":[]}"
    }
    constructor(
        private _http: HttpClient,
        private events: Events,
        private file: File,
    ) { }
    /**
     * This is the globally available method used by player to communicate with mobile
     */
    handleAction() {
        window.handleAction = (methodName: string, params = []) => {
            switch (methodName) {
                case 'getCurrentUser':
                  return Promise.resolve(this.profileData);
                    // return SunbirdSdk.instance.profileService.getActiveSessionProfile({
                    //     requiredFields: ProfileConstants.REQUIRED_FIELDS
                    // }).toPromise();
                case 'getAllUserProfile':
                  return Promise.resolve([
                    {
                        "uid": "be2012e9-7fda-4053-b2e5-c9ba81c9514b",
                        "handle": "Guest1",
                        "createdAt": 1717050668839,
                        "medium": [],
                        "board": [],
                        "subject": [],
                        "profileType": "teacher",
                        "grade": [],
                        "syllabus": [
                            "ap_k-12_1"
                        ],
                        "source": "local",
                        "gradeValue": "",
                        "categories": "{\"fwCategory1\":[\"State (Andhra Pradesh)\"],\"fwCategory2\":[\"English\",\"Hindi\"],\"fwCategory3\":[\"Class 3\",\"Class 4\"],\"fwCategory4\":[]}"
                    }
                ])
                    // return SunbirdSdk.instance.profileService.getAllProfiles(params[0]).toPromise();
                case 'setUser':
                  return Promise.resolve()
                    // return SunbirdSdk.instance.profileService.setActiveSessionForProfile(params[0]).toPromise();
                case 'getContent':
                  return Promise.resolve()
                    // return SunbirdSdk.instance.contentService.getContents(params[0]).toPromise();
                case 'getRelevantContent':
                    const request = JSON.parse(params[0]);
                    request['shouldConvertBasePath'] = true;
                    // return SunbirdSdk.instance.contentService.getRelevantContent(request).toPromise();
                case 'getRelatedContent':
                    console.log('getRelatedContent to be defined');
                    break;
                case 'getContentList':
                  return Promise.resolve()
                    // return SunbirdSdk.instance.contentService.getContents(params[0]).toPromise();
                case 'sendFeedback':
                  return Promise.resolve()
                    // return SunbirdSdk.instance.contentFeedbackService.sendFeedback(params[0]).toPromise();
                case 'languageSearch':
                    console.log('languageSearch to be defined');
                    break;
                case 'endGenieCanvas':
                    this.events.publish('endGenieCanvas', { showConfirmBox: false });
                    break;
                case 'showExitConfirmPopup':
                    this.events.publish('endGenieCanvas', { showConfirmBox: true });
                    break;
                case 'endContent':
                    console.log('endContent to be defined');
                    break;
                case 'launchContent':
                    console.log('launchContent to be defined');
                    break;
                case 'send':
                  return Promise.resolve()
                    // return SunbirdSdk.instance.telemetryService.saveTelemetry(params[0]).subscribe();
                case 'checkMaxLimit':
                    const content = params[0];
                    // return this.preferences.getString(PreferenceKey.CONTENT_CONTEXT).toPromise()
                    //     .then(async (context: string) => {
                    //         if (!context) {
                    //             return {
                    //                 isLastAttempt: false,
                    //                 limitExceeded: false,
                    //                 isCloseButtonClicked: false
                    //             };
                    //         }
                    //         const courseContext = JSON.parse(context);
                    //         let maxAttempt: MaxAttempt;
                    //         if (courseContext.courseId && courseContext.batchId && courseContext.leafNodeIds) {
                    //             const getContentStateRequest: GetContentStateRequest = {
                    //                 userId: courseContext.userId,
                    //                 courseId: courseContext.courseId,
                    //                 contentIds: courseContext.leafNodeIds,
                    //                 returnRefreshedContentStates: true,
                    //                 batchId: courseContext.batchId,
                    //                 fields: ['progress', 'score']
                    //             };

                    //             const contentStateResponse: ContentStateResponse = await SunbirdSdk.instance.courseService
                    //                 .getContentState(getContentStateRequest).toPromise();

                    //             const assessmentStatus = this.localCourseService.fetchAssessmentStatus(contentStateResponse, content);

                    //             maxAttempt = await this.commonUtilService.handleAssessmentStatus(assessmentStatus);
                    //         }
                    //         return maxAttempt;
                    //     });
                default:
                    console.log('Please use valid method');
            }
        };
    }

    /**
     * This will convert xml to JSON
     * @param {string} path Path to the xml file
     */
    xmlToJSon(path: string, file): Promise<any> {
        if (path.length) {
            const _headers = new HttpHeaders();
            const headers = _headers.set('Content-Type', 'text/xml');
            return new Promise((resolve, reject) => {
                try {
                    this.file.readAsText(path, file).then((response) => {
                        const x2js = new X2JS();
                        const json = x2js.xml2js(response);
                        resolve(json);
                    }).catch((e) => console.error(e));
                } catch (error) {
                    reject('Unable to convert');
                }
            });
        }
    }

    /**
     * This will read JSON file
     * @param {string} path Path to the JSON file
     * @returns {Promise} Returns JSON object
     */
    readJSON(path: string): Promise<any> {
        if (path.length) {
            const _headers = new HttpHeaders();
            const headers = _headers.set('Content-Type', 'text/javascript');
            return new Promise((resolve, reject) => {
                try {
                    this._http.get(path, { headers: _headers, responseType: 'json' }).subscribe((data) => {
                        resolve(data);
                    });
                } catch (error) {
                    reject('Unable to read JSON');
                }
            });
        }
    }

}
