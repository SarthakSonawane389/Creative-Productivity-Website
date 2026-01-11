import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
     <motion.div 
       initial={{ opacity: 0, y: 12 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.4, ease: "easeOut" }}>
     <Section>
        <h1>Build Better Habits</h1>
        <p>
          A calm, intentional approach to productivity — designed with clarity,
          not pressure.
        </p>
        <Button>Start Building</Button>
      </Section>
      <Section>
        <h2>Why This Exists</h2>
        <p>
          Productivity should feel supportive, not overwhelming. This project
          explores how thoughtful design and structure can encourage consistency
          without stress.
        </p>
      </Section>
      </motion.div>
    </>
  );
}

export default Home;

