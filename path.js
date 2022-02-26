// const pathTo = (array, target) => {
//   var result;
//   array.some(({ id, children = [] }) => {
//     if (id === target) return (result = id);
//     var temp = pathTo(children, target);
//     if (temp) return (result = id + "." + temp);
//   });
//   return result;
// };

// var data = [
//   { title: "News", id: "news" },
//   {
//     title: "Links",
//     id: "links",
//     children: [
//       {
//         title: "World",
//         id: "world",
//         children: [
//           {
//             title: "USA",
//             id: "usa",
//             children: [
//               { title: "Northeast", id: "northeast" },
//               { title: "Midwest", id: "midwest" },
//             ],
//           },
//           { title: "Europe", id: "europe" },
//         ],
//       },
//     ],
//   },
// ];


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
              "id":"1.1",
              "versionUrn": "urn:PEARMISSON_no_MIS:manifest:8ce3746f-7afc-4a93-aca6-e756be053c75",
              "contentUrn": "urn:PEARMISSON_no_MIS:entity:8fbcdb44-033d-4fd3-aba9-8498ad83ed68",
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
                    "versionUrn": "urn:PEARMISSON_no_MIS:manifest:36afa2e0-30c2-407d-89fc-c0bcbcc89436",
                    "contentUrn": "urn:PEARMISSON_no_MIS:entity:ce58dd5b-2d02-4b30-a3aa-9f4a48b93bf3",
                    "type": "container",
                    "label": "section",
                    "contents": {
                      "frontMatter": [],
                      "bodyMatter": [
                          {
                            "id":"1.1.1.1",
                            "versionUrn": "urn:PEARMISSON_no_MIS:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3",
                            "contentUrn": "urn:PEARMISSON_no_MIS:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
                            "type": "figure",
                            "unformattedTitle": {
                              "en": "test-item-assessment-tle-sctn-1"
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
                },
              {
                "id":"1.1.2",
                "versionUrn": "urn:PEARMISSON_no_MIS:manifest:36afa2e0-30c2-407d-89fc-c0bcbcc89436",
                "contentUrn": "urn:PEARMISSON_no_MIS:entity:ce58dd5b-2d02-4b30-a3aa-9f4a48b93bf3",
                "type": "container",
                "label": "section",
                "contents": {
                  "frontMatter": [],
                  "bodyMatter": [
                      {
                        "id":"1.1.2.1",
                        "versionUrn": "urn:PEARMISSON_no_MIS:work:4d9075f3-31fc-44dc-914c-1dbb47ddccf3",
                        "contentUrn": "urn:PEARMISSON_no_MIS:entity:be69ced4-b177-4b46-81dd-0fc52e619afb",
                        "type": "figure",
                        "unformattedTitle": {
                          "en": "test-item-assessment-tle-sctn-2"
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
]



let resultArray=[];
const pathTo = (array, target) => {
    var result;
    array.some(({ id, contents = {},label='untitled' }) => {
      if (id === target) {
        resultArray.push(id)
        return (result = id);
      } 
      if(label==="section"){

      }
      if(contents?.bodyMatter?.length>0){
        var temp = pathTo(contents.bodyMatter, target);
        if (temp) return (result = id + "*" + temp);
      }

    });
    return result;
  };



  

console.log(pathTo(ProjectDetails, "1.1.2.1"));
console.log(resultArray)
