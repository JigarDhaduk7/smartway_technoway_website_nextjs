import { MetadataRoute } from 'next'
import { getData } from '../lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://smartwaytechnoway.com' // Replace with your actual domain

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/documentation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic service pages
  let servicePages: MetadataRoute.Sitemap = []
  try {
    const response = await getData('services')
    servicePages = response.data.map((service: any) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(service.updatedAt || service.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch (error) {
    console.error('Error fetching services for sitemap:', error)
  }

  // Dynamic blog pages
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const response = await getData('blogs')
    blogPages = response.data
      .filter((blog: any) => blog.isPublished)
      .map((blog: any) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  // Dynamic project pages
  let projectPages: MetadataRoute.Sitemap = []
  try {
    const response = await getData('projects')
    projectPages = response.data
      .filter((project: any) => project.isPublished)
      .map((project: any) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.updatedAt || project.createdAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error)
  }

  return [...staticPages, ...servicePages, ...blogPages, ...projectPages]
}