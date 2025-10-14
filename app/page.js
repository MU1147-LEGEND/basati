import { About } from "./components/About";
import { Admissions } from "./components/Admissions";
import { Departments } from "./components/Departments";
import { Facilities } from "./components/Facilities";
import { Faculty } from "./components/Faculty";
import { Hero } from "./components/Hero";

export default function App() {
    return (
        <main className="pt-16">
            <Hero />
            <About />
            <Departments />
            <Facilities />
            <Faculty />
            <Admissions />
        </main>
    );
}
