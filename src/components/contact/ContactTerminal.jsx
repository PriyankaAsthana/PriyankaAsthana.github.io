import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  GraduationCap,
} from "@phosphor-icons/react";

const commands = [
  {
    command: "whoami",
    output: "Priyanka Asthana",
  },
  {
    command: "education",
    output: "B.Tech CSE (Honours)",
  },
  {
    command: "focus",
    output: "Artificial Intelligence • NLP • LLM Engineering",
  },
  {
    command: "connect",
    output: "buttons",
  },
];

function TerminalButton({
  href,
  icon,
  text,
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        flex

        h-[42px]
        w-full

        items-center
        justify-center
        gap-3

        rounded-2xl

        border
        border-slate-700

        bg-gradient-to-br
        from-slate-800
        to-slate-900

        text-[15px]
        font-semibold

        text-blue-300

        shadow-[0_8px_20px_rgba(0,0,0,.25)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-slate-800
        hover:text-white
        hover:shadow-[0_15px_35px_rgba(37,99,235,.25)]
      "
    >
      {icon}
      {text}
    </motion.a>
  );
}

export default function ContactTerminal() {
  const [visibleCommands, setVisibleCommands] = useState(1);

  useEffect(() => {
    if (visibleCommands >= commands.length) return;

    const timer = setTimeout(() => {
      setVisibleCommands((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [visibleCommands]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        w-[360px]
        h-[350px]

        overflow-hidden

        rounded-[10px]

        border
        border-slate-700

        bg-[#0F172A]

        shadow-[0_30px_80px_rgba(15,23,42,.20)]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-slate-700

          px-6
          py-4
        "
      >
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <p
          className="
            text-xs
            tracking-[0.35em]
            text-slate-400
          "
        >
          TERMINAL
        </p>
      </div>

      {/* Body */}

      <div
        className="
          p-7

          space-y-5

          font-mono

          text-[15px]
        "
      >
        {commands
          .slice(0, visibleCommands)
          .map((item, index) => (
            <motion.div
              key={item.command}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
            >
              <p className="text-blue-400">
                ❯ {item.command}
              </p>

              {item.command !== "connect" ? (
                <p
                  className="
                    mt-2
                    pl-6

                    text-slate-300
                  "
                >
                  {item.output}
                </p>
              ) : (
                <div
                  className="
                    mt-5

                    grid
                    grid-cols-2

                    gap-4
                  "
                >
                  <TerminalButton
                    text="GitHub"
                    href="https://github.com/PriyankaAsthana"
                    icon={
                      <GithubLogo
                        size={22}
                        weight="duotone"
                      />
                    }
                  />

                  <TerminalButton
                    text="LinkedIn"
                    href="https://www.linkedin.com/in/priyanka-asthana-1b9a74250/"
                    icon={
                      <LinkedinLogo
                        size={22}
                        weight="duotone"
                      />
                    }
                  />

                  <TerminalButton
                    text="Email"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=asthanapriyanka829@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <EnvelopeSimple
                        size={22}
                        weight="duotone"
                      />
                    }
                  />

                  <TerminalButton
                    text="Scholar"
                    href="https://scholar.google.com/citations?user=_cNMAsEc3DcC&hl=en"
                    icon={
                      <GraduationCap
                        size={22}
                        weight="duotone"
                      />
                    }
                  />
                </div>
              )}
            </motion.div>
          ))}

        {/* Cursor */}

        <motion.div
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="
            mt-6

            text-blue-400
          "
        >
          ❯ <span className="text-white">_</span>
        </motion.div>
      </div>
    </motion.div>
  );
}