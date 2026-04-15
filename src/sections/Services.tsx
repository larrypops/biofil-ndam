'use client';

import { motion } from 'motion/react';
import { Zap, ShoppingBag, Wrench, Lightbulb, Home, Building2, Store, CloudOff } from 'lucide-react';

const services = [
  {
    title: "Installation Solaire",
    description: "Installation complète et sécurisée pour tous types de structures.",
    icon: Zap,
    items: ["Maisons", "Entreprises", "Boutiques", "Sites isolés"],
    color: "bg-orange-500"
  },
  {
    title: "Vente d'Équipements",
    description: "Matériel certifié et performant pour vos projets.",
    icon: ShoppingBag,
    items: ["Panneaux solaires", "Onduleurs", "Batteries lithium", "Générateurs hybrides"],
    color: "bg-yellow-500"
  },
  {
    title: "Maintenance & Dépannage",
    description: "Assurez la longévité de vos installations solaires.",
    icon: Wrench,
    items: ["Diagnostic système", "Réparation", "Optimisation", "Nettoyage panneaux"],
    color: "bg-blue-500"
  },
  {
    title: "Étude & Conseil",
    description: "Analyse de vos besoins énergétiques pour une solution optimale.",
    icon: Lightbulb,
    items: ["Audit énergétique", "Dimensionnement", "Planification", "Estimation retour sur investissement"],
    color: "bg-green-500"
  }
];

const sectors = [
  { name: "Résidentiel", icon: Home, desc: "Énergie propre pour votre foyer." },
  { name: "Commercial", icon: Building2, desc: "Réduisez les coûts de votre entreprise." },
  { name: "Commerce", icon: Store, desc: "Alimentez votre boutique sans coupure." },
  { name: "Zones Rurales", icon: CloudOff, desc: "L'énergie partout, même sans réseau." },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-solar-orange py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nos Services Solaires au Cameroun
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Des solutions complètes pour répondre à tous vos besoins énergétiques, de la conception à la maintenance.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-solar-orange/10"
              >
                <div className={`${service.color} text-white p-6 rounded-2xl h-fit shrink-0 shadow-lg`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-solar-orange"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-solar-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Des solutions pour chaque secteur</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nous adaptons nos technologies pour répondre aux défis spécifiques de chaque environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-solar-orange p-4 rounded-full w-fit mx-auto mb-6">
                  <sector.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
                <p className="text-gray-400 text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Processus d'Installation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
            {[
              { step: "01", title: "Consultation", desc: "Analyse de vos besoins et audit sur site." },
              { step: "02", title: "Conception", desc: "Planification technique et devis détaillé." },
              { step: "03", title: "Installation", desc: "Mise en place par nos experts certifiés." },
              { step: "04", title: "Suivi", desc: "Maintenance et monitoring de performance." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 text-center">
                <div className="w-12 h-12 bg-solar-orange text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-solar-orange/30">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
