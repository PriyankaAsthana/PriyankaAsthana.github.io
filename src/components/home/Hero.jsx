import { motion } from "framer-motion";

import {
    FilePdf,
    GithubLogo,
    Flask,
    ArrowRight
} from "@phosphor-icons/react";

import profileImage from "../../assets/images/MY_PIC.png";

import Section from "../ui/Section";
import Button from "../ui/Button";

function Hero() {
  return (
    <Section className="min-h-[calc(97vh-80px)] flex items-center justify-center">

      <div className="w-full mx-auto grid max-w-9xl grid-cols-1 gap-30 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Left Side */}
        <motion.div 
          className="lg:pl-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            AI Researcher • Software Engineer
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
              Priyanka
          <span className="block text-blue-600">
              Asthana
          </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Gold Medalist in Computer Science and AI researcher focused on
            Natural Language Processing, trustworthy Healthcare AI, and
            intelligent software systems. I enjoy building research-driven
            applications that combine machine learning with real-world impact.
          </p>

          {/* Achievement Badges */}

          <div className="mt-8 flex flex-wrap items-center gap-4">

            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
              🥇 Gold Medalist
            </span>

            <span className="rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
              💡 Patent Holder
            </span>

            <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-700">
              🤖 AI Researcher
            </span>

          </div>
                  {/* Spacer */}

        <div className="h-4"></div>

        {/* CTA Buttons */}

        <div className="flex flex-wrap items-center gap-5">

          <Button 
            href="/resume"
            variant="primary"
          >
            <FilePdf
              size={18}
              weight="bold"
            />

            CV

          </Button>

          <Button
            href="https://github.com/YOUR_USERNAME"
            variant="secondary"
          >
            <GithubLogo
              size={18}
              weight="fill"
            />

            GitHub

          </Button>

          <Button
            href="/research"
            variant="ghost"
          >
            <Flask
              size={18}
              weight="duotone"
            />

            Research

            <ArrowRight
              size={16}
              weight="bold"
            />

          </Button>

        </div>

        </motion.div>

        {/* Right Side */}  
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

  {/* TOP DOTS */}

  <div className="absolute -top-8 left-0 grid grid-cols-5 gap-4">
    {[...Array(20)].map((_, i) => (
      <span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-blue-500"
      />
    ))}
  </div>

  {/* BOTTOM DOTS */}

  <div className="absolute -bottom-8 right-0 grid grid-cols-5 gap-4">
    {[...Array(20)].map((_, i) => (
      <span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-blue-500"
      />
    ))}
  </div>

  {/* GLOW */}

  <div
    className="
      absolute
      h-[500px]
      w-[460px]
      bg-blue-500/20
      blur-[80px]
      translate-x-10
      translate-y-8
      -z-20
    "
    style={{
      borderRadius:
        "58% 42% 61% 39% / 42% 35% 65% 58%",
    }}
  />

  {/* BLUE SHAPE */}

  <div
    className="
      absolute
      h-[500px]
      w-[520px]
      bg-gradient-to-br
      from-blue-700
      via-blue-600
      to-blue-500
      rotate-6
      translate-x-10
      translate-y-8
      shadow-[0_40px_80px_rgba(37,99,235,0.35)]
      -z-10
    "
    style={{
      borderRadius:
        "45% 55% 67% 33% / 38% 32% 68% 62%",
    }}
  />

  {/* PROFILE IMAGE */}

  <div
    className="
      relative
      h-[500px]
      w-[460px]
      overflow-hidden
      border-[5px]
      border-white
      bg-white
      shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-2
    "
    style={{
      borderRadius:
        "40% 60% 58% 42% / 45% 35% 65% 55%",
    }}
  >
    <img
      src={profileImage}
      alt="Priyanka Asthana"
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        hover:scale-105
      "
    />
  </div>

</motion.div>

        

      </div>

    </Section>
  );
}

export default Hero;