import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blogs/", ""),
    },
  },
}));

export const OpenSource = defineDocumentType(() => ({
  name: "OpenSource",
  filePathPattern: "opensources/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("opensources/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, OpenSource],
});
