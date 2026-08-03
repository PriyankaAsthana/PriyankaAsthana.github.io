import { AnimatePresence, motion } from "framer-motion";

import {
  CalendarBlank,
  ShieldCheck,
  Buildings,
} from "@phosphor-icons/react";

export default function PaperEngine({ certificate }) {
  return (
    <div
      className="
        pointer-events-none

        absolute
        inset-0

        overflow-visible

        z-30
      "
    >
        <AnimatePresence mode="wait">

        {certificate && (

          <motion.article
            key={certificate.id}

            initial={{
              x: -420,
              opacity: 0,
              scale: 0.95,
            }}

            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}

            exit={{
              x: 420,
              opacity: 0,
              scale: 0.95,
            }}

            transition={{
              type: "spring",
              stiffness: 130,
              damping: 18,
            }}

            style={{
              background: certificate.color,
            }}

            className="
              relative
              h-[470px]
              w-[450px]
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_35px_90px_rgba(15,23,42,.14)]
            "
          >
                          {/* Glow */}

              <div
                className="
                  absolute

                  -right-20
                  -top-20

                  h-64
                  w-64

                  rounded-full

                  bg-blue-500/10

                  blur-[100px]
                "
              />

              {/* Fold */}

              <div
                className="
                  absolute
                  right-0
                  top-0

                  h-24
                  w-24

                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute

                    right-[-46px]
                    top-[-46px]

                    h-28
                    w-28

                    rotate-45

                    bg-white/70

                    shadow-inner
                  "
                />
              </div>

              {/* Watermark */}

              <div
  className="
    pointer-events-none

    absolute
    inset-0

    z-30

    flex
    items-center
    justify-center

    overflow-visible
  "
>
            
              </div>

              {/* Content */}

              <div
                className="
                  relative
                  z-20

                  flex
                  h-full
                  flex-col

                  p-9
                "
              >

                {/* HEADER */}

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >

                  <div
                    className="
                      flex

                      h-18
                      w-18

                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-slate-200

                      bg-white

                      p-3

                      shadow-sm
                    "
                  >

                    <img
                      src={certificate.logo}
                      alt={certificate.company}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />

                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold

                        uppercase

                        tracking-[.35em]

                        text-blue-600
                      "
                    >
                      {certificate.company}
                    </p>

                    <h2
                      className="
                        mt-2

                        text-[30px]

                        font-bold

                        leading-tight

                        tracking-tight

                        text-slate-900
                      "
                    >
                      {certificate.short}
                    </h2>

                  </div>

                </div>

                <div
                  className="
                    my-7

                    h-px

                    bg-gradient-to-r

                    from-blue-200

                    via-slate-200

                    to-transparent
                  "
                />

                <h3
                  className="
                    text-[22px]

                    font-semibold

                    leading-relaxed

                    text-slate-900
                  "
                >
                  {certificate.title}
                </h3>

                <p
                  className="
                    mt-5

                    text-[15px]

                    leading-8

                    text-slate-600
                  "
                >
                  {certificate.description}
                </p>

                <div
                  className="
                    mt-8

                    grid

                    grid-cols-2

                    gap-4
                  "
                >
                                  {/* ISSUED */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-blue-100
                      bg-white/70
                      p-5
                    "
                  >
                    <div className="flex items-center gap-2">
                      <CalendarBlank
                        size={20}
                        className="text-blue-600"
                      />

                      <span
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[.2em]
                        "
                      >
                        Issued
                      </span>
                    </div>

                    <p
                      className="
                        mt-3
                        text-lg
                        font-bold
                        text-slate-900
                      "
                    >
                      {certificate.issue}
                    </p>
                  </div>

                  {/* VALID */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-blue-100
                      bg-white/70
                      p-5
                    "
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        size={20}
                        className="text-blue-600"
                      />

                      <span
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[.2em]
                        "
                      >
                        Validity
                      </span>
                    </div>

                    <p
                      className="
                        mt-3
                        text-lg
                        font-bold
                        text-slate-900
                      "
                    >
                      {certificate.valid}
                    </p>
                  </div>

                </div>

                {/* CATEGORY */}

                <div
                  className="
                    mt-6

                    rounded-2xl

                    border
                    border-blue-100

                    bg-white/70

                    p-5
                  "
                >
                  <div className="flex items-center gap-2">

                    <Buildings
                      size={20}
                      className="text-blue-600"
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[.2em]
                      "
                    >
                      Category
                    </span>

                  </div>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-7
                      font-medium
                      text-slate-700
                    "
                  >
                    {certificate.category}
                  </p>

                </div>

                {/* SKILLS */}

                <div className="mt-8">

                  <h4
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    Skills Acquired
                  </h4>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2.5
                    "
                  >
                    {certificate.skills.map((skill) => (
                      <motion.span
                        key={skill}

                        whileHover={{
                          y: -2,
                          scale: 1.04,
                        }}

                        className="
                          rounded-full

                          border
                          border-blue-100

                          bg-white/80

                          px-4
                          py-2

                          text-xs
                          font-semibold

                          text-blue-700

                          shadow-sm
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                </div>

                {/* FOOTER */}

                <div className="mt-auto pt-8">

                  <div
                    className="
                      h-px
                      bg-gradient-to-r
                      from-blue-200
                      to-transparent
                    "
                  />

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div>

                      <p
                        className="
                          text-[11px]
                          uppercase
                          tracking-[.3em]
                          text-slate-400
                        "
                      >
                        Provider
                      </p>

                      <h5
                        className="
                          mt-2
                          text-xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {certificate.company}
                      </h5>

                    </div>

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-blue-100

                        bg-white

                        shadow-lg
                      "
                    >
                      <img
                        src={certificate.logo}
                        alt={certificate.company}
                        className="
                          h-9
                          w-9
                          object-contain
                        "
                      />
                    </motion.div>

                  </div>

                </div>

              </div>

            </motion.article>

        )}

      </AnimatePresence>

    </div>
  );
}
