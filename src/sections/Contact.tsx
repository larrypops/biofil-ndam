'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    need: 'Installation Solaire',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Nom: ${formData.name}%0ATéléphone: ${formData.phone}%0ABesoin: ${formData.need}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/237687627120?text=${text}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-solar-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contactez <span className="text-solar-orange">Ado Solar Energy</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Nos Coordonnées</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-solar-orange/10 p-4 rounded-2xl h-fit">
                      <MapPin className="w-8 h-8 text-solar-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Localisation</h3>
                      <p className="text-gray-600">Bepanda entrée lycée, Douala, Cameroun</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="bg-solar-orange/10 p-4 rounded-2xl h-fit">
                      <Phone className="w-8 h-8 text-solar-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                      <p className="text-gray-600">+237 687 62 71 20</p>
                      <p className="text-gray-400 text-sm">Disponible du Lundi au Samedi, 8h - 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="bg-solar-orange/10 p-4 rounded-2xl h-fit">
                      <Mail className="w-8 h-8 text-solar-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-gray-600">adosolarenergy@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-solar-orange p-8 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-4">Besoin d'une réponse rapide ?</h3>
                <p className="mb-6 opacity-90">Discutez directement avec un expert sur WhatsApp pour obtenir un devis en quelques minutes.</p>
                <a
                  href="https://wa.me/237687627120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-solar-orange px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Direct
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jean Dupont"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-solar-orange focus:ring-4 focus:ring-solar-orange/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Téléphone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+237 ..."
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-solar-orange focus:ring-4 focus:ring-solar-orange/10 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Votre besoin</label>
                  <select
                    value={formData.need}
                    onChange={(e) => setFormData({...formData, need: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-solar-orange focus:ring-4 focus:ring-solar-orange/10 outline-none transition-all bg-white"
                  >
                    <option>Installation Solaire</option>
                    <option>Achat de Matériel</option>
                    <option>Maintenance / Dépannage</option>
                    <option>Étude & Conseil</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez votre projet..."
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-solar-orange focus:ring-4 focus:ring-solar-orange/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-solar-dark text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl"
                >
                  Envoyer la demande <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <Image
          src="/images/hero-background.jpg"
          alt="Map"
          fill
          sizes="100vw"
          quality={70}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl text-center max-w-xs">
            <MapPin className="w-10 h-10 text-solar-orange mx-auto mb-4" />
            <h3 className="font-bold mb-2">Retrouvez-nous à Douala</h3>
            <p className="text-sm text-gray-500">Bepanda entrée lycée, Douala, Cameroun</p>
          </div>
        </div>
      </section>
    </div>
  );
}
