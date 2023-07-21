export interface NotionPage {
  object: string,
  id: string,
  created_time: Date,
  last_edited_time: Date,
  created_by: {
    object: string,
    id: string
  },
  last_edited_by: {
    object: string,
    id: string
  },
  cover: string,
  icon: string,
  parent: {
    type: string,
    database_id: string
  },
  archived: boolean,
  properties: {
    project_name: {
      id: string,
      type: string,
      rich_text: [
        {
          type: string,
          text: {
            content: string,
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: "default"
          },
          plain_text: string,
          href: string
        }
      ]
    },
    type_evenement: {
      id: string,
      type: string,
      multi_select: [
        {
          id: string,
          name: string,
          color: "yellow"
        }
      ]
    },
    client: {
      id: string,
      type: string,
      title: [
        {
          type: string,
          text: {
            content: string,
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: "default"
          },
          plain_text: string,
          href: string
        }
      ]
    },
    image: {
      id: string,
      type: string,
      rich_text: [
        {
          type: string,
          text: {
            content: string,
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: "default"
          },
          plain_text: string,
          href: string
        }
      ]
    },
    event_date: {
      id: string,
      type: string,
      date: {
        start: Date,
        end: Date,
        time_zone: string
      }
    },
    details: {
      id: string,
      type: string,
      rich_text: [{
        "type": string,
        "text": {
          "content": string,
          "link": string
        },
        "annotations": {
          "bold": boolean,
          "italic": boolean,
          "strikethrough": boolean,
          "underline": boolean,
          "code": boolean,
          "color": "default"
        },
        "plain_text": string,
        "href": string
      }]
    },
  },
  url: string,
  public_url: string
}


export interface NotionApiResponse {
  object: string,
  results: NotionPage[],
  next_cursor: string,
  has_more: boolean,
  type: string,
  page_or_database: {}
}



