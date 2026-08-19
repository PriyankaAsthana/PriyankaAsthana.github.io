import { motion } from "framer-motion";
import HeroBlob from "./HeroBlob";

import {
  FilePdf,
  GithubLogo,
  LinkedinLogo,
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

        /* VERY SMALL PHONE ONLY */
        min-h-[760px]

        py-12

        /* EXISTING SIZES — UNCHANGED */
        sm:min-h-[800px]
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

            translate-x-[4%]
            sm:translate-x-0

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
            AI researcher and data analyst working across
            Natural Language Processing, trustworthy
            Healthcare AI, and applied data science. I
            enjoy turning messy data and research
            questions into systems and insights that
            hold up in the real world.
          </p>


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
              href="/resume-Priyanka.pdf"
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


            {/* =====================================
                  LINKEDIN — DESKTOP ONLY
                  BESIDE RESEARCH BUTTON
            ===================================== */}

            <motion.a
              href="https://www.linkedin.com/in/priyanka-asthana-1b9a74250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"

              whileHover={{
                scale: 1.08,
                y: -2,
              }}

              whileTap={{
                scale: 0.94,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                hidden
                lg:flex

                h-14
                w-14

                items-center
                justify-center

                rounded-full

                border-4
                border-white

                bg-[#0A66C2]

                text-white

                shadow-[0_10px_30px_rgba(10,102,194,0.30)]

                transition-shadow
                duration-300

                hover:shadow-[0_14px_35px_rgba(10,102,194,0.40)]
              "
            >
              <LinkedinLogo
                size={24}
                weight="fill"
              />
            </motion.a>

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

              overflow-visible

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

            {/* =====================================
                  LINKEDIN FLOATING BUTTON
                  SMALL + MEDIUM ONLY
            ===================================== */}

            <motion.a
              href="https://www.linkedin.com/in/priyanka-asthana-1b9a74250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"

              whileHover={{
                scale: 1.08,
                y: -2,
              }}

              whileTap={{
                scale: 0.94,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                flex
                lg:hidden

                absolute
                z-30

                -left-3
                -top-3

                sm:-left-3
                sm:-top-3

                md:-left-4
                md:-top-4

                h-11
                w-11

                sm:h-12
                sm:w-12

                md:h-13
                md:w-13

                items-center
                justify-center

                rounded-full

                border-4
                border-white

                bg-[#0A66C2]

                text-white

                shadow-[0_10px_30px_rgba(10,102,194,0.30)]

                transition-shadow
                duration-300

                hover:shadow-[0_14px_35px_rgba(10,102,194,0.40)]
              "
            >
              <LinkedinLogo
                size={22}
                weight="fill"
              />
            </motion.a>


            {/* =====================================
                  PROFILE IMAGE
            ===================================== */}

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

                overflow-hidden
              "

              style={{
                borderRadius:
                  "40% 60% 58% 42% / 45% 35% 65% 55%",
              }}
            />

          </motion.div>

        </motion.div>

      </div>

    </Section>
  );
}

export default Hero;