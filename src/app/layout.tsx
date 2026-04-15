import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Layout from '@/components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ado Solar Energy',
  description:
    "Installation de solutions solaires a Douala - Energie fiable et durable. Reduisez vos factures d'electricite avec Ado Solar Energy.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
