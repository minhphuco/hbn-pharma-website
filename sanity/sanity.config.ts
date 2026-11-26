import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import {
  productSchema,
  postSchema,
  teamMemberSchema,
  partnerSchema,
  certificationSchema,
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
            S.listItem().title('San pham').schemaType('product').child(S.documentTypeList('product')),
            S.listItem().title('Bai viet / Tin tuc').schemaType('post').child(S.documentTypeList('post')),
            S.divider(),
            S.listItem().title('Doi ngu').schemaType('teamMember').child(S.documentTypeList('teamMember')),
            S.listItem().title('Doi tac').schemaType('partner').child(S.documentTypeList('partner')),
            S.listItem().title('Chung nhan').schemaType('certification').child(S.documentTypeList('certification')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [productSchema, postSchema, teamMemberSchema, partnerSchema, certificationSchema],
  },
});
