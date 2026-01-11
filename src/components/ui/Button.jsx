import { motion } from "framer-motion";
function Button({onclick,children}) {
    return(
        <motion.button onClick={onclick} 
         whileHover={{ scale: 1.03 }}
         whileTap={{ scale: 0.97 }}
          style={{
            background:"var(--accent)",
            color:"#fff",
            padding:"10px 18px",
            borderRadius:"6px",
            border:"none",
            cursor:"pointer",
            fontSize:"0.95rem"
          }}
        >{children}</motion.button>
    )
}
export default Button;