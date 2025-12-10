export function AttendanceForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    onSubmit(firstName, lastName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" placeholder="First Name" />
      <input name="lastName" type="text" placeholder="Last Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
