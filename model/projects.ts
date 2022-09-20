export type NotionDataBase = {
  object: string;
  results: Result[];
  next_cursor: null;
  has_more: boolean;
  type: string;
  page: {};
};

// export type Github

export type Results = Result[];
export type Result = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: {
    type: string;
    external: {
      url: string;
    };
  };
  icon: null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    workperiod: {
      id: string;
      type: string;
      date: {
        start: string;
        end: string;
        time_zone: null;
      };
    };
    Tags: {
      id: string;
      type: string;
      multi_select: [
        {
          id: string;
          name: string;
          color: string;
        },
        {
          id: string;
          name: string;
          color: string;
        },
        {
          id: string;
          name: string;
          color: string;
        }
      ];
    };
    Github: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: {
              url: string;
            };
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: string;
        }
      ];
    };
    description: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };
    Name: {
      id: string;
      type: string;
      title: TitlePropertiesContainer;
    };
  };
  url: string;
};

export type TitlePropertiesContainer = TitleProperties[];

export type TitleProperties = {
  type: string;
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
};

// {

//     "object": "list",
// "results": [
//     {
//         "object": "page",
//         "id": "0957f19a-c6e9-4358-ac66-676a75d77490",
//         "created_time": "2022-09-18T09:10:00.000Z",
//         "last_edited_time": "2022-09-18T09:17:00.000Z",
//         "created_by": {
//             "object": "user",
//             "id": "70ed849b-f89c-4fbc-9dd9-8fa392207d99"
//         },
//         "last_edited_by": {
//             "object": "user",
//             "id": "70ed849b-f89c-4fbc-9dd9-8fa392207d99"
//         },
//         "cover": {
//             "type": "external",
//             "external": {
//                 "url": "https://www.notion.so/images/page-cover/woodcuts_3.jpg"
//             }
//         },
//         "icon": null,
//         "parent": {
//             "type": "database_id",
//             "database_id": "f2a479e0-afce-498b-ad57-0c6a695cc549"
//         },
//         "archived": false,
//         "properties": {
//             "workperiod": {
//                 "id": "IqOM",
//                 "type": "date",
//                 "date": {
//                     "start": "2022-09-16",
//                     "end": "2022-09-19",
//                     "time_zone": null
//                 }
//             },
//             "Tags": {
//                 "id": "k%5Ee_",
//                 "type": "multi_select",
//                 "multi_select": [
//                     {
//                         "id": "ecbf883d-08b8-4e47-a91a-417781d35eb5",
//                         "name": "nextjs",
//                         "color": "orange"
//                     },
//                     {
//                         "id": "d3876f4d-2138-4f37-b6f4-b2cd4b35aa55",
//                         "name": "typescript",
//                         "color": "default"
//                     },
//                     {
//                         "id": "dd84d64b-1dcf-467f-8fb0-8158f9312f34",
//                         "name": "tailwindcss",
//                         "color": "purple"
//                     }
//                 ]
//             },
//             "Github": {
//                 "id": "tCc%40",
//                 "type": "rich_text",
//                 "rich_text": [
//                     {
//                         "type": "text",
//                         "text": {
//                             "content": "https://github.com/minhaejo/Notion-Project",
//                             "link": {
//                                 "url": "https://github.com/minhaejo/Notion-Project"
//                             }
//                         },
//                         "annotations": {
//                             "bold": false,
//                             "italic": false,
//                             "strikethrough": false,
//                             "underline": false,
//                             "code": false,
//                             "color": "default"
//                         },
//                         "plain_text": "https://github.com/minhaejo/Notion-Project",
//                         "href": "https://github.com/minhaejo/Notion-Project"
//                     }
//                 ]
//             },
//             "description": {
//                 "id": "%7DYPM",
//                 "type": "rich_text",
//                 "rich_text": [
//                     {
//                         "type": "text",
//                         "text": {
//                             "content": "프로젝트 설명입니다",
//                             "link": null
//                         },
//                         "annotations": {
//                             "bold": false,
//                             "italic": false,
//                             "strikethrough": false,
//                             "underline": false,
//                             "code": false,
//                             "color": "default"
//                         },
//                         "plain_text": "프로젝트 설명입니다",
//                         "href": null
//                     }
//                 ]
//             },
//             "Name": {
//                 "id": "title",
//                 "type": "title",
//                 "title": [
//                     {
//                         "type": "text",
//                         "text": {
//                             "content": "조민해 개인 프로젝트",
//                             "link": null
//                         },
//                         "annotations": {
//                             "bold": false,
//                             "italic": false,
//                             "strikethrough": false,
//                             "underline": false,
//                             "code": false,
//                             "color": "default"
//                         },
//                         "plain_text": "조민해 개인 프로젝트",
//                         "href": null
//                     }
//                 ]
//             }
//         },
//         "url": "https://www.notion.so/0957f19ac6e94358ac66676a75d77490"
//     },
// ],
//     "next_cursor": null,
//     "has_more": false,
//     "type": "page",
//     "page": {}
// }
