export const Select = ({children, idName, label}) => {
    return (
        <React.Fragment>
            <label for={idName}>{label}</label>
            <select name={idName} id={idName}>
                {children}
            </select>
        </React.Fragment>
    )
}