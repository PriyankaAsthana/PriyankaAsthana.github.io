import { motion } from "framer-motion";

import BackgroundGlow from "./BackgroundGlow";
import FloatingParticles from "./FloatingParticles";

import GlobePanel from "./GlobePanel";
import ContactTerminal from "./ContactTerminal";
import StatusCard from "./StatusCard";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50
      "
    >
      {/* ===============================
            BACKGROUND
      =============================== */}

      <BackgroundGlow />
      <FloatingParticles />

      {/* ===============================
            HEADING
      =============================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-20

          text-center
        "
      >

        <h2
          className="
            mt-4
            font-serif
            text-6xl
            font-bold
            leading-tight
            tracking-tight
            text-slate-900
          "
        >
          Let's Build
          <br />
          Something Exceptional
        </h2>

        <p
          className=" mx-auto mt-7 max-w-[1560px] text-lg leading-8 text-center text-slate-500 "
        >
          Whether it's artificial intelligence,
          research, engineering, or international
          collaboration, I'd love to hear about
          ambitious ideas worth building together.
        </p>
      </motion.div>

      {/* ===============================
            MAIN CONTENT
      =============================== */}

      <div
        className="
relative
z-20

mx-auto
mt-24

max-w-[1600px]

px-20

grid
grid-cols-[390px_1fr_390px]

items-center

gap-10
"
      >
        {/* ===============================
              TERMINAL
        =============================== */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-end pr-8"
        >
          <ContactTerminal />
        </motion.div>

        {/* ===============================
              EARTH
        =============================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="
            flex
            justify-center
            items-center
          "
        >
          <GlobePanel />
        </motion.div>

        {/* ===============================
              STATUS
        =============================== */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          className="flex justify-start pl-8"
        >
          <StatusCard />
        </motion.div>
      </div>

      {/* ===============================
            CTA
      =============================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.35,
          duration: 0.7,
        }}
        className="
          relative
          z-20

          mt-24

          flex
          justify-center
        "
      >
        <ContactButton />
      </motion.div>
    </section>
  );
}