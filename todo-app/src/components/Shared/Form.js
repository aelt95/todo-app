import Input from "./Input";

const Form = ({ className, handler, value, onChange, text = "Create" }) => {
  return (
    <form onSubmit={handler} className={className}>
      <Input value={value} onChange={onChange} />
      <button type="submit">{text}</button>
    </form>
  );
};

export default Form;
