import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "./Navbar";
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="mtransition-colors duration-300">
    <Head>
      <title>Yxqsnz&apos;s website</title>
      <meta name="description" content="Just testing :>" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
      {children}
    </motion.main>
  </div>
);

export default Page;
