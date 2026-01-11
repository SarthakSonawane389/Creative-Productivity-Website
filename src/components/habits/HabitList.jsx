import HabitItem from "./HabitItem";

function HabitList({ habits, onToggle, onDelete }) {
  if (habits.length === 0) {
    return <p style={{ color: "var(--muted)" }}>No habits yet.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default HabitList;
