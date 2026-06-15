import PageLayout from "../components/layout/PageLayout";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack/TechStack";
import WhatIOffer from "../components/sections/WhatIOffer";
import About from "../components/sections/WoIam";


const Home = () => {
  return (
    <PageLayout>
        <div>
             <Hero />
        <About/>
        <TechStack/>
        <WhatIOffer/>
        <Contact/>

        </div>
       
    </PageLayout>
  );
};

export default Home;
