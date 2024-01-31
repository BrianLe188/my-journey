/* eslint-disable @next/next/no-img-element */
import { GithubIcon, LinkedinIcon } from "@/assets/icons";
import HiveGrid from "@/components/hive-grid";

export default function Welcome() {
  return (
    <section className="h-auto md:h-screen">
      <div className="container container-padding relative z-40">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center">
            <div>
              <h1 className="font-bold text-5xl mb-2 w-fit my-text-gradient">
                Hello
              </h1>
              <h1 className="font-bold text-5xl mb-2 w-fit pb-1">
                Mình là <span className="my-text-gradient">Lê Việt Anh</span>{" "}
                đây
              </h1>
              <h2 className="font-semibold text-4xl">Web Developer</h2>
              <p className="mt-2">
                Một developer với đam mê ghi lại và chia sẽ quá trình của các dự
                án
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://github.com/BrianLe188"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/viet-anh-le-033b29227/"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center h-96 rounded-full w-96 hexagon-avatar">
              <div
                style={{
                  backgroundImage: 'url("/assets/images/me.jpg")',
                  backgroundSize: "cover",
                  backgroundPositionY: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center mt-4">
          <img
            src="/assets/images/js.png"
            alt="js"
            className="w-auto h-16 rounded-md"
          />
          <img src="/assets/images/ts.png" alt="ts" className="w-auto h-16" />
          <img
            src="/assets/images/nodejs.png"
            alt="nodejs"
            className="w-auto h-16"
          />
          <img
            src="/assets/images/reactjs.png"
            alt="reactjs"
            className="w-auto h-16"
          />
          <img
            src="/assets/images/nextjs.png"
            alt="nextjs"
            className="w-auto h-16"
          />
          <img
            src="/assets/images/tailwindcss.png"
            alt="tailwindcss"
            className="w-auto h-16 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
