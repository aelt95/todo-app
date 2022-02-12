import Input from "./Input";

const Form = ({
  className,
  handler,
  value,
  onChange,
  text = "Create",
  placeholder,
}) => {
  return (
    <form onSubmit={handler} className={className}>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
      <button type="submit">{text}</button>
    </form>
  );
};

export default Form;
