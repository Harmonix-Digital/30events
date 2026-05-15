"use client";
import Image from "next/image";

// import { Instagram, Facebook } from "lucide-react";
import {} from "lucide-react";
import { useState } from "react";

export default function JoinListSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email,
          enquiry: "Newsletter Signup",
          message: "Joined via Join The List section.",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setResponseMessage("Thanks for joining the list!");
        setEmail("");
      } else {
        setIsSuccess(false);
        setResponseMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage("Failed to join the list.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-16 md:py-20 lg:py-28">
      <div className="container">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="0"
          className="mx-auto max-w-[1360px] rounded-[28px] border border-white/10 bg-[#130A10] px-6 py-16 text-center shadow-[0_35px_100px_rgba(225,129,176,0.14)] md:px-12 md:py-20 lg:py-24"
        >
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="100"
            className="mb-6 text-[16px] font-semibold uppercase tracking-[0.35em] text-pink md:text-[18px]"
          >
            Join The List
          </p>

          <h2
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="900"
            data-aos-delay="200"
            className="font-heading text-[48px] uppercase leading-none tracking-[-1.2px] text-[#FAF3F7] md:text-[64px] lg:text-[76px]"
          >
            First Through The Door.
          </h2>

          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="900"
            data-aos-delay="300"
            className="mx-auto mt-7 max-w-[760px] text-[18px] leading-[1.55] text-bodyPink md:text-[24px]"
          >
            Drop your email for early access to ticket releases, guest list
            invites and the occasional secret party. No spam, ever — we hate it
            too.
          </p>

          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="900"
            data-aos-delay="400"
            className="mx-auto mt-12 flex max-w-[760px] flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@you.com"
              className="min-h-[68px] h-[68px] flex-1 rounded-full bg-[#2A1723] px-8 text-[20px] text-[#FAF3F7] outline-none placeholder:text-bodyPink focus:ring-2 focus:ring-pink md:text-[24px]"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-[68px] rounded-full bg-pink px-10 text-[16px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(225,129,176,0.55)] disabled:opacity-60 md:px-14 md:text-[18px]"
            >
              {loading ? "Joining..." : "Join The List"}
            </button>
          </form>

          {responseMessage && (
            <p
              className={`mt-4 text-sm ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {responseMessage}
            </p>
          )}

          <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="500"
            className="mt-12 flex items-center justify-center gap-4"
          >
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-bodyPink transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink hover:shadow-[0_0_20px_rgba(225,129,176,0.35)]"
            >
              <Image src="/images/instagram.svg" width={22} height={22} alt="Instagram" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-bodyPink transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink hover:shadow-[0_0_20px_rgba(225,129,176,0.35)]"
            >
              <Image src="/images/facebook.svg" width={22} height={22} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}