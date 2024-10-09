import Link from 'next/link'
import { Facebook, Github, Globe, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">AI Central</h3>
            <p className="text-gray-400">Empowering businesses with cutting-edge AI solutions</p>
            <p className="text-gray-400">AICentral © 2018–{currentYear}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><Link href="/services" className="hover:text-white transition duration-300">Services</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-white transition duration-300">About Us</Link></li>
              <li className="mb-2"><Link href="/contact" className="hover:text-white transition duration-300">Contact</Link></li>
              <li className="mb-2"><Link href="/careers" className="hover:text-white transition duration-300">Careers</Link></li>
              <li className="mb-2"><Link href="/products" className="hover:text-white transition duration-300">Products</Link></li>
              <li className="mb-2"><Link href="/research" className="hover:text-white transition duration-300">Research</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Contact Us</h3>
            <p className="text-gray-400 mb-2 flex items-center"><Globe className="mr-2 h-4 w-4" /> Main Road, Cape Town, 7700</p>
            <p className="text-gray-400 mb-2 flex items-center"><svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> +27 81 252 7098</p>
            <p className="text-gray-400 mb-2 flex items-center"><svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg> hi@aicentral.co.za</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/AICentral_SA" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/aicentral_sa/" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@AICentralSA" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/aicentral" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://aicentral.co.za/" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Globe className="h-6 w-6" />
              </a>
              <a href="https://github.com/AICentralSA" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@aicentral.co.za" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://www.facebook.com/AICentral.co.za" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer