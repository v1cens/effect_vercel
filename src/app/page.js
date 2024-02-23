"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "../components/project";
import Modal from "../components/modal";

const projects = [
  {
    title: "Data.ai",
    src: "c2montreal.png",
    color: "#400000",
    link: "https://data.ai",
  },
  {
    title: "Pixloc",
    src: "officestudio.png",
    color: "#8C8C8C",
    link: "https://pixloc.fr",
  },
  {
    title: "Okho",
    src: "locomotive.png",
    color: "#EFE8D3",
    link: "https://okho-architectures.fr/",
  },
  {
    title: "Grenadine",
    src: "silencio.png",
    color: "#706D63",
    link: "https://grenadinehair.com/",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const activeProject = projects[modal.index];

  return (
    <main className={styles.main}>
      <img className={styles.logo} src="/logo.svg" alt="Logo" />
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} activeProject={activeProject} />
    </main>
  );
}
