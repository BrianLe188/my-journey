import { AddressIcon, EmailIcon, LinkIcon, PhoneIcon } from "@/assets/icons";
import {
  MY_ADDRESS,
  MY_EMAIL,
  MY_PHONE,
  MY_WEBSITE_LINK,
} from "@/configs/infor";
import { forwardRef } from "react";

export default forwardRef(function CVHtml(props, ref: any) {
  return (
    <main ref={ref} className="bg-white relative z-40 p-5">
      <section id="info" className="pb-10">
        <h1 className="text-2xl font-semibold text-center">Viet Anh Le</h1>
        <div className="flex gap-3 justify-center items-center">
          <div className="flex items-center">
            <PhoneIcon width={14} height={14} />
            <span className="text-xs ml-1">+84 {MY_PHONE}</span>
          </div>
          <div className="flex items-center">
            <EmailIcon width={14} height={14} />
            <span className="text-xs ml-1">{MY_EMAIL}</span>
          </div>
          <div className="flex items-center">
            <LinkIcon width={14} height={14} />
            <span className="text-xs ml-1">{MY_WEBSITE_LINK}</span>
          </div>
          <div className="flex items-center">
            <AddressIcon width={14} height={14} />
            <span className="text-xs ml-1">{MY_ADDRESS}</span>
          </div>
        </div>
      </section>
      <section id="objective" className="pb-5">
        <h2 className="border-b border-gray-500">OBJECTIVE</h2>
        <p className="text-xs mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis
          fugit, quo excepturi maxime officia, perferendis dolorum et vel
          mollitia error vero laudantium molestiae sunt alias tenetur voluptas
          nemo magnam.
        </p>
      </section>
      <section id="education" className="pb-5">
        <h2 className="border-b border-gray-500">EDUCATION</h2>
        <div className="mt-5">
          <div className="work text-xs border-b border-gray-100 pb-3">
            <div className="flex justify-between mb-3 w-4/5">
              <p>Đại học Duy Tân</p>
              <p>2019 - 2024</p>
            </div>
            <p>Software Engineering</p>
          </div>
        </div>
      </section>
      <section id="skills" className="pb-5">
        <h2 className="border-b border-gray-500">SKILLS</h2>
        <div className="mt-5 grid grid-cols-4 text-xs border-b border-gray-100 pb-2">
          <p className="col-span-1">Languages</p>
          <p className="col-span-3">Typescript, Javascript</p>
        </div>
        <div className="mt-5 grid grid-cols-4 text-xs border-b border-gray-100 pb-2">
          <p className="col-span-1">Backend</p>
          <p className="col-span-3">
            Nodejs, Nestjs, Expressjs, Rest API, GraphQL, RabbitMQ, gRPC
          </p>
        </div>
        <div className="mt-5 grid grid-cols-4 text-xs border-b border-gray-100 pb-2">
          <p className="col-span-1">Frontend</p>
          <p className="col-span-3">
            Reactjs, Nextjs, Tailwindcss, Antd, Flowbite
          </p>
        </div>
      </section>
      <section id="work-experience" className="pb-5">
        <h2 className="border-b border-gray-500">WORK EXPERIENCE</h2>
        <div className="mt-5">
          <div className="work text-xs border-b border-gray-100 pb-3">
            <div className="flex justify-between mb-3 w-4/5">
              <p>Công ty DinoTech</p>
              <p>03/2023 - Hiện tại</p>
            </div>
            <p>Fullstack Developer</p>
            <div className="grid grid-cols-4 mt-3">
              <p>Trách nhiệm và vai trò</p>
              <div className="col-span-3">
                <ul className="list-disc">
                  <li className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit maxime aspernatur ipsam quisquam! Suscipit ad nam,
                    impedit mollitia, consequuntur porro, officiis consequatur
                    deleniti dicta corrupti quae autem excepturi vel quisquam.
                  </li>
                  <li className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit maxime aspernatur ipsam quisquam! Suscipit ad nam,
                    impedit mollitia, consequuntur porro, officiis consequatur
                    deleniti dicta corrupti quae autem excepturi vel quisquam.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit maxime aspernatur ipsam quisquam! Suscipit ad nam,
                    impedit mollitia, consequuntur porro, officiis consequatur
                    deleniti dicta corrupti quae autem excepturi vel quisquam.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-4 mt-3">
              <p>Dự án</p>
              <div className="col-span-3">
                <ul className="list-disc">
                  <li className="mb-2">
                    <p className="font-semibold">Typera</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam laboriosam aperiam natus assumenda! Quas laborum,
                      dolores error nam iure ab vel similique, veritatis ipsum
                      mollitia minus asperiores facere nobis est.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">Vdiarybook</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam laboriosam aperiam natus assumenda! Quas laborum,
                      dolores error nam iure ab vel similique, veritatis ipsum
                      mollitia minus asperiores facere nobis est.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});
