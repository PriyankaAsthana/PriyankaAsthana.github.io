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

    flex
    items-center
    justify-center

    min-h-[700px]

    py-12
    sm:py-16

    md:min-h-[900px]

    lg:min-h-[calc(100vh-80px)]
    lg:py-0
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
          w-full

          px-5
          sm:px-8
          md:px-10

          max-w-9xl

          grid
          grid-cols-1

          items-center

          gap-12
          sm:gap-16
          md:gap-20

          lg:px-0

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-24
        "
      >
        {/* ===============================
              LEFT
        =============================== */}

        <motion.div
          className="
            w-full

            lg:pl-8
            lg:px-0
          "
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
          {/* ROLE */}

          <span
            className="
              inline-block

              rounded-full

              bg-blue-100

              px-3
              py-1.5

              text-xs
              sm:px-4
              sm:py-2
              sm:text-sm

              font-semibold

              text-blue-700
            "
          >
            AI Researcher • Software Engineer
          </span>

          {/* NAME */}

          <h1
            className="
              mt-5
              sm:mt-6

              text-4xl
              sm:text-5xl

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

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              sm:mt-8

              max-w-3xl

              text-base
              sm:text-lg

              leading-7
              sm:leading-8

              text-gray-600
            "
          >
            AI researcher focused on Natural Language
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
              mt-6
              sm:mt-8

              flex
              flex-wrap

              items-center

              gap-2
              sm:gap-4
            "
          >
            <span
              className="
                rounded-full

                border
                border-blue-200

                bg-blue-50

                px-3
                py-1
                sm:px-4
                sm:py-1.5

                text-xs
                sm:text-sm

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

                px-3
                py-1
                sm:px-4
                sm:py-1.5

                text-xs
                sm:text-sm

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

                px-3
                py-1
                sm:px-4
                sm:py-1.5

                text-xs
                sm:text-sm

                font-semibold

                text-purple-700
              "
            >
              🤖 AI Researcher
            </span>
          </div>

          {/* ===============================
                BUTTONS
          =============================== */}

          <div
            className="
              mt-5
              sm:mt-6

              flex
              flex-wrap

              items-center

              gap-3
              sm:gap-5
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

            w-full

            pt-4
            sm:pt-6
            md:pt-8

            lg:pt-0
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
          {/* ===============================
                RESPONSIVE BLOB
          =============================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              flex
              items-center
              justify-center

              scale-[0.85]
sm:scale-[0.90]
md:scale-[0.95]
lg:scale-100
            "
          >
            <HeroBlob />
          </div>

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

              h-[285px]
              w-[265px]

              sm:h-[350px]
              sm:w-[325px]

              md:h-[420px]
              md:w-[385px]

              lg:h-[500px]
              lg:w-[460px]

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