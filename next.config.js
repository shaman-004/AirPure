const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Get the repository name from the GitHub environment variables
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  trailingSlash: true, // Ensures URLs end with a trailing slash
  assetPrefix: assetPrefix, // Prefixes asset URLs with the repository name
  basePath: basePath, // Sets the base path to the repository name
  images: {
    unoptimized: true, // Disable Next.js image optimization for static site exports
  },
};
