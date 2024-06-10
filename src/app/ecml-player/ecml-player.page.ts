import { Location } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {ScreenOrientation } from '@capacitor/screen-orientation';
import { Platform } from '@ionic/angular';
import { PlayerActionHandlerDelegate, User } from './player-action-handler-delegate';
import { CanvasPlayerService } from '../../services/canvas-player.service';

@Component({
  selector: 'app-ecml-player',
  templateUrl: './ecml-player.page.html',
  styleUrls: ['./ecml-player.page.scss'],
})
export class EcmlPlayerPage implements OnInit, OnDestroy, PlayerActionHandlerDelegate {
  config: any;
  pauseSubscription: any;
  @ViewChild('preview', { static: false }) previewElement!: ElementRef;

  constructor(
    private location: Location,
    private platform: Platform,
    private canvasPlayerService: CanvasPlayerService
  ) { 
    this.canvasPlayerService.handleAction();
    // this.commonUtil.handleAction();
    (window as any).onContentNotFound = this.onContentNotFound.bind(this);
    (window as any).onUserSwitch = this.onUserSwitch.bind(this);
  }
  onUserSwitch(user: User) {
    console.log('Method not implemented.');
  }

  onContentNotFound(identifier: string, hierarchyInfo: Array<any>) {
    const content = { identifier, hierarchyInfo };

    setTimeout(async () => {
      await this.closeIframe(content);
    }, 1000);
  }

