import { useState } from "react"

export const Video = () => {
  const [open, setOpen] = useState(false)
  const openVideo = () => {
    setOpen(!open)
  }
  return (
    <section className="flex flex-col gap-3 items-center justify-center my-[100px] border border-slate-800 rounded-md p-8  bg-cover bg-center bg-opacity-50">
      <p className="mb-4 text-sm md:text-lg text-cyan-100">
        Aquí puedes ver un resumen en video de mi trabajo.
      </p>
      <button
        onClick={openVideo}
        className="px-4 py-3 text-center text-white border bg-[#53e9f710] border-cyan-400 hover:text-black hover:bg-cyan-400 transition-colors duration-200 ease-in rounded flex items-center justify-center gap-3"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </span>
        Reproducir
      </button>
      {open && (
        <section className="bg-slate-800 w-screen h-screen fixed top-0 left-0 z-10 grid place-content-center transition duration-300 bg-opacity-90">
          <article className="z-20 w-full h-full opacity-100 rounded flex flex-col items-end">
            <button
              onClick={openVideo}
              className="py-2 px-4 rounded-full hover:bg-black mb-3 justify-end bg-slate-900 flex gap-2"
            >
              Cerrar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              className="md:w-[640px] md:h-[360px] w-full"
              src="https://player.vimeo.com/video/846763889?badge=0&autopause=0&player_id=0&app_id=58479"
              //   frameborder="0"
              //   allowfullscreen
              autoplay="true"
              allow="autoplay; fullscreen; picture-in-picture"
              title="david-sanchez"
            ></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </article>
        </section>
      )}
    </section>
  )
}
