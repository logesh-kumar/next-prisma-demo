import React from "react";
import { prisma } from "lib/prisma";
import { ProjectList } from "./components/project-list";

async function getData() {
  // await new Promise((resolve) => setTimeout(() => resolve(null), 3000));
  const projects = await prisma.project.findMany();

  return projects;
}

export default async function Projects() {
  const projects = await getData();
  return (
    <div>
      <h1>Project page</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
