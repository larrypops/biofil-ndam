'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';

const stats = [
  { label: "Installations", value: "500+" },
  { label: "Clients Satisfaits", value: "450+" },
  { label: "Années d'Expérience", value: "5+" },
  { label: "Équipements Vendus", value: "1000+" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-solar-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Votre partenaire en énergie solaire à <span className="text-solar-orange">Douala</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ado Solar Energy est une entreprise spécialisée dans la vente et l'installation de solutions solaires au Cameroun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/equipe.jpg"
                alt="Ado Solar Team"
                width={816}
                height={954}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={76}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-solar-orange p-8 rounded-3xl text-white hidden md:block">
                <p className="text-4xl font-bold mb-1">5+</p>
                <p className="text-sm font-semibold uppercase tracking-wider">Ans d'Expertise</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Notre mission est d'aider les particuliers et les entreprises à accéder à une énergie fiable, économique et durable. 
                  Nous croyons que chaque toit au Cameroun a le potentiel de devenir une centrale électrique propre.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-solar-orange/10 p-3 rounded-xl h-fit">
                    <Users className="w-6 h-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Équipe qualifiée</h3>
                    <p className="text-gray-500 text-sm">Des techniciens experts formés aux dernières technologies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-solar-orange/10 p-3 rounded-xl h-fit">
                    <Target className="w-6 h-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Solutions personnalisées</h3>
                    <p className="text-gray-500 text-sm">Chaque installation est étudiée selon vos besoins réels.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-solar-orange/10 p-3 rounded-xl h-fit">
                    <Award className="w-6 h-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Accompagnement complet</h3>
                    <p className="text-gray-500 text-sm">De l'étude de faisabilité à la maintenance préventive.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-solar-orange/10 p-3 rounded-xl h-fit">
                    <ShieldCheck className="w-6 h-6 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Service après-vente</h3>
                    <p className="text-gray-500 text-sm">Disponibilité garantie pour toute assistance technique.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-solar-orange mb-2">{stat.value}</p>
                <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
