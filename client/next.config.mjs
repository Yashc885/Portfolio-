const nextConfig = {
  images: {
    // Define remotePatterns instead of domains
    // Each pattern object should have a "hostname" key with the domain value
    remotePatterns: [
      { hostname: 'marketplace.canva.com' },
      { hostname: 'cdn.pixabay.com' },
      { hostname: 'picsum.photos' },
      { hostname: 'images.unsplash.com' }
    ],
  },
};

export default nextConfig;
