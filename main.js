// 1
//   1.1
//     1.1.1
//     1.1.2
//       1.1.2.1
//   1.2
//     1.2.1
//     1.2.2
//       1.2.2.1
//  https://stackoverflow.com/questions/48524059/how-to-flatten-tree-structure-into-array-of-arrays


let ProjectDetails=[    
      {
      "id":1,
	    "versionUrn": "urn:PEARMISSION_no_MI:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf",
	    "contentUrn": "urn:PEARMISSION_no_MI:entity:6bdfd88e-ec47-4d3d-9d2b-422c10c54b67",
	    "numberOfAssessments": 4,
	    "contents": {
	      "frontMatter": [],
	      "bodyMatter": [
	        {     
                "id":"1.1",
                "versionUrn": "urn:PEARMISSION_no_MI:manifest:8ce3746f-7afc-4a93-aca6-e756be053c75",
                "contentUrn": "urn:PEARMISSION_no_MI:entity:8fbcdb44-033d-4fd3-aba9-8498ad83ed68",
                "type": "container",
                "label": "chapter",
                "unformattedTitle": {
                  "en": "TEST TITLE"
              },
                "contents": {
                  "frontMatter": [],
                  "bodyMatter": [
                    {
                      "id":"1.1.1",
                      "versionUrn": "urn:PEARMISSION_no_MI:manifest:36afa2e0-30c2-407d-89fc-c0bcbcc89436",
                      "contentUrn": "urn:PEARMISSION_no_MI:entity:ce58dd5b-2d02-4b30-a3aa-9f4a48b93bf3",
                      "type": "container",
                      "label": "section",
                      "contents": {
                        "frontMatter": [],
                        "bodyMatter": [
                            {
                              "id":"1.1.1.1",
                              "versionUrn": "urn:PEARMISSION_no_MI:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3",
                              "contentUrn": "urn:PEARMISSION_no_MI:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
                              "type": "figure",
                              "unformattedTitle": {
                                "en": "test-item-assessment-tle-sctn-1"
                              },
                              "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
                              "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435-1###",
                              "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
	                      "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
	                      "usageType": "Journal",
	                      "format": "puf"
	                    }
	                  ],
                      "backMatter": [],
	                  "posterObject": [],
	                  "show": [],
	                  "hide": []
	                }
	              },
                {
                  "id":"1.1.2",
                  "versionUrn": "urn:PEARMISSION_no_MI:manifest:36afa2e0-30c2-407d-89fc-c0bcbcc89436-@@@@@@",
                  "contentUrn": "urn:PEARMISSION_no_MI:entity:ce58dd5b-2d02-4b30-a3aa-9f4a48b93bf3",
                  "type": "container",
                  "label": "section",
                  "contents": {
                    "frontMatter": [],
                    "bodyMatter": [
                        {
                          "id":"1.1.2.1",
                          "versionUrn": "urn:PEARMISSION_no_MI:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3-1@",
                          "contentUrn": "urn:PEARMISSION_no_MI:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
                          "type": "figure",
                          "unformattedTitle": {
                            "en": "test-item-assessment-tle-sctn-2"
                          },
                          "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
                          "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435-1@@",
                          "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
                    "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
                    "usageType": "Journal",
                    "format": "puf"
                  },
                  {
                    "id":"1.1.2.1",
                    "versionUrn": "urn:PEARMISSION_no_MI:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3-2@",
                    "contentUrn": "urn:PEARMISSION_no_MI:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
                    "type": "figure",
                    "unformattedTitle": {
                      "en": "test-item-assessment-tle-sctn-3"
                    },
                    "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
                    "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435-2@@",
                    "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
              "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
              "usageType": "Journal",
              "format": "puf"
            }
                ],
                  "backMatter": [],
                "posterObject": [],
                "show": [],
                "hide": []
              }
            }
	            ],
	            "backMatter": [],
	            "posterObject": [],
	            "show": [],
	            "hide": []
	          }
	        },
          {
            "versionUrn": "urn:PEARMISSION_no_MI:manifest:d7af743c-8598-4f0a-9c5d-106c2f58420c",
            "contentUrn": "urn:PEARMISSION_no_MI:entity:2f8196f9-67de-42c8-a723-a51fb22dd14a",
            "type": "container",
            "label": "part",
            "contents": {
              "frontMatter": [],
              "bodyMatter": [
                {
                  "versionUrn": "urn:PEARMISSION_no_MI:manifest:d5d18a49-65b8-4871-ae93-9c8764dff128",
                  "contentUrn": "urn:PEARMISSION_no_MI:entity:76ef9637-93a2-4a30-b049-35d3b97f386a",
                  "type": "container",
                  "label": "chapter",
                  "contents": {
                    "frontMatter": [],
                    "bodyMatter": [
                        {
                          "versionUrn": "urn:PEARMISSION_no_MI:manifest:285bdce2-963c-4631-8e28-78a1de478fd0",
                          "contentUrn": "urn:PEARMISSION_no_MI:entity:03626c28-a46c-4b5f-8d11-6a19deed5432",
                          "type": "container",
                          "label": "module",
                          "contents": {
                            "frontMatter": [],
                            "bodyMatter": [
                              {
                                "versionUrn": "urn:PEARMISSION_no_MI:manifest:5232f493-3012-4d20-9b31-ccf711549561",
                                "contentUrn": "urn:PEARMISSION_no_MI:entity:23059f56-bda1-434d-a2e6-69271e70579e",
                                "type": "container",
                                "label": "section",
                                "contents": {
                                  "frontMatter": [],
                                  "bodyMatter": [
                                    {
                                      "versionUrn": "urn:PEARMISSION_no_MI:work:2b76257c-d252-4c30-8b9d-8d043f6f554d",
                                      "contentUrn": "urn:PEARMISSION_no_MI:entity:7d894ced-4b5a-4ad3-9274-516c4d3dad0c",
                                      "type": "figure",
                                      "unformattedTitle": {
                                        "en": "test-item-assessment-prt-cptr-mdle-sctn"
                                      },
                                      "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
                                      "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435",
                                      "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
                                  "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
                                  "usageType": "Journal",
                                  "format": "puf"
                                }
                              ],
                              "backMatter": [],
                              "posterObject": [],
                              "show": [],
                              "hide": []
                            }
                          }
                        ],
                        "backMatter": [],
                        "posterObject": [],
                        "show": [],
                        "hide": []
                      }
                    }
                  ],
                  "backMatter": [],
                  "posterObject": [],
                  "show": [],
                  "hide": []
                }
              }
            ],
            "backMatter": [],
            "posterObject": [],
            "show": [],
            "hide": []
          }
        }
	      ],
	      "backMatter": [],
	      "posterObject": [],
	      "show": [],
	      "hide": []
	    }
    }
]

