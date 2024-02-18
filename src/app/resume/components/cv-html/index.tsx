import { AddressIcon, EmailIcon, LinkIcon, PhoneIcon } from "@/assets/icons";
import {
  MY_ADDRESS,
  MY_EMAIL,
  MY_PHONE,
  MY_WEBSITE_LINK,
  CV,
  MY_NAME_EN,
} from "@/utils/constant";
import { forwardRef } from "react";

export default forwardRef(function CVHtml(props, ref: any) {
  return (
    <main ref={ref} id="resume" className="bg-white relative z-40 p-5">
      <section id="info" className="pb-10">
        <h1 className="text-2xl font-semibold text-center mb-4">
          {MY_NAME_EN}
        </h1>
        <div className="flex gap-3 justify-center items-center">
          <div className="flex items-center">
            <PhoneIcon width={14} height={14} />
            <p className="text-xs ml-1">+84 {MY_PHONE}</p>
          </div>
          <div className="flex items-center">
            <EmailIcon width={14} height={14} />
            <p className="text-xs ml-1">{MY_EMAIL}</p>
          </div>
          <div className="flex items-center">
            <LinkIcon width={14} height={14} />
            <p className="text-xs ml-1">{MY_WEBSITE_LINK}</p>
          </div>
          <div className="flex items-center">
            <AddressIcon width={14} height={14} />
            <p className="text-xs ml-1">{MY_ADDRESS}</p>
          </div>
        </div>
      </section>
      <section id="objective" className="pb-5">
        <h2 className="border-b border-gray-500 pb-1">OBJECTIVE</h2>
        <p className="text-xs mt-5">
          {CV.objective.map((e, ei) => (
            <p key={ei} className="leading-5">
              {e}
            </p>
          ))}
        </p>
      </section>
      <section id="education" className="pb-5">
        <h2 className="border-b border-gray-500 pb-1">EDUCATIONS</h2>
        <div className="mt-5">
          {CV.educations.map((e, i) => (
            <div key={i} className="work text-xs border-b border-gray-100 pb-3">
              <div className="flex justify-between mb-3 w-4/5">
                <p className="font-semibold">{e.u_name}</p>
                <p>
                  {e.from} - {e.to}
                </p>
              </div>
              <p>{e.major}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="skills" className="pb-5">
        <h2 className="border-b border-gray-500 pb-1">SKILLS</h2>
        <div className="mt-5 grid grid-cols-4 text-xs border-b border-gray-100 pb-2">
          <p className="col-span-1">Languages</p>
          <p className="col-span-3">{CV.skills.languages.join(", ")}</p>
        </div>
        <div className="mt-5 grid grid-cols-4 text-xs border-b border-gray-100 pb-2">
          <p className="col-span-1">Backend</p>
          <p className="col-span-3">{CV.skills.backend.join(", ")}</p>
        </div>
        <div className="mt-5 grid grid-cols-4 text-xs border-b border-gray-100 pb-2">
          <p className="col-span-1">Frontend</p>
          <p className="col-span-3">{CV.skills.frontend.join(", ")}</p>
        </div>
      </section>
      <section id="work-experience" className="pb-5">
        <h2 className="border-b border-gray-500 pb-1">WORK EXPERIENCES</h2>
        <div className="mt-5">
          {CV.work_experiences.map((e, ei) => (
            <div
              key={ei}
              className="work text-xs border-b border-gray-100 pb-3 mt-5"
            >
              <div className="flex justify-between mb-3 w-4/5">
                <p className="font-semibold">{e.c_name}</p>
                <p>
                  {e.from} - {e.to}
                </p>
              </div>
              <p>{e.position}</p>
              <div className="grid grid-cols-4 mt-3">
                <p>Responsibilities</p>
                <div className="col-span-3">
                  <ul className="list-disc">
                    {e.responsibilities.map((r, ri) => (
                      <li key={ri}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-3">
                <p>Projects</p>
                <div className="col-span-3">
                  <ul className="list-disc">
                    {e.projects.map((p, pi) => (
                      <li key={pi}>
                        <p className="font-semibold">{p.p_name}</p>
                        <div className="grid grid-cols-12 mt-1">
                          <p className="col-span-2">URLs:</p>
                          <ul>
                            {p.urls.map((u, ui) => (
                              <li key={ui}>{u}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-12 mt-1">
                          <p className="col-span-2">Technologies:</p>
                          <p className="col-span-10">
                            {p.technologies.join(", ")}
                          </p>
                        </div>
                        <p className="mt-1">
                          {p.descriptions.map((d, di) => (
                            <p key={di}>{d}</p>
                          ))}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
});
