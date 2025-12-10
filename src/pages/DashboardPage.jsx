import { useState } from "react";
import { AttendanceForm } from "../components/AttendanceForm";
import { ItemList } from "../components/ItemList";

export function DashboardPage() {
  const [items, setItems] = useState([]);

  const handleSubmit = (firstName, lastName, present) => {
    setItems([
      ...items,
      { firstName, lastName, createdAt: Date.now(), present },
    ]);
  };

  const handleItemUpdate = (createdAt) => {
    setItems(
      items.map((item) =>
        item.createdAt === createdAt
          ? { ...item, present: !item.present }
          : item
      )
    );
  };

  const handleItemDelete = (createdAt) => {
    setItems(items.filter((item) => item.createdAt !== createdAt));
  };

  return (
    <div>
      <AttendanceForm onSubmit={handleSubmit} />
      <ItemList
        items={items}
        onItemUpdate={handleItemUpdate}
        onItemDelete={handleItemDelete}
      />
    </div>
  );
}
