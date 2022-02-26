let ProjectDetails=[    
    {
    "id":1,
      "versionUrn": "urn:PEARMISSON_no_MIS:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf",
      "contentUrn": "urn:PEARMISSON_no_MIS:entity:6bdfd88e-ec47-4d3d-9d2b-422c10c54b67",
      "numberOfAssessments": 4,
      "contents": {
        "frontMatter": [],
        "bodyMatter": [
            {
                "versionUrn": "urn:PEARMISSON_no_MIS:manifest:d7af743c-8598-4f0a-9c5d-106c2f58420c",
                "contentUrn": "urn:PEARMISSON_no_MIS:entity:2f8196f9-67de-42c8-a723-a51fb22dd14a",
                "type": "container",
                "label": "part",
                "contents": {
                  "frontMatter": [],
                  "bodyMatter": [
                    {
                      "versionUrn": "urn:PEARMISSON_no_MIS:manifest:d5d18a49-65b8-4871-ae93-9c8764dff128",
                      "contentUrn": "urn:PEARMISSON_no_MIS:entity:76ef9637-93a2-4a30-b049-35d3b97f386a",
                      "type": "container",
                      "label": "chapter",
                      "contents": {
                        "frontMatter": [],
                        "bodyMatter": [
                            {
                              "versionUrn": "urn:PEARMISSON_no_MIS:manifest:285bdce2-963c-4631-8e28-78a1de478fd0",
                              "contentUrn": "urn:PEARMISSON_no_MIS:entity:03626c28-a46c-4b5f-8d11-6a19deed5432",
                              "type": "container",
                              "label": "module",
                              "contents": {
                                "frontMatter": [],
                                "bodyMatter": [
                                  {
                                    "versionUrn": "urn:PEARMISSON_no_MIS:manifest:5232f493-3012-4d20-9b31-ccf711549561",
                                    "contentUrn": "urn:PEARMISSON_no_MIS:entity:23059f56-bda1-434d-a2e6-69271e70579e",
                                    "type": "container",
                                    "label": "section",
                                    "contents": {
                                      "frontMatter": [],
                                      "bodyMatter": [
                                        {
                                          "versionUrn": "urn:PEARMISSON_no_MIS:work:2b76257c-d252-4c30-8b9d-8d043f6f554d",
                                          "contentUrn": "urn:PEARMISSON_no_MIS:entity:7d894ced-4b5a-4ad3-9274-516c4d3dad0c",
                                          "type": "figure",
                                          "unformattedTitle": {
                                            "en": "test-item-assessment-prt-cptr-mdle-sctn"
                                          },
                                          "assessmentContentUrn": "urn:PEARMISSON_no_MIS:entity:713d1a6b-5f7d-4ac4-994f-e370ac295ba1",
                                          "assessmentVersionUrn": "urn:PEARMISSON_no_MIS:work:067129ee-dcb2-41c3-b865-f6a362477435",
                                          "assessmentItemContentUrn": "urn:PEARMISSON_no_MIS:entity:769bbf13-7be9-4701-90df-5abb250b7829",
                                      "assessmentItemVersionUrn": "urn:PEARMISSON_no_MIS:work:b49e2d73-add3-4187-ae46-dced320addb5",
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
];

let associatedProjects=[
    {
    versionURN:"urn:PEARMISSON_no_MIS:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf",
    entityUrn:"Some dmmy entity URN",
    title:{
      en:"TitleProjectOne"
    }
  },
  {
    versionURN:"urn:PEARMISSON_no_MIS:distributable:6cad86cb-1c45-4195-baab-202e19ba2abf-2",
    entityUrn:"Some dmmy entity URN",
    title:{
      en:"TitleProjectOne-2"
    }
  }]

function projectURNParser(ProjectDetails,associatedProjects){
    let resultArray=[]
    for (let projectItem = 0; projectItem < ProjectDetails.length; projectItem++) {
        const projectObject = ProjectDetails[projectItem];
        const versionURN=projectObject.versionUrn;
        const contentURN=projectObject.contentUrn;
         //CODE to GET ProJect TITLE
            let projectTitle="";
            associatedProjects.forEach((projectObject)=>{
              if(projectObject.versionURN==versionURN){
                projectTitle=projectObject.title.en;
              }
            })
        const contentPath= projectTitle;
        console.log("(((content Path",contentPath);
        let result =pathFinder(projectObject,versionURN,contentURN,projectTitle,contentPath);
        resultArray.push(result);
    }
}

function pathFinder(projectObject,versionURN,contentURN,projectTitle,contentPath){ 
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
                path:`qa-structuredauthoring.PEARMISSON_no_MIS.com/toc-wrapper/index.html?projectUrn=${versionURN}&entityUrn=${contentURN}&slateUrn=${projectObject.contentUrn}`
            }
            console.log("Content Path",contentPath,"Section Path",sectionPath);            
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
                    console.log("2",contentPath);
                  } else {
                    contentPath = contentPath.concat("/", "untitled");
                  }            
                  pathFinder(bodyMatterObject,versionURN,contentURN,projectTitle,contentPath);
            }
            
        }
        // console.log('3',contentPath)
        contentPath= projectTitle;
        // console.log('4',contentPath)
    }
}

projectURNParser(ProjectDetails,associatedProjects)