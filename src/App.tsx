import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LeadForm from './components/LeadForm';
import PaymentPortal from './components/PaymentPortal';
import Pricing from './components/Pricing';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-white font-body text-brandDark">
      <Header />
      <main>
        <Hero />
        <Services includeSymptoms />
        <HowItWorks />
        <Pricing />
        <PaymentPortal />
        <About />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
