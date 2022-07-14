import Layout from "../components/Layout";
import Name from "../components/sections/Name";
import About from "../components/sections/About";
import Technologies from "../components/sections/Technologies";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";


export default function Home() {
  return (
    <Layout>
      <Name />
      <About />
      <Technologies />
      <Experience />
      <Projects />
    </Layout>
  );
}
