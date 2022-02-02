import Input from "../Shared/Input";

const ListItem = ({name}) => {
    // props = {name: 'ivan', surname: 'matas'}
    // const name = props.name //ivan
    // const surname = props.surname //ivan


    // const {name} = props
    // const name = props.name
    return (
        <>
            <Input type="checkbox"/>
            <h3>{name}</h3>
        </>
    )
}

export default ListItem
