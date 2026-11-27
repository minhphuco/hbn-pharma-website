import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import {
  productSchema,
  postSchema,
  teamMemberSchema,
  partnerSchema,
  certificationSchema,
  siteSettingsSchema,
} from './schemas';

export default defineConfig({
  name: 'hbn-pharma',
  title: 'HBN Pharma CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Nội dung')
          .items([
            S.listItem()
              .title('Cài đặt Website & Liên hệ')
              .schemaType('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('Bai viet / Tin tuc').schemaType('post').child(S.documentTypeList('post')),
            S.listItem().title('San pham').schemaType('product').child(S.documentTypeList('product')),
            S.divider(),
            S.listItem().title('Doi ngu').schemaType('teamMember').child(S.documentTypeList('teamMember')),
            S.listItem().title('Doi tac').schemaType('partner').child(S.documentTypeList('partner')),
            S.listItem().title('Chung nhan').schemaType('certification').child(S.documentTypeList('certification')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [siteSettingsSchema, productSchema, postSchema, teamMemberSchema, partnerSchema, certificationSchema],
  },
});
