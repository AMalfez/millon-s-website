import urlBuilder from '@sanity/image-url'
import { client } from "@/sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? urlBuilder({ projectId, dataset }).image(source)
    : null;

// Barebones lazy-loaded image component
const SampleImageComponent = ({value, isInline}) => {
  return (
    <img
      src={urlFor(value)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      className={`${isInline ? 'inline-block' : 'block'} w-full h-auto rounded-lg`}
    />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}
export default components