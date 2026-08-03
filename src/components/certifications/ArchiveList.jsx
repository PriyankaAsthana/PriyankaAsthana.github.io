import { motion } from "framer-motion";
import certifications from "../../data/certificationData";

const grouped = certifications.reduce((acc, cert) => {
  if (!acc[cert.category]) acc[cert.category] = [];
  acc[cert.category].push(cert);
  return acc;
}, {});

export default function ArchiveList({
  covered,
  active,
}) {
  return (
    <motion.div
      animate={{
        opacity: covered ? 0.18 : 1,
        filter: covered ? "blur(5px)" : "blur(0px)",
        scale: covered ? 0.985 : 1,
        x: covered ? 18 : 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
relative

ml-auto
top-10
w-[470px]

rounded-[10px]

border
border-slate-200

bg-white/95

px-12
py-11

shadow-[0_22px_60px_rgba(15,23,42,.08)]

backdrop-blur-xl
"
    >
      {/* HEADER */}

      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[.45em]
          text-blue-600
        "
      >
        ARCHIVE INDEX
      </p>

      <h2
      className="
      mt-6
      font-serif
      text-[46px]
      leading-[1.08]
      tracking-tight
      font-bold 
    text-slate-900
      "
>
        All
        <br />
        Certifications
      </h2>

      <p
className="
mt-7
max-w-[330px]
text-[16px]
leading-8
text-slate-500
"
>
        Browse every certification grouped
        by specialization. Selecting a
        document extracts it from the
        archive.
      </p>

      {/* DIVIDER */}

      <div
        className="
          my-10
          h-px
          bg-gradient-to-r
          from-blue-200
          to-transparent
        "
      />

      {/* LIST */}

      <div className="mt-10 space-y-8">

        {Object.entries(grouped).map(
          ([category, items]) => (

            <div key={category}>

              <div className="flex items-center gap-3">

                <div
                  className="
                    h-[2px]
                    w-8
                    rounded-full
                    bg-blue-600
                  "
                />

                <h3
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.3em]
                    text-blue-600
                  "
                >
                  {category}
                </h3>

              </div>

              <div className="mt-4 space-y-4">

                {items.map((cert) => {

                  const isActive =
                    active?.id === cert.id;

                  return (

                    <motion.div
                      key={cert.id}

                      animate={{
                        x: isActive ? 8 : 0,
                      }}

                      transition={{
                        duration: .25,
                      }}

                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <motion.div

                        animate={{
                          scale: isActive ? 1.7 : 1,
                        }}

                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-blue-500
                        "
                      />

                      <p
                        className={`
                          flex-1
                          text-[14px]
                          leading-7

                          ${
                            isActive
                              ? "font-semibold text-blue-600"
                              : "text-slate-700"
                          }
                        `}
                      >
                        {cert.short}
                      </p>

                      <span
                        className="
                          text-xs
                          font-bold
                          text-slate-400
                        "
                      >
                        {String(cert.id).padStart(2, "0")}
                      </span>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          )
        )}

      </div>

    </motion.div>
  );
}