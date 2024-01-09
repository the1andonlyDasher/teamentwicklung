import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef, useState } from "react";
import { useAnimationControls, motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser"
import { useAtom } from "jotai";
import { loc } from "@/ts/atoms";
emailjs.init("lPNDYXO-4WREGEgyS");

/**
 * Props for `Kontakformular`.
 */
export type KontakformularProps =
  SliceComponentProps<Content.KontakformularSlice>;

/**
 * Component for "Kontakformular" Slices.
 */
const Kontakformular = ({ slice }: KontakformularProps): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [firstName, setFirstName] = useState("");
  const controlsForm = useAnimationControls();
  const messageControls = useAnimationControls();
  const inView = useInView(form, { once: false, margin: "100px 0px 100px 0px" });

  const variants = {
    initial: { opacity: 0, x: -10 },
    enter: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeIn", duration: 0.5 },
    },
    exit: {
      x: 10, opacity: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  }

  const formVariants = {
    initial: { opacity: 0, },
    enter: {
      opacity: 1,
      transition: { ease: "easeIn", duration: 0.5, staggerChildren: 0.2, when: "beforeChildren", staggerDirection: 1 },
    },
    exit: { opacity: 0, transition: { ease: "easeOut", duration: 0.5, staggerChildren: 0.2, when: "afterChildren", staggerDirection: -1 } },
  };
  const messageVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, display: "flex" },
    exit: { opacity: 0, display: "none" },
  };
  const sequence = async () => {
    await controlsForm.start("exit").then(() => { controlsForm.start({ display: "none" }) });
    return await messageControls.start("enter");
  };

  const sentMessages = [
    "E-Mail-Magie vollendet!",
    "Mission Erfolgreich!",
    "Beamen erfolgreich",
  ]

  const sendingMessages = [
    "Abflug in 3... 2... 1..",
    "Beame Email hoch...",
    "Magie in Aktion..."
  ]

  const sendMessages = [
    "Abflug!",
    "Sendezauber aktivieren!",
    "Email entfesseln!",
  ]

  const contactTexts = [
    slice.items[0].contact_text,
    slice.items[1].contact_text,
    slice.items[2].contact_text,
  ]

  const [app, setApp] = useAtom(loc)
  const [rand, setRand]: any = useState(undefined)
  const [sent, setSent]: any = useState(sentMessages[rand])
  const [send, setSend]: any = useState(sendMessages[rand])
  const [sending, setSending]: any = useState(sendingMessages[rand])
  const [status, setStatus] = useState(sendMessages[rand]);

  useEffect(() => {
    function getRandomInt(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var random = getRandomInt(0, 2)
    setRand(random)
  }, []);

  useEffect(() => {
    setSend(sendMessages[rand])
    setSent(sentMessages[rand])
    setSending(sendingMessages[rand])
    setStatus(sendMessages[rand])
  }, [rand]);




  const bringBackform = async (e: any) => {
    e.preventDefault();
    await messageControls.start("exit").then(() => { messageControls.start({ display: "none" }) });
    return await controlsForm.start({ display: "flex" }).then(() => { controlsForm.start("enter") });
  };

  const testMail = (e: any) => {
    e.preventDefault();
    setStatus(sending);
    setTimeout(() => {
      setStatus(sent);
      setTimeout(() => {
        setStatus(send);
      }, 1000);
      setFirstName("");
      setEmail("")
      setMessage("")
      sequence();
    }, 1000);
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current == null) return;
    setStatus(sending);
    emailjs
      .sendForm(
        "service_svvit4h",
        "template_t5ebzez",
        form.current,
        "lPNDYXO-4WREGEgyS"
      )
      .then(
        (result: any) => {
          setStatus(sent);
          setTimeout(() => {
            setStatus(send);
          }, 1000);
          sequence();
          setFirstName("");
          setEmail("")
          setMessage("")
        },
        (error: any) => {
          setStatus("Hoppla...");
          alert("Die digitale Brieftaube muss sich verirrt haben...");
        }
      );
  };

  useEffect(() => {
    if (inView) {
      controlsForm.start("enter");
    }
  }, [inView, controlsForm]);

  const section_variants = {
    initial: {},
    enter: {
      transition: { staggerChildren: 0.2, when: "beforeChildren", staggerDirection: 1 },
    },
    exit: {
      transition: { staggerChildren: 0.2, when: "afterChildren", staggerDirection: -1 },
    },
  };


  return (
    <motion.section
      variants={section_variants}
      initial="initial"
      whileInView="enter"
      exit="exit"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-section-name={`${slice.primary.anchor}`}
      id={`${slice.primary.anchor}`}
      viewport={{ margin: "0px", amount: 0.375, once: false }}
      onViewportEnter={(entry) => {
        entry?.isIntersecting
          ? setApp(
            `${entry.target?.getAttribute(
              "data-section-name"
            )}`
          )
          : null;
      }}
    >
      <motion.div variants={variants} className="form-wrapper">
        <h3 data-before={slice.primary.contact_title}>{slice.primary.contact_title}</h3>
        <p>{contactTexts[rand]}</p>
        <motion.div
          className="thanks__message"
          variants={messageVariants}
          initial="initial"
          animate={messageControls}
          exit="exit"
        >
          <h4>E-Mail-Magie entfesselt!</h4>
          <p>Danke für die digitale Alchemie – es ist uns eine Freude, deine Nachricht zu erhalten!</p>
          <button className="btn__alt" onClick={bringBackform}>
            Etwas vergessen?
          </button>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={testMail}
          variants={formVariants}
          initial="initial"
          animate={controlsForm}
          whileInView="enter"
          exit="exit"
        >
          <input type="hidden" name="contact_number"></input>
          <motion.div variants={variants}>
            <label className="text-indigo-600" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              // className="bg-[#21212122] rounded-[2px] border border-[#222] text-neutral-50"
              value={firstName}
              placeholder={"Name"} // ...force the input's value to match the state variable...
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={variants}>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              // className="bg-[#21212122] rounded-[2px] border border-[#222] text-neutral-50"
              value={email}
              placeholder="E-Mail"
              onChange={e => setEmail(e.target.value)}
              required
              aria-describedby="emailHelp"
            />
          </motion.div>
          <motion.div variants={variants}>
            <label htmlFor="message">Message:</label>
            <textarea
              value={message}
              placeholder="Wir warten gespannt auf dein literarisches Meisterwerk - leg los!"
              onChange={e => setMessage(e.target.value)}
              name="message"
              // className="bg-[#21212122] rounded-[2px] border border-[#222] text-neutral-50"
              id="message"
              required
              rows={5}
            />
          </motion.div>
          <motion.button variants={variants} className="btn__primary" type="submit">
            {status}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Kontakformular;





