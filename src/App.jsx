/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

/**
 * Conponents
 */
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App;