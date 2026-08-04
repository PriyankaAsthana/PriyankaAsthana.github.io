import { motion } from "framer-motion";
import HeroBlob from "./HeroBlob";

import {
  FilePdf,
  GithubLogo,
  Flask,
  ArrowRight,
} from "@phosphor-icons/react";

import profileImage from "../../assets/images/MY_PIC.png";

import Section from "../ui/Section";
import Button from "../ui/Button";

import HeroNetwork from "./HeroNetwork";

function Hero() {
  return (
    <Section
      id="hero"
      className="
        relative

        overflow-hidden

        min-h-[calc(100vh-80px)]

        flex
        items-center
        justify-center
      "
    >
      {/* ===============================
            AI NETWORK BACKGROUND
      =============================== */}

      <HeroNetwork />

      {/* ===============================
            CONTENT
      =============================== */}

      <div
        className="
          relative
          z-20

          mx-auto

          grid

          w-full
          max-w-9xl

          grid-cols-1

          items-center

          gap-24

          lg:grid-cols-[0.9fr_1.1fr]
        "
      >
        {/* ===============================
              LEFT
        =============================== */}

        <motion.div
          className="lg:pl-8"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
              inline-block

              rounded-full

              bg-blue-100

              px-4
              py-2

              text-sm
              font-semibold

              text-blue-700
            "
          >
            AI Researcher • Software Engineer
          </span>

          <h1
            className="
              mt-6

              text-5xl

              font-bold

              leading-tight

              lg:text-7xl
            "
          >
            Priyanka

            <span className="block text-blue-600">
              Asthana
            </span>
          </h1>

          <p
            className="
              mt-8

              max-w-3xl

              text-lg

              leading-8

              text-gray-600
            "
          >
            AI
            researcher focused on Natural Language
            Processing, trustworthy Healthcare AI,
            and intelligent software systems. I enjoy
            building research-driven applications
            that combine machine learning with
            real-world impact.
          </p>

          {/* ===============================
                BADGES
          =============================== */}

          <div
            className="
              mt-8

              flex

              flex-wrap

              items-center

              gap-4
            "
          >
            <span
              className="
                rounded-full

                border
                border-blue-200

                bg-blue-50

                px-4
                py-1.5

                text-sm

                font-semibold

                text-blue-700
              "
            >
              🥇 I DIV Honours
            </span>

            <span
              className="
                rounded-full

                border
                border-green-200

                bg-green-50

                px-4
                py-1.5

                text-sm

                font-semibold

                text-green-700
              "
            >
              💡 Patent Holder
            </span>

            <span
              className="
                rounded-full

                border
                border-purple-200

                bg-purple-50

                px-4
                py-1.5

                text-sm

                font-semibold

                text-purple-700
              "
            >
              🤖 AI Researcher
            </span>
          </div>

          <div className="h-4" />

          {/* ===============================
                BUTTONS
          =============================== */}

          <div
            className="
              flex

              flex-wrap

              items-center

              gap-5
            "
          >
            <Button
              href="../public/resume-Priyanka.pdf"
              variant="primary"
            >
              <FilePdf
                size={18}
                weight="bold"
              />

              CV
            </Button>

            <Button
              href="https://github.com/PriyankaAsthana"
              variant="secondary"
            >
              <GithubLogo
                size={18}
                weight="fill"
              />

              GitHub
            </Button>

            <Button
              href="https://scholar.google.com/citations?user=_cNMAsEc3DcC&hl=en"
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

        {/* ===============================
              RIGHT
        =============================== */}

        <motion.div
          className="
            relative

            flex

            items-center

            justify-center
          "
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <HeroBlob />

          {/* =====================================
                PROFILE IMAGE
          ===================================== */}

          <motion.div
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              relative

              h-[500px]
              w-[460px]

              overflow-hidden

              border-[5px]
              border-white

              bg-white

              shadow-2xl
            "
            style={{
              borderRadius:
                "40% 60% 58% 42% / 45% 35% 65% 55%",
            }}
          >
            <motion.img
              src={profileImage}
              alt="Priyanka Asthana"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                h-full
                w-full

                object-cover
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

export default Hero;