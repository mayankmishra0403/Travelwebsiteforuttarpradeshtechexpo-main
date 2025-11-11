import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/87e949815092e3406893b62c4c4bcb47dd69c256.png';

export function Footer() {
  const quickLinks = [
    { name: 'About UP', href: '#' },
    { name: 'Tourism Policy', href: '#' },
    { name: 'Travel Guidelines', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const destinations = [
    { name: 'Agra', href: '#' },
    { name: 'Varanasi', href: '#' },
    { name: 'Lucknow', href: '#' },
    { name: 'Ayodhya', href: '#' },
  ];

  const services = [
    { name: 'Tour Packages', href: '#' },
    { name: 'Hotel Booking', href: '#' },
    { name: 'Travel Insurance', href: '#' },
    { name: 'Guide Services', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Darshan360" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Experience the spirit of India's heartland. Where history, culture, and spirituality converge.
            </p>
            <div className="flex gap-3">
              <button className="w-8 h-8 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <a href={destination.href} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>1800 1800 4100</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>tourism@up.gov.in</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>C-13, Vipin Khand, Gomti Nagar, Lucknow</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Uttar Pradesh Tourism. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
