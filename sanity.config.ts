import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {
  productSchema,
  postSchema,
  teamMemberSchema,
  partnerSchema,
  certificationSchema,
  siteSettingsSchema,
} from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'HBN Pharma CMS',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'eco5nq0w',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Nội dung HBN Pharma')
          .items([
            S.listItem()
              .title('Cài đặt Website & Liên hệ')
              .schemaType('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('Bài viết / Tin tức').schemaType('post').child(S.documentTypeList('post')),
            S.listItem().title('Sản phẩm').schemaType('product').child(S.documentTypeList('product')),
            S.divider(),
            S.listItem().title('Đội ngũ').schemaType('teamMember').child(S.documentTypeList('teamMember')),
            S.listItem().title('Đối tác').schemaType('partner').child(S.documentTypeList('partner')),
            S.listItem().title('Chứng nhận').schemaType('certification').child(S.documentTypeList('certification')),
          ]),
    }),
  ],
  schema: {
    types: [siteSettingsSchema, productSchema, postSchema, teamMemberSchema, partnerSchema, certificationSchema],
  },
});
