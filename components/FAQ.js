"use client"

import { useRef, useState } from "react"

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        porttitor, arcu at posuere imperdiet, magna augue tristique nibh, nec
        faucibus ipsum felis ac neque. Phasellus at turpis at lorem tincidunt
        venenatis. Suspendisse potenti. Morbi vitae ipsum ut justo tincidunt
        consequat. Curabitur vulputate, ipsum non posuere luctus, lorem tortor
        volutpat erat, at aliquet arcu urna id nibh.
      </p>
    ),
  },
  {
    question: "Quis nostrud exercitation ullamco laboris?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
    ),
  },
  {
    question: "Ut enim ad minim veniam, quis nostrud?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Aenean euismod, nibh in cursus
        ullamcorper, ipsum sem gravida metus, eget pharetra nunc leo sed urna.
      </p>
    ),
  },
]

const Item = ({ item }) => {
  const accordion = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Vanliga frågor och svar
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