  ngOnInit() {
    let obj = {
      "metadata": {
          "identifier": "do_21361377887175475213059",
          "name": "ecmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlec",
          "contentData": {
              "ownershipType": [
                  "createdBy"
              ],
              "unitIdentifiers": [
                  "do_21361310902435840012871"
              ],
              "copyright": "123",
              "se_gradeLevelIds": [
                  "ekstep_ncert_k-12_gradelevel_class10"
              ],
              "previewUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/ecml/do_21361377887175475213059-latest",
              "plugins": [
                  {
                      "identifier": "org.ekstep.stage",
                      "semanticVersion": "1.0"
                  },
                  {
                      "identifier": "org.ekstep.shape",
                      "semanticVersion": "1.0"
                  },
                  {
                      "identifier": "org.ekstep.navigation",
                      "semanticVersion": "1.0"
                  },
                  {
                      "identifier": "org.ekstep.summary",
                      "semanticVersion": "1.0"
                  }
              ],
              "subject": [
                  "Hindi"
              ],
              "channel": "01345815127107174426",
              "downloadUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21361377887175475213059/ecmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlec_1671632208816_do_21361377887175475213059_2.ecar",
              "language": [
                  "English"
              ],
              "source": "https://dockstaging.sunbirded.org/api/content/v1/read/do_21361377887175475213059",
              "mimeType": "application/vnd.ekstep.ecml-archive",
              "variants": {
                  "full": {
                      "ecarUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21361377887175475213059/ecmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlec_1671632208816_do_21361377887175475213059_2.ecar",
                      "size": "39886"
                  },
                  "spine": {
                      "ecarUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21361377887175475213059/ecmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlec_1671632208854_do_21361377887175475213059_2_SPINE.ecar",
                      "size": "2661"
                  }
              },
              "editorState": "{\"plugin\":{\"noOfExtPlugins\":12,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.reviewercomments\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.3\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.1\"}]},\"stage\":{\"noOfStages\":1,\"currentStage\":\"6a305b36-102c-4ac1-953d-d66e255dcc60\",\"selectedPluginObject\":\"a971aea4-ae50-4bb5-b804-770e8590850e\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
              "objectType": "Content",
              "se_mediums": [
                  "English"
              ],
              "gradeLevel": [
                  "Class 10"
              ],
              "appIcon": "",
              "primaryCategory": "Course Assessment",
              "contentEncoding": "gzip",
              "artifactUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21361377887175475213059/artifact/1671632208021_do_21361377887175475213059.zip",
              "contentType": "SelfAssess",
              "se_gradeLevels": [
                  "Class 10"
              ],
              "identifier": "do_21361377887175475213059",
              "audience": [
                  "Student"
              ],
              "se_boardIds": [
                  "ekstep_ncert_k-12_board_cbse"
              ],
              "subjectIds": [
                  "ekstep_ncert_k-12_subject_hindi"
              ],
              "visibility": "Default",
              "author": "Aparna-8977121234",
              "discussionForum": {
                  "enabled": "No"
              },
              "mediaType": "content",
              "osId": "org.ekstep.quiz.app",
              "languageCode": [
                  "en"
              ],
              "lastPublishedBy": "863d7c71-ca5a-4587-9748-270ff1c87b54",
              "version": 2,
              "se_subjects": [
                  "Hindi"
              ],
              "license": "CC BY 4.0",
              "maxAttempts": 3,
              "prevState": "Review",
              "size": 38447,
              "lastPublishedOn": "2022-12-21T14:16:48.295+0000",
              "name": "ecmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlececmlecmlec",
              "mediumIds": [
                  "ekstep_ncert_k-12_medium_english"
              ],
              "status": "Live",
              "totalQuestions": 0,
              "code": "1b5b17d1-7d28-72bb-0fb5-00c142e1b68e",
              "interceptionPoints": {},
              "credentials": {
                  "enabled": "No"
              },
              "prevStatus": "Processing",
              "origin": "do_21361377887175475213059",
              "streamingUrl": "https://obj.stage.sunbirded.org/sunbird-content-staging/content/ecml/do_21361377887175475213059-latest",
              "medium": [
                  "English"
              ],
              "idealScreenSize": "normal",
              "createdOn": "2022-09-01T09:42:47.665+0000",
              "se_boards": [
                  "CBSE"
              ],
              "se_mediumIds": [
                  "ekstep_ncert_k-12_medium_english"
              ],
              "processId": "d1349628-60ae-4fbc-8210-735622a06596",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-12-21T14:16:48.883+0000",
              "originData": {
                  "identifier": "do_21361377887175475213059",
                  "repository": "https://dockstaging.sunbirded.org/api/content/v1/read/do_21361377887175475213059"
              },
              "collectionId": "do_21361310902393241612868",
              "dialcodeRequired": "No",
              "lastStatusChangedOn": "2022-12-21T14:16:48.883+0000",
              "createdFor": [
                  "01345815127107174426"
              ],
              "creator": "Aparna-8977121234",
              "os": [
                  "All"
              ],
              "cloudStorageKey": "content/do_21361377887175475213059/artifact/1671632208021_do_21361377887175475213059.zip",
              "se_subjectIds": [
                  "ekstep_ncert_k-12_subject_hindi"
              ],
              "se_FWIds": [
                  "ekstep_ncert_k-12"
              ],
              "targetFWIds": [
                  "ekstep_ncert_k-12"
              ],
              "totalScore": 0,
              "pkgVersion": 2,
              "versionKey": "1662025371498",
              "migrationVersion": 1.1,
              "idealScreenDensity": "hdpi",
              "framework": "ekstep_ncert_k-12",
              "s3Key": "content/do_21361377887175475213059/artifact/1661838361278_do_21361377887175475213059_1662025368326.zip",
              "boardIds": [
                  "ekstep_ncert_k-12_board_cbse"
              ],
              "lastSubmittedOn": "2022-09-01T09:42:50.793+0000",
              "createdBy": "742403e8-6497-49c5-aad8-ffb80d2c20a7",
              "compatibilityLevel": 5,
              "gradeLevelIds": [
                  "ekstep_ncert_k-12_gradelevel_class10"
              ],
              "board": "CBSE",
              "programId": "3139ff80-2768-11ed-bcf5-df48f63ad78b",
              "trackable": {
                  "enabled": "No"
              }
          },
          "isUpdateAvailable": false,
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "basePath": "/_app_file_",
          "contentType": "selfassess",
          "primaryCategory": "course assessment",
          "isAvailableLocally": false,
          "referenceCount": 0,
          "sizeOnDevice": 0,
          "lastUsedTime": 0,
          "lastUpdatedTime": 0,
          "contentAccess": [
              {
                  "status": 1,
                  "contentId": "do_21361377887175475213059",
                  "contentType": "selfassess",
                  "contentLearnerState": {}
              }
          ],
          "contentFeedback": [],
          "contentMarker": [],
          "rollup": {
              "l1": "do_21361377887175475213059"
          }
      },
      "config": {
          "showEndPage": false,
          "endPage": [
              {
                  "template": "assessment",
                  "contentType": [
                      "SelfAssess"
                  ]
              }
          ],
          "splash": {
              "webLink": "",
              "text": "",
              "icon": "",
              "bgImage": "assets/icons/splacebackground_1.png"
          },
          "overlay": {
              "enableUserSwitcher": true,
              "showUser": false
          },
          "plugins": [
              {
                  "id": "org.sunbird.player.endpage",
                  "ver": "1.1",
                  "type": "plugin"
              }
          ],
          "whiteListUrl": [
              "https://obj.stage.sunbirded.org/**"
          ]
      },
      "context": {
          "did": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
          "origin": "https://staging.sunbirded.org",
          "pdata": {
              "pid": "sunbird.app",
              "ver": "6.0-local"
          },
          "objectRollup": {
              "l1": "do_21361377887175475213059"
          },
          "sid": "d5e4f542-8227-46ff-9a4c-6e38588a76f9",
          "actor": {
              "type": "User",
              "id": "be2012e9-7fda-4053-b2e5-c9ba81c9514b"
          },
          "deeplinkBasePath": "",
          "cdata": [
              {
                  "id": "teacher",
                  "type": "UserType"
              },
              {
                  "id": "streaming",
                  "type": "PlayerLaunch"
              }
          ],
          "contentId": "do_21361377887175475213059",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "dispatcher": {}
      },
      "appContext": {
          "local": true,
          "server": false,
          "groupId": ""
      },
      "data": {},
      "uid": "be2012e9-7fda-4053-b2e5-c9ba81c9514b"
  }
    this.config = obj;
    this.pauseSubscription = this.platform.pause.subscribe(() => {
      const iframes = window.document.getElementsByTagName('iframe');
      if (iframes.length > 0) {
        iframes[0].contentWindow.postMessage('pause.youtube', window.parent.origin);
      }
    });
  }

