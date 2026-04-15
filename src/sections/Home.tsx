'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Settings, ShoppingBag, Phone, Home as HomeIcon, Building2, Wrench } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "Réduction des factures",
    description: "Réduisez jusqu'à 80% vos dépenses en électricité dès le premier mois.",
    icon: Zap,
  },
  {
    title: "Installation Rapide",
    description: "Nos techniciens qualifiés assurent une mise en service sécurisée en un temps record.",
    icon: Settings,
  },
  {
    title: "Matériel Certifié",
    description: "Nous n'utilisons que des équipements de haute qualité garantis et durables.",
    icon: ShieldCheck,
  },
  {
    title: "Service Après-Vente",
    description: "Un accompagnement continu pour assurer la performance de votre installation.",
    icon: Phone,
  },
];

const quickServices = [
  {
    title: "Installation Résidentielle",
    description: "Solutions sur mesure pour maisons et villas, garantissant autonomie et économies.",
    icon: HomeIcon,
    link: "/services"
  },
  {
    title: "Solutions Entreprises",
    description: "Optimisez vos coûts opérationnels avec des installations solaires industrielles.",
    icon: Building2,
    link: "/services"
  },
  {
    title: "Vente d'Équipements",
    description: "Large gamme de panneaux, batteries et onduleurs de marques certifiées.",
    icon: ShoppingBag,
    link: "/produits"
  },
  {
    title: "Maintenance & SAV",
    description: "Service de dépannage rapide et entretien régulier de vos systèmes.",
    icon: Wrench,
    link: "/services"
  },
];

const productPreview = [
  { name: "Générateurs Hybrides", image: "/images/generateur-hybride-3000w.jpg" },
  { name: "Batteries Lithium", image: "/images/batteries-lithium.png" },
  { name: "Panneaux Solaires", image: "/images/panneaux-solaires.png" },
  { name: "Onduleurs", image: "/images/onduleurs.png" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-background.png"
            alt="Solar Panels"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-solar-orange text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Expert Solaire à Douala
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Installation de solutions solaires à <span className="text-solar-orange">Douala</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Passez au solaire et réduisez vos factures d'électricité avec des installations professionnelles adaptées à vos besoins au Cameroun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-solar-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-solar-orange/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-solar-orange/20"
              >
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/237687627120"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir Ado Solar Energy ?</h2>
            <p className="text-gray-600 text-lg">
              Nous offrons des solutions énergétiques durables pour transformer votre quotidien et sécuriser votre avenir énergétique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-solar-orange/10 group"
              >
                <div className="bg-solar-orange/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-solar-orange group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8 text-solar-orange group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Services Rapides</h2>
              <p className="text-gray-600 text-lg">
                Des solutions expertes pour tous vos besoins en énergie solaire au Cameroun.
              </p>
            </div>
            <Link
              href="/services"
              className="bg-solar-dark text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-colors"
            >
              Tous nos services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="bg-solar-orange p-3 rounded-xl w-fit mb-6 text-white">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-solar-orange font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-solar-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Équipements Solaires</h2>
              <p className="text-gray-400 text-lg">
                Découvrez notre sélection de matériel haute performance pour vos projets solaires.
              </p>
            </div>
            <Link
              href="/produits"
              className="flex items-center gap-2 text-solar-orange font-bold hover:gap-4 transition-all"
            >
              Voir tous les produits <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productPreview.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <Link href="/produits" className="text-solar-orange text-sm font-bold flex items-center gap-1">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-solar-orange"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Transformez votre toit en source d'énergie dès aujourd'hui.
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Rejoignez la révolution solaire au Cameroun et profitez d'une énergie propre, fiable et économique.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-solar-orange px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              Demander un devis gratuit
            </Link>
            <div className="flex flex-col items-start gap-1 text-white">
              <span className="text-sm opacity-80">Appelez-nous</span>
              <span className="text-2xl font-bold">+237 687 62 71 20</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
