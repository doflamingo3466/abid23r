import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  PartnerStrip,
  Modules,
  Matrix,
  CaseStudies,
} from "./components/Sections";
import AuditForm from "./components/AuditForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PartnerStrip />
        <Modules />
        <Matrix />
        <CaseStudies />
        <AuditForm />
      </main>

      <Footer />
    </>
  );
}

export default App;