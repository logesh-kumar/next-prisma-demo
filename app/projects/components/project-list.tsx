import Link from "next/link";
import React from "react";

export function ProjectList({ projects }) {
  return (
    <div>
      <h1>Project list</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}> {project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
