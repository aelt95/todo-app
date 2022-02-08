import Input from "./Input";

const Form = ({ handler, value, onChange }) => {
  return (
    <form onSubmit={handler}>
      <Input value={value} onChange={onChange} />
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