// let ProjectDetails=[    
//   {
//     "versionUrn": "urn:PEARMISSION_no_MI:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf",
//     "contentUrn": "urn:PEARMISSION_no_MI:entity:6bdfd88e-ec47-4d3d-9d2b-422c10c54b67",
//     "numberOfAssessments": 4,
//     "contents": {
//       "frontMatter": [],
//       "bodyMatter": [
//         {
//             "versionUrn": "urn:PEARMISSION_no_MI:manifest:8ce3746f-7afc-4a93-aca6-e756be053c75",
//             "contentUrn": "urn:PEARMISSION_no_MI:entity:8fbcdb44-033d-4fd3-aba9-8498ad83ed68",
//             "type": "container",
//             "label": "chapter",
//             "unformattedTitle": {
//               "en": "TEST TITLE"
//           },
//             "contents": {
//               "frontMatter": [],
//               "bodyMatter": [
//                 {
//                   "versionUrn": "urn:PEARMISSION_no_MI:manifest:36afa2e0-30c2-407d-89fc-c0bcbcc89436-1",
//                   "contentUrn": "urn:PEARMISSION_no_MI:entity:ce58dd5b-2d02-4b30-a3aa-9f4a48b93bf3",
//                   "type": "container",
//                   "label": "section",
//                   "contents": {
//                     "frontMatter": [],
//                     "bodyMatter": [
//                         {
//                           "versionUrn": "urn:PEARMISSION_no_MI:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3",
//                           "contentUrn": "urn:PEARMISSION_no_MI:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
//                           "type": "figure",
//                           "unformattedTitle": {
//                             "en": "test-item-assessment-tle-sctn-1"
//                           },
//                           "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
//                           "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435-1",
//                           "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
//                       "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
//                       "usageType": "Journal",
//                       "format": "puf"
//                     }
//                   ],
//                   "backMatter": [],
//                   "posterObject": [],
//                   "show": [],
//                   "hide": []
//                 }
//               },
//             {
//               "versionUrn": "urn:PEARMISSION_no_MI:manifest:36afa2e0-30c2-407d-89fc-c0bcbcc89436-2",
//               "contentUrn": "urn:PEARMISSION_no_MI:entity:ce58dd5b-2d02-4b30-a3aa-9f4a48b93bf3",
//               "type": "container",
//               "label": "section",
//               "contents": {
//                 "frontMatter": [],
//                 "bodyMatter": [
//                     {
//                       "versionUrn": "urn:PEARMISSION_no_MI:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3",
//                       "contentUrn": "urn:PEARMISSION_no_MI:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
//                       "type": "figure",
//                       "unformattedTitle": {
//                         "en": "test-item-assessment-tle-sctn-2"
//                       },
//                       "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
//                       "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435-2",
//                       "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
//                 "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
//                 "usageType": "Journal",
//                 "format": "puf"
//               },
//               {
//                 "versionUrn": "urn:PEARMISSION_no_MI:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3",
//                 "contentUrn": "urn:PEARMISSION_no_MI:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
//                 "type": "figure",
//                 "unformattedTitle": {
//                   "en": "test-item-assessment-tle-sctn-3"
//                 },
//                 "assessmentContentUrn": "urn:PEARMISSION_no_MI:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
//                 "assessmentVersionUrn": "urn:PEARMISSION_no_MI:work:067129ee-dcb2-41c3-b865-f6a362477435-3",
//                 "assessmentItemContentUrn": "urn:PEARMISSION_no_MI:entity:769bbf13-7be9-4701-90df-5abb250b7829",
//           "assessmentItemVersionUrn": "urn:PEARMISSION_no_MI:work:b49e2d73-add3-4187-ae46-dced320addb5",
//           "usageType": "Journal",
//           "format": "puf"
//         }
//             ],
//               "backMatter": [],
//             "posterObject": [],
//             "show": [],
//             "hide": []
//           }
//         }
//             ],
//             "backMatter": [],
//             "posterObject": [],
//             "show": [],
//             "hide": []
//           }
//         }
//       ],
//       "backMatter": [],
//       "posterObject": [],
//       "show": [],
//       "hide": []
//     }
// }
// ]



