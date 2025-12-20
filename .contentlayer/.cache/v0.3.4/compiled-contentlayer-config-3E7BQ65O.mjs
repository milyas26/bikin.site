// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    thumbnail: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blogs/", "")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    thumbnail: { type: "string", required: false },
    techStack: { type: "list", of: { type: "string" }, required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("projects/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Project]
});
export {
  Blog,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3E7BQ65O.mjs.map
