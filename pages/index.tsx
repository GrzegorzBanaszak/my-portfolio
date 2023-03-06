import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { Project, projectsList } from "@/data/projecsData";
import { GetStaticProps, NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  projects: Array<Project>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { projects: projectsList } };
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Grzegorz Banaszak Portfolio</title>
        <meta
          name="description"
          content="Portfolio website Grzegorz Banaszak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <Projects projects={projects} />
    </>
  );
};

export default Home;
