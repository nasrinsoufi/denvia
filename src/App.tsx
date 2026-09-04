/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import PatientJourney from './components/PatientJourney';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans selection:bg-accent/20">
      <Header />
      <main>
        <Hero />
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Services /></AnimatedSection>
        <AnimatedSection><Doctors /></AnimatedSection>
        <AnimatedSection><Testimonials /></AnimatedSection>
        <AnimatedSection><PatientJourney /></AnimatedSection>
        <AnimatedSection><Blog /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
