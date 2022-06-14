import Layout from "../components/Layout";
import Name from "../components/sections/Name";
import About from "../components/sections/About";


export default function Home() {
  return (
    <Layout>
        <Name />
        <About />
      <style jsx>{`
        section {
          padding: 100px 0 0 0;
        }
      `}</style>
    </Layout>
  );
}