  async ngAfterViewInit() {
    ScreenOrientation.lock({ orientation: 'landscape-primary' });
    const playerInterval = setInterval(async () => {
      this.config['uid'] = this.config['context'].actor.id;
      this.config['metadata'].basePath = '/_app_file_' + this.config['metadata'].basePath;

      if (this.config['metadata'].isAvailableLocally) {
        this.config['metadata'].contentData.streamingUrl = '/_app_file_' + this.config['metadata'].contentData.streamingUrl;
      }
      // if (!this.config['config'].whiteListUrl || !this.config['config'].whiteListUrl.length) {
      //   const utilityConfigFields = await this.formAndFrameworkUtilService.getFormFields(FormConstants.UTILITY_CONFIG);
      //   if (utilityConfigFields && utilityConfigFields.length) {
      //     const utilityPlayerConfig = utilityConfigFields.find((config: any) => config.code === 'config')['config'];
      //     if (utilityPlayerConfig && utilityPlayerConfig.v1 && utilityPlayerConfig.v1.whitelistUrl
      //       && utilityPlayerConfig.v1.whitelistUrl.length) {
      //       this.config['config']['whiteListUrl'] = utilityPlayerConfig.v1.whitelistUrl;
      //     }
      //   }
      // }
      if (this.previewElement?.nativeElement) {
        clearInterval(playerInterval);
        // This is to reload a iframe as iframes reload method not working on cross-origin.
        const src = this.previewElement.nativeElement.src;
        this.previewElement.nativeElement.src = '';
        this.previewElement.nativeElement.src = src;
        this.previewElement.nativeElement.onload = () => {
          setTimeout(() => {
            this.previewElement.nativeElement.contentWindow['Capacitor'] = window['Capacitor'];
            this.previewElement.nativeElement.contentWindow['Media'] = window['Media'];
            this.previewElement.nativeElement.contentWindow['initializePreview'](this.config);
            this.previewElement.nativeElement.contentWindow.addEventListener('message', async (resp: any) => {
              if (resp.data === 'renderer:question:submitscore') {
                // this.courseService.syncAssessmentEvents().subscribe();
              } else if (resp.data === 'renderer:question:reviewAssessment') {
                // this.courseService.clearAssessments().subscribe();
              } else if (resp.data && typeof resp.data === 'object') {
                if (resp.data['player.pdf-renderer.error']) {
                  const pdfError = resp.data['player.pdf-renderer.error'];
                  if (pdfError.name === 'MissingPDFException') {
                    const downloadUrl = this.config['metadata']['contentData']['streamingUrl'] ||
                      this.config['metadata']['contentData']['artifactUrl'];
                    // this.telemetryGeneratorService.generateInteractTelemetry(
                    //   InteractType.TOUCH,
                    //   InteractSubtype.DOWNLOAD_PDF_CLICKED,
                    //   Environment.PLAYER,
                    //   PageId.PLAYER,
                    //   ContentUtil.getTelemetryObject(this.config['metadata']['contentData']),
                    //   undefined,
                    //   ContentUtil.generateRollUp(this.config['metadata']['hierarchyInfo'], this.config['metadata']['identifier']));
                    // await this.openPDF(downloadUrl);
                  }
                } else if (resp.data && resp.data.event === 'renderer:contentNotComaptible'
                  || resp.data && resp.data.data.event === 'renderer:contentNotComaptible') {
                  // cordova.plugins.InAppUpdateManager.checkForImmediateUpdate(
                  //   () => { },
                  //   () => { }
                  // );
                } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
                  await this.closeIframe();
                }
              } else if (this.isJSON(resp.data)) {
                const response = JSON.parse(resp.data);
                if (response.event === 'renderer:navigate') {
                  // this.navigateBackToTrackableCollection = true;
                  // this.navigateBackToContentDetails = false;
                  await this.closeIframe({
                    identifier: response.data.identifier
                  });
                }
              }
            });
          }, 1000);
        };
      }
    }, 500);
    this.config['context'].dispatcher = {
      dispatch: function (event: any) {
        console.log('response after telemetry', event)
      }
    }; 
  }

  ngOnDestroy() {
    ScreenOrientation.unlock();
    ScreenOrientation.lock({orientation: 'portrait'})
    if (this.pauseSubscription) {
      this.pauseSubscription.unsubscribe();
    }
  }

  async closeIframe(content?: any) {
    const stageId = this.previewElement.nativeElement.contentWindow['EkstepRendererAPI'].getCurrentStageId();
    try {
      this.previewElement.nativeElement.contentWindow['TelemetryService'].exit(stageId);
    } catch (err: any) {
      console.error('End telemetry error:', err.message);
    }
    this.location.back();
  }

  private isJSON(input: any): boolean {
    try {
      JSON.parse(input);
      return true;
    } catch (e) {
      return false;
    }
  }
}
