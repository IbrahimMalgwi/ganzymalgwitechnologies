import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Industries from './components/sections/Industries';
import Process from './components/sections/Process';
import Portfolio from './components/sections/Portfolio';
import Technologies from './components/sections/Technologies';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Clients from './components/sections/Clients';

function App() {
    return (
        <div className="App min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Industries />
                <Process />
                <Portfolio />
                <Technologies />
                <Testimonials />
                <Contact />
                <Clients />
            </main>
            <Footer />
        </div>
    );
}

export default App;