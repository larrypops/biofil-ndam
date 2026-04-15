'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ShoppingCart, Zap, Battery, Sun, RefreshCw, Filter } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tous les produits', icon: Filter },
  { id: 'generators', name: 'Générateurs Hybrides', icon: Zap },
  { id: 'panels', name: 'Panneaux Solaires', icon: Sun },
  { id: 'inverters', name: 'Onduleurs', icon: RefreshCw },
  { id: 'batteries', name: 'Batteries Lithium', icon: Battery },
];

const products = [
  // Générateurs Hybrides
  { id: 1, category: 'generators', name: 'Générateur Hybride 500W', power: '500W', desc: 'Solution idéale pour alimenter votre maison en cas de coupure.', features: ['Silencieux', 'Économie d\'énergie', 'Installation facile'], image: '/images/generateur-hybride-500w.jpg' },
  { id: 2, category: 'generators', name: 'Générateur Hybride 1000W', power: '1000W', desc: 'Performance accrue pour vos appareils essentiels.', features: ['Haute efficacité', 'Compact', 'Durable'], image: '/images/generateur-hybride-1000w.jpg' },
  { id: 3, category: 'generators', name: 'Générateur Hybride 3000W', power: '3000W', desc: 'Puissance industrielle pour entreprises et grandes maisons.', features: ['Triphasé disponible', 'Monitoring intelligent', 'Garantie 5 ans'], image: '/images/generateur-hybride-3000w.jpg' },
  
  // Panneaux Solaires
  { id: 4, category: 'panels', name: 'Panneau Solaire Mono 450W', power: '450W', desc: 'Panneaux haute performance pour particuliers et entreprises.', features: ['Cellules Monocristallines', 'Résistant aux intempéries', 'Rendement 21%'], image: '/images/panneaux-solaires.jpg' },
  { id: 5, category: 'panels', name: 'Kit Solaire Résidentiel', power: 'Variable', desc: 'Ensemble complet prêt à l\'emploi.', features: ['Supports inclus', 'Câblage fourni', 'Installation guidée'], image: '/images/panneaux-solaires.jpg' },
  
  // Onduleurs
  { id: 6, category: 'inverters', name: 'Onduleur Pur Sinus 3KVA', power: '3KVA', desc: 'Conversion efficace pour alimentation stable.', features: ['Protection surtension', 'Écran LCD', 'Mode éco'], image: '/images/onduleurs.jpg' },
  
  // Batteries
  { id: 7, category: 'batteries', name: 'Batterie Lithium 100Ah', power: '100Ah', desc: 'Stockage d\'énergie durable et sécurisé.', features: ['Longue durée de vie', 'Charge rapide', 'Léger'], image: '/images/batteries-lithium.jpg' },
  { id: 8, category: 'batteries', name: 'Batterie Lithium 200Ah', power: '200Ah', desc: 'Capacité maximale pour autonomie prolongée.', features: ['BMS intégré', 'Sans entretien', 'Haute densité'], image: '/images/batteries-lithium.jpg' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander le produit : ${productName}`);
    window.open(`https://wa.me/237687627120?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Équipements Solaires</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Du matériel de pointe pour une autonomie énergétique totale au Cameroun.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-solar-orange text-white shadow-lg shadow-solar-orange/20' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={72}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-solar-orange shadow-sm">
                      {product.power}
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.desc}</p>
                    
                    <div className="space-y-2 mb-8 flex-grow">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1 h-1 rounded-full bg-solar-orange"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handleOrder(product.name)}
                      className="w-full bg-solar-orange text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-solar-orange/90 transition-colors shadow-lg shadow-solar-orange/10"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Commander via WhatsApp
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
