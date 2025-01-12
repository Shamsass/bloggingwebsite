// ** @type {import('next').NextConfig} */
//  const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",        
//          pathname:  "/blogging", // Allows all paths
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",        
         pathname:  "/**", // Allows all paths
      },
    ],
  },
};

export default nextConfig