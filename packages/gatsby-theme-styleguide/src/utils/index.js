import slugify from '@sindresorhus/slugify'

export const setSlugify = (slug) => {
  return slugify(slug, { preserveCharacters: ['/'] })
}
