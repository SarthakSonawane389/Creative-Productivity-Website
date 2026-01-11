import { useState } from "react";
import Button from "../ui/Button";

function HabitInput({ onAddHabit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAddHabit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New habit"
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <Button>Add</Button>
    </form>
  );
}

export default HabitInput;
