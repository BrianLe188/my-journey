/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <section>
      <div className="container container-padding relative z-40 pb-10">
        <div className="grid grid-cols-2 mb-10">
          <div>
            <h4 className="font-bold">Chính sách và điều khoản</h4>
            <ul className="mt-2">
              <li>Chính sách bảo mật</li>
              <li>Bản quyền</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Giới thiệu</h4>
            <p className="mt-2">
              Phát triển bởi Lê Việt Anh vào năm 2024, là blog cá nhân chia sẻ
              quá trình phát triển dự án. Những dự án được ghi chép lại như một
              nhật ký để tích luỹ kinh nghiệm.
            </p>
          </div>
        </div>
        <hr />
        <div className="mt-10">
          <p className="text-center">Copyright © 2024 Lê Việt Anh</p>
          <ul className="flex gap-3 justify-center mt-10">
            <li>
              <img
                src="/assets/images/tailwindcss.png"
                alt="tailwindcss"
                className="h-10 w-auto rounded-lg"
              />
            </li>
            <li>
              <img
                src="/assets/images/nextjs.png"
                alt="nextjs"
                className="h-10 w-auto rounded-lg"
              />
            </li>
            <li>
              <img
                src="/assets/images/vercel.png"
                alt="vercel"
                className="h-10 w-auto rounded-lg"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
