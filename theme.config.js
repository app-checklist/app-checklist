export default {
  repository: 'https://github.com/app-checklist/app-checklist',
  docsRepository: 'https://github.com/app-checklist/app-checklist',
  branch: 'main',
  path: '/',
  titleSuffix: ' – App Checklist 📱 ✅',
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true, // footer also toggles nextLinks & prevLinks, footerText & footerEditOnGitHubLink
  nextLinks: true,
  prevLinks: true,
  footerText: (
    <>
      <span>{new Date().getFullYear()} © Jonas Uekötter. Follow on <a href="https://twitter.com/ue_man">Twitter</a></span>
      
      <p><a href="https://github.com/app-checklist/app-checklist/discussions/categories/feedback">Give Feedback</a></p>
    </>
  ),
  footerEditOnGitHubLink: true,
  logo: (
    <>
      <span className="mr-2 text-2xl font-extrabold hidden md:inline">App Checklist 📱 ✅</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📱</text></svg>"></link>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="App Checklist 📱 ✅ - The ultimative App Checklist" />
      <meta name="og:description" content="App Checklist 📱 ✅ - The ultimative App Checklist" />
      <meta name="og:title" content="App Checklist 📱 ✅ - The ultimative App Checklist" />
      <meta name="apple-mobile-web-app-title" content="App Checklist 📱 ✅" />
    </>
  )
}