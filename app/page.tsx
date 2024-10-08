import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import EventsListing from "./components/EventsListing";
import { getEvents } from "./lib";

export default async function Home() {
  const events = await getEvents();

  return (
    <div className="font-[family-name:var(--font-bebasNeue)]">
      <Header />
      <main>
        <Hero />

        <div id="shows" className="py-20 bg-neutral-950 text-white">
          <div className="container">
            <h2 className="text-6xl font-bold mb-6">Upcoming Appearances</h2>
            <EventsListing items={events} />
          </div>
        </div>

        <div id="contact" className="py-20">
          <div className="container">
            <h2 className="text-6xl font-bold mb-6">Booking</h2>
            <ContactForm />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
