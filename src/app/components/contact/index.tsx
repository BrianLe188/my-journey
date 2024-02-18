import { Button, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import { MY_EMAIL, MY_PHONE } from "@/configs/infor";

export default function Contact() {
  const [formValue, setFormValue] = useState({
    subject: "",
    text: "",
  });

  function handleChange(key: keyof typeof formValue, value: string) {
    setFormValue((state) => ({
      ...state,
      [key]: value,
    }));
  }

  return (
    <section id="contact">
      <div className="container container-padding relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="font-bold text-3xl my-text-gradient">Contact me</h2>
            <div className="mt-5">
              <p className="mb-2">
                Email: <span>{MY_EMAIL}</span>
              </p>
              <p>
                Phone: <span>+84 {MY_PHONE}</span>
              </p>
            </div>
          </div>
          <div>
            <p>Nếu có bất kỳ câu hỏi nào. Vui lòng gửi mail cho mình nhé!</p>
            <div className="mt-6">
              <TextInput
                placeholder="Nhập tiêu đề"
                className="mb-4"
                value={formValue.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
              />
              <Textarea
                placeholder="Nhập nội dung"
                className="mb-4"
                value={formValue.text}
                onChange={(e) => handleChange("text", e.target.value)}
              />
              <Link
                href={`mailto:${MY_EMAIL}?subject=${formValue.subject}&body=${formValue.text}`}
              >
                <Button className="my-bg-gradient w-full">Gửi</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
