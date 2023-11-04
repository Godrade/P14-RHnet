export const Input = ({idName, label, type}) => {
    return (
        <React.Fragment>
            <label for={idName}>{label}</label>
            <input id={idName} type={type}></input>
        </React.Fragment>
    )
}