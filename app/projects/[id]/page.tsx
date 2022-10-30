import React from "react";
import { prisma } from "lib/prisma";

async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return project;
}

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProjectById(params.id);
  return (
    <div>
      <strong>
        {project.name} - {project.id}
      </strong>
    </div>
  );
}
