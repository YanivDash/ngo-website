import { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  BottomBadge,
  About,
  Loader,
  Courses,
} from "./components";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <BottomBadge />
          <About />
          <Courses />
        </>
      )}
    </motion.div>
  );
}

export default App;
