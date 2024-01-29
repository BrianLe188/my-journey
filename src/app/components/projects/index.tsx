"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type Project } from "@/utils/types";

/* eslint-disable @next/next/no-img-element */
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

  return (
    <section id="projects" className="container mt-3">
      <h2 className="font-bold text-3xl my-text-gradient">Projects</h2>
      <hr className="my-3" />
      <div className="grid grid-cols-3 gap-3">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md overflow-hidden rounded-md hover:bg-slate-100 cursor-pointer hover:scale-110 transition-all duration-500 hover:shadow-blue-600"
          >
            <Link href={`/projects/${item.key}`}>
              <img
                src={item.thumbnail}
                alt={item.name}
                className="max-h-52 min-h-52 w-full"
              />
            </Link>
            <div className="p-2 relative h-56">
              <p className="pt-1 pb-2">
                {item.name} ({item.status})
              </p>
              <p className="text-xs">{item.description}</p>
              <ul className="flex gap-2 my-2">
                {item.techs.map((i) => (
                  <li key={i}>
                    <img
                      src={`/assets/images/${i}.png`}
                      alt={i}
                      className="w-auto h-5"
                    />
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 gap-2 mt-2 absolute bottom-0 left-0 right-0 p-2">
                <Link href={item.link}>
                  <Button className="bg-white border-blue-600 text-blue-600 hover:!bg-gray-50 w-full">
                    Try
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
