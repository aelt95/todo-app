import Input from "../Shared/Input";

const ListItem = ({ name }) => {
  return (
    <div style={{ display: "flex" }}>
      <Input type="checkbox" />
      <h3>{name}</h3>
    </div>
  );
};

export default ListItem;
