import { SitemapStream, streamToPromise } from 'sitemap';  // Correct import
import fs from 'fs';
import path from 'path';

// Define the pages of your site
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/steps', changefreq: 'monthly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/all-templates', changefreq: 'monthly', priority: 0.7 },
  { url: '/my-resumes', changefreq: 'monthly', priority: 0.6 },
  { url: '/user-profile', changefreq: 'monthly', priority: 0.5 },
  // Add any other pages of your website here
];

// Create a writable stream for the sitemap.xml file
const sitemapStream = new SitemapStream({ hostname: 'https://stylo-resume-builder.vercel.app' });

// Add URLs to the stream
pages.forEach(page => sitemapStream.write(page));

// End the stream
sitemapStream.end();

// Convert the stream to a promise and save the result as an XML file
streamToPromise(sitemapStream).then((sm) => {
  fs.writeFileSync(path.resolve('public/sitemap.xml'), sm.toString());
  console.log('Sitemap generated successfully!');
});
