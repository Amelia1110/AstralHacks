/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers(){
    return [
      {
        source:"/gsi/client",
        headers:[
          {key: "Cross-Origin-Opener-Policy", value: "same-origin"}
        ]
      }
    ]
  }
}

module.exports = nextConfig
