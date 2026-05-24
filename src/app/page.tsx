import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main className="bg-[#030014] min-h-screen">
      <Hero />
      <Impact />
      <Skills />
    </main>
  );
}