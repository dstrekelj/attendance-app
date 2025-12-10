import { useState } from "react";
import { AttendanceForm } from "../components/AttendanceForm";

export function DashboardPage() {
  const [items, setItems] = useState([]);

  const handleSubmit = (firstName, lastName) => {
    setItems([...items, { firstName, lastName }]);
  };

  return (
    <div>
      <AttendanceForm onSubmit={handleSubmit} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
