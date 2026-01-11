import { useState } from "react";
import Section from "../components/ui/Section";
import HabitInput from "../components/habits/HabitInput";
import HabitList from "../components/habits/HabitList";

function Habits() {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
    setHabits([
      ...habits,
      { id: Date.now(), name, completed: false },
    ]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  return (
    <Section>
      <h1>Your Habits</h1>
      <HabitInput onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onToggle={toggleHabit}
        onDelete={deleteHabit}
      />
    </Section>
  );
}

export default Habits;
