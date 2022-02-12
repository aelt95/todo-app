import Input from "../Shared/Input";

const ListItem = ({ name }) => {
  return (
    <>
      <Input type="checkbox" />
      <h3>{name}</h3>
    </>
  );
};

export default ListItem;
