import Layout from "../components/Layout";
import Name from "../components/sections/Name";
import About from "../components/sections/About";
import Technologies from "../components/sections/Technologies";
export default function Home() {
  return (
    <Layout>
      <Name />
      <About />
      <Technologies />
    </Layout>
  );
}
