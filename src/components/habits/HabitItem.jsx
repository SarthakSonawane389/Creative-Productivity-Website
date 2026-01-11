import { motion } from "framer-motion";

function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
        />
        <span
          style={{
            textDecoration: habit.completed ? "line-through" : "none",
          }}
        >
          {habit.name}
        </span>
      </label>

      <button
        onClick={() => onDelete(habit.id)}
        style={{ background: "none", border: "none", color: "var(--muted)" }}
      >
        Delete
      </button>
    </motion.li>
  );
}

export default HabitItem;