let associatedProjects=[
  {
  versionURN:"urn:PEARMISSION_no_MI:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf",
  entityUrn:"Some dmmy entity URN",
  title:{
    en:"TitleProjectOne"
  }
},
{
  versionURN:"urn:PEARMISSION_no_MI:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf-2",
  entityUrn:"Some dmmy entity URN",
  title:{
    en:"TitleProjectOne-2"
  }
}]

var ResultArray=[];


function bodyMatterParser(projectObject,versionURN,contentURN,projectTitle,contentPath){

    if(projectObject.type!=undefined&& projectObject.label!==undefined){
        if(projectObject.label=='section'){
            // console.log("***",projectObject.contentUrn);
            let sectionPath=contentPath;
            if (projectObject.contents !== undefined && projectObject.contents.bodyMatter!== undefined && projectObject.contents.bodyMatter.length === 1) {
              let sectionBodyMatter = projectObject.contents.bodyMatter[0];
              let assessmentVersionUrn = sectionBodyMatter.assessmentVersionUrn;
              
              if (sectionBodyMatter.unformattedTitle) {
                sectionPath = sectionPath.concat('/', sectionBodyMatter.unformattedTitle.en);
              }
              else {
                sectionPath = sectionPath.concat('/', 'untitled');
              }           
            }
            // END of CODE to get PROJECT TITLE
            let resultObject={
                ProjectUrn:versionURN,
                entityUrn:contentURN,
                slateUrn:projectObject.contentUrn,
                contentPath:sectionPath,
                path:`qa-structuredauthoring.PEARMISSION_no_MI.com/toc-wrapper/index.html?projectUrn=${versionURN}&entityUrn=${contentURN}&slateUrn=${projectObject.contentUrn}`
            }
            console.log("1",contentPath,sectionPath);
           
            ResultArray.push(resultObject);
        }
    }
    if(projectObject.contents!=undefined&&projectObject.contents.bodyMatter!=undefined&&projectObject.contents.bodyMatter.length>0){
        let bodyMatterArray=projectObject.contents.bodyMatter;
        
        for (let bodyObjectIndex = 0; bodyObjectIndex < bodyMatterArray.length; bodyObjectIndex++) {            
          const bodyMatterObject = bodyMatterArray[bodyObjectIndex];
          if(bodyMatterObject.type!=undefined&&bodyMatterObject.type!=='section'){
          
            if (bodyMatterObject.unformattedTitle) {
              let field = bodyMatterObject.unformattedTitle.en;            
              contentPath = contentPath.concat("/", field);
              // console.log("2",contentPath);
            } else {
              contentPath = contentPath.concat("/", "untitled");
            }  

              bodyMatterParser(bodyMatterObject,versionURN,contentURN,projectTitle,contentPath);
          }


        }
        // console.log('4',contentPath)
    }

}

