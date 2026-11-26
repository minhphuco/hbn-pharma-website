import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// ===== GROQ Queries =====

export const QUERIES = {
  // All products
  products: `*[_type == "product"] | order(order asc) {
    _id,
    name,
    nameEn,
    slug,
    category,
    shortDesc,
    shortDescEn,
    image,
    isFeatured,
    isNew
  }`,

  // Products by category
  productsByCategory: (category: string) => `*[_type == "product" && category == "${category}"] | order(order asc) {
    _id,
    name,
    nameEn,
    slug,
    category,
    shortDesc,
    shortDescEn,
    image,
    isFeatured
  }`,

  // Single product
  productBySlug: `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    nameEn,
    slug,
    category,
    shortDesc,
    shortDescEn,
    fullDesc,
    fullDescEn,
    ingredients,
    ingredientsEn,
    uses,
    usesEn,
    dosage,
    dosageEn,
    warnings,
    warningsEn,
    image,
    gallery,
    registrationNumber,
    manufacturer
  }`,

  // All news/posts
  posts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    publishedAt,
    category,
    image,
    readTime
  }`,

  // Single post
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    body,
    bodyEn,
    publishedAt,
    category,
    image,
    readTime,
    author
  }`,

  // Team members
  team: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    roleEn,
    photo,
    bio,
    bioEn
  }`,

  // Partners
  partners: `*[_type == "partner"] | order(order asc) {
    _id,
    name,
    logo,
    website
  }`,

  // Certifications
  certifications: `*[_type == "certification"] | order(order asc) {
    _id,
    name,
    nameEn,
    issuedBy,
    image,
    validUntil
  }`,
};
