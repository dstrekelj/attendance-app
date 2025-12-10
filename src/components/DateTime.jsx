export function DateTime({ value }) {
  return <>{new Date(value).toLocaleString()}</>;
}
