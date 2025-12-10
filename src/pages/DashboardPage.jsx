import { useState } from "react";
import { AttendanceForm } from "../components/AttendanceForm";
import { DateTime } from "../components/DateTime";

export function DashboardPage() {
  const [items, setItems] = useState([]);

  const handleSubmit = (firstName, lastName, present) => {
    setItems([
      ...items,
      { firstName, lastName, createdAt: Date.now(), present },
    ]);
  };

  return (
    <div>
      <AttendanceForm onSubmit={handleSubmit} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>
              {item.firstName} {item.lastName}
            </span>
            <span>
              <DateTime value={item.createdAt} />
            </span>
            <span>
              <input
                type="checkbox"
                checked={item.present}
                onChange={() => {
                  setItems(
                    items.map((it) =>
                      item.createdAt === it.createdAt
                        ? { ...it, present: !it.present }
                        : it
                    )
                  );
                }}
              />{" "}
              Present
            </span>
            <button
              onClick={() => {
                setItems(items.filter((it) => it.createdAt !== item.createdAt));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
