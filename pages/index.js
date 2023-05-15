import { Inter } from 'next/font/google';
import Lectures from '../components/Lectures';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Lectures />
    </main>
  );
}
