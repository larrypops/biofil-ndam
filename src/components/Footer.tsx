import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-solar-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo Ado Solar Energy"
                className="h-14 w-auto rounded-lg bg-white p-1 shadow-sm"
              />
              <span className="text-xl font-display font-extrabold tracking-tight">
                ADO SOLAR <span className="text-solar-orange">ENERGY</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire de confiance pour l'énergie solaire au Cameroun. 
              Installation professionnelle et équipements certifiés.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-solar-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-solar-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-solar-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-solar-orange pl-3">Liens Rapides</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-solar-orange transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-solar-orange transition-colors">À propos</Link></li>
              <li><Link href="/services" className="hover:text-solar-orange transition-colors">Nos Services</Link></li>
              <li><Link href="/produits" className="hover:text-solar-orange transition-colors">Catalogue Produits</Link></li>
              <li><Link href="/contact" className="hover:text-solar-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-solar-orange pl-3">Nos Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Installation Résidentielle</li>
              <li>Solutions Entreprises</li>
              <li>Maintenance & Dépannage</li>
              <li>Vente d'Équipements</li>
              <li>Étude & Conseil</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-solar-orange pl-3">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-solar-orange shrink-0" />
                <span>Bepanda entrée lycée, Douala, Cameroun</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-solar-orange shrink-0" />
                <span>+237 687 62 71 20</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-solar-orange shrink-0" />
                <span>adosolarenergy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ado Solar Energy. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
