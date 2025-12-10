import { useState } from "react";
import { AttendanceForm } from "../components/AttendanceForm";
import { DateTime } from "../components/DateTime";

export function DashboardPage() {
  const [items, setItems] = useState([]);

  const handleSubmit = (firstName, lastName) => {
    setItems([...items, { firstName, lastName, createdAt: Date.now() }]);
  };

  return (
    <div>
      <AttendanceForm onSubmit={handleSubmit} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.firstName} {item.lastName} <DateTime value={item.createdAt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
