import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { Project, projectsList } from "@/data/projecsData";
import { GetStaticProps, NextPage } from "next";
import Contact from "@/components/Contact";
import { SectionType, skillsData } from "@/data/skillsData";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  projects: Array<Project>;
  skills: Array<SectionType>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { projects: projectsList, skills: skillsData } };
};

const Home: NextPage<HomeProps> = ({ projects, skills }) => {
  return (
    <>
      <Head>
        <title>Grzegorz Banaszak Portfolio</title>
        <meta
          name="description"
          content="Grzegorz Banaszak Portfolio - about me,skills and projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills data={skills} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
};

export default Home;
