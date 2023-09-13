
import { FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import {  FaSpinner, FaWhatsapp } from "react-icons/fa"
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2"


export function Contact(){
  const form = useRef<HTMLFormElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_cxxdmb1",
        "template_tmbzqy9",
        form.current,
        "VtTwF5LfAlcm8wKRT"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
        },
        (error) => {
          setError(true)
          setLoading(false)
          console.error(error)
        }
      )
  }


  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 11 9.9884-2630",
      link: "https://wa.me/5512982041640?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "julio.mendes60@gmail.com",
      link: "mailto:julio.mendes60@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "São Paulo",
      description: "Capital- SP",
      link: "https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ]
  return(
    <section id="contact" className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block ps-4 font-headline font-semibold">
                  Mensagem:
                </label>
                <textarea
                name="message"
                id="message"
                className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none" required>

                </textarea>
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 text-blue-700">
                    Enviar mensagem
                    {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                    {success && <HiCheckCircle className="h-4 w-4" />}
                </button>
              </div>
            </form>
        </div>
          <div className="basis-1/3">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
