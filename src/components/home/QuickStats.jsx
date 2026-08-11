import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { stats } from "../../data/stats";

function QuickStats() {
  return (
    <section
      id="stats"
      className="
        min-h-screen
        bg-gradient-to-b
        from-white
        to-slate-50

        flex
        items-center

        px-3
        sm:px-5
        md:px-6
        lg:px-0
      "
    >
      <div
        className="
          w-full

          pt-12
          sm:pt-16
          md:pt-20
          lg:pt-20

          pb-12
          sm:pb-16
          lg:pb-20
        "
      >
        {/* =====================================
              HEADING
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          {/* ABOUT ME */}

          <span
            className="
              inline-flex

              rounded-full

              bg-blue-100

              px-3
              py-1.5

              sm:px-5
              sm:py-2

              text-[10px]
              sm:text-sm

              font-semibold

              uppercase

              tracking-[0.25em]
              sm:tracking-[0.3em]

              text-blue-700
            "
          >
            About Me
          </span>

          {/* HEADING */}

          <h2
            className="
              mt-4
              sm:mt-6

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              font-bold

              tracking-tight

              text-slate-900
            "
          >
            Journey at a Glance
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto

              mt-5
              sm:mt-8

              max-w-9xl

              px-3
              sm:px-6

              text-sm
              sm:text-base
              md:text-xl

              leading-6
              sm:leading-8
              md:leading-9

              text-slate-600
            "
          >
            A snapshot of my academic achievements, research contributions,
            <br className="hidden md:block" />
            and professional journey in Artificial Intelligence.
          </p>
        </motion.div>

        {/* =====================================
              CARDS
        ====================================== */}

        <div
          className="
            mx-auto

            mt-12
            sm:mt-16
            md:mt-20
            lg:mt-24

            grid

            w-full

            grid-cols-2

            justify-items-center

            gap-x-3
            gap-y-8

            sm:gap-x-5
            sm:gap-y-10

            md:gap-x-8
            md:gap-y-12

            lg:gap-x-12
            lg:gap-y-16

            xl:grid-cols-3

            xl:gap-x-16
            xl:gap-y-16
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="
                flex
                w-full
                min-w-0

                items-center
                justify-center

                scale-[0.82]
                sm:scale-[0.9]
                md:scale-100

                xl:scale-100
              "
            >
              <StatCard
                stat={stat}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickStats;