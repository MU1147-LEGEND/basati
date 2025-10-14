import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Departments } from "./components/Departments";
import { Faculty } from "./components/Faculty";
import { Facilities } from "./components/Facilities";
import { Admissions } from "./components/Admissions";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-16">
                <Hero />
                <About />
                <Departments />
                <Facilities />
                <Faculty />
                <Admissions />
            </main>
            <Footer />
        </div>
    );
}