// function titleAdder(bodyMatterObject,contentPath,from){
//   let basePath=contentPath;
//   if (bodyMatterObject.unformattedTitle) {
//     let field = bodyMatterObject.unformattedTitle.en;            
//     contentPath = contentPath.concat("/", field);
//     console.log("2",contentPath);
//   } else {
//     contentPath = contentPath.concat("/", "untitled");
//   }    
// }

function traverse(node, path = [], result = [],topLevelObject={},versionURN,contentURN){
  if(!node?.contents?.bodyMatter?.length){
        // console.log("Node Details",node);
        // console.log("TOP LEVEL ",topLevelObject)

        if(topLevelObject.label=="section"){
          let contentPathArray=path.concat(node?.unformattedTitle?.en||'untitle');
          let contentPath=contentPathArray.join("/")
          let resultObject={
              ProjectUrn:versionURN,
              entityUrn:contentURN,
              slateUrn:topLevelObject.versionUrn,
              contentPath:contentPath,
              assessmentVersionUrn:node.assessmentVersionUrn,
              path:`qa-structuredauthoring.PEARMISSION_no_MI.com/toc-wrapper/index.html?projectUrn=${versionURN}&entityUrn=${contentURN}&slateUrn=${node.contentUrn}`
          }
          result.push(resultObject);
        }

      
     
  }
     
  for(const child of node?.contents?.bodyMatter||[]){
    if(node.versionUrn!==undefined&&node.versionUrn===versionURN){
      // console.log("CHILD DATA1",child);
      traverse(child, path, result,node,versionURN,contentURN);
    }else{
      // console.log("CHILD DATA2",child);
      traverse(child, path.concat(node?.unformattedTitle?.en||'untitle'), result,node,versionURN,contentURN);
    }
    
  }
     
  return result;
}


function projectURNParser(arrayOfItems){
    for (let projectItem = 0; projectItem < arrayOfItems.length; projectItem++) {
        const projectObject = arrayOfItems[projectItem];
        const versionURN=projectObject.versionUrn;
        const contentURN=projectObject.contentUrn;
         //CODE to GET ProJect TITLE
            let projectTitle="";
            associatedProjects.forEach((projectObject)=>{
              if(projectObject.versionURN==versionURN){
                projectTitle=projectObject.title.en;
              }
            })
        let sectionObject={}
        ResultArray.push(...traverse(projectObject,path=[projectTitle],result=[],sectionObject,versionURN,contentURN));
        
    }
}

projectURNParser(ProjectDetails);
console.log(ResultArray)

