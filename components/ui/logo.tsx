import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Script
        src="https://unpkg.com/feather-icons"
        strategy="beforeInteractive"
      />
      <Image
        src="/images/logo1.png" // Provide the relative path to your logo image
        alt="Cruip Logo" // Add a descriptive alt text for accessibility
        width={246} // Set the desired width of your logo
        height={246} // Set the desired height of your logo
      />
    </Link>
  );
}
