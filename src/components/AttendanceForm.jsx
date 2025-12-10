export function AttendanceForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const present = formData.get("present") === "true";
    console.log(formData);
    onSubmit(firstName, lastName, present);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" placeholder="First Name" />
      <input name="lastName" type="text" placeholder="Last Name" />
      <input name="present" type="checkbox" value="true" /> Present
      <button type="submit">Submit</button>
    </form>
  );
}
