import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">Page introuvable</h1>
      <p className="mb-8 text-gray-600">La page demandee n'existe pas ou a ete deplacee.</p>
      <Link
        href="/"
        className="rounded-full bg-solar-orange px-6 py-3 font-bold text-white transition-colors hover:bg-solar-orange/90"
      >
        Retour a l'accueil
      </Link>
    </div>
  );
}
