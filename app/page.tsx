import Image from "next/image";
import Portada from "./components/Portada";
import CalendarGithub from "./components/CalendarGithub";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Background />
      <Portada />
      <CalendarGithub />
      <Skills />
      <Proyects />
    </div>
  );
}
