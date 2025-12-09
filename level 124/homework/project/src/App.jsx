import { useState } from "react";
import SelectedList from "./components/SelectedList";
import UserList from "./components/UserList";

const users = [
  "aleksandre makharadze",
  "Petre Sikmashvili",
  "beqa gulbatashvili",
  "Lizi Mchedlidze",
  "demetre gagnidze",
  "Nikoloz iobidze",
  "David Stepniashvili",
];

export default function App() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (user) => {
    if (!selected.includes(user)) {
      setSelected([...selected, user]);
    }
  };

  const handleRemove = (index) => {
    setSelected(selected.filter((_, i) => i !== index));
  };

  const handleReset = () => setSelected([]);

  return (
    <div style={{ color: "white", background: "#111", minHeight: "100vh", padding: "20px" }}>
      <SelectedList
        selected={selected}
        onRemove={handleRemove}
        onReset={handleReset}
      />

      <UserList data={users} onAdd={handleAdd} />
    </div>
  );
}
