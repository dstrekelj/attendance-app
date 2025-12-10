import { DateTime } from "./DateTime";

export function ItemList({ items, onItemUpdate, onItemDelete }) {
  return (
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
              onChange={() => onItemUpdate(item.createdAt)}
            />{" "}
            Present
          </span>
          <button onClick={() => onItemDelete(item.createdAt)}>X</button>
        </li>
      ))}
    </ul>
  );
}
