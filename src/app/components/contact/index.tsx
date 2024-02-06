import { Button, TextInput, Textarea } from "flowbite-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formValue, setFormValue] = useState({
    subject: "",
    email: "",
    content: "",
  });

  function handleChange(key: keyof typeof formValue, value: string) {
    setFormValue((state) => ({
      ...state,
      [key]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="contact">
      <div className="container container-padding relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="font-bold text-3xl my-text-gradient">Contact me</h2>
            <div className="mt-5">
              <p className="mb-2">
                Email: <span>anhkun123456@gmail.com</span>
              </p>
              <p>
                Phone: <span>+84 828 030 359</span>
              </p>
            </div>
          </div>
          <div>
            <p>Nếu có bất kỳ câu hỏi nào. Vui lòng gửi mail cho mình nhé!</p>
            <form onSubmit={handleSubmit} className="mt-6">
              <TextInput
                placeholder="Nhập tiêu đề"
                className="mb-4"
                value={formValue.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
              />
              <TextInput
                placeholder="Nhập email của bạn"
                className="mb-4"
                type="email"
                value={formValue.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <Textarea
                placeholder="Nhập nội dung"
                className="mb-4"
                value={formValue.content}
                onChange={(e) => handleChange("content", e.target.value)}
              />
              <Button type="submit">Gửi</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
