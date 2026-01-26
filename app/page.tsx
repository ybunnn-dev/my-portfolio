import Navbar from "./components/navbar"; // Adjust path if needed
import MainPage from "./sections/mainpage";
import About from "./sections/about";
import TechStacks from "./sections/tech_stacks";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-light_gradient to-dark_gradient text-white">
      <Navbar />

      <main className="flex w-full flex-col  px-6 sm:px-16 px-4 sm:px-16 xl:px-[10rem]">
    
        <MainPage id="home" />
        
        <About id="about" />
        
        <TechStacks id="tech-stacks" />
        
        <Projects id="projects" />

      </main>
    </div>
  );
}