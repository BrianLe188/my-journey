"use client";
import { useEffect, useState } from "react";
import { type Project } from "@/utils/types";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const res: any = await fetch("data/projects.json");
      const data = await res.json();
      setProjects(data);
    } catch (error) {}
  }

  return <main></main>;
}
