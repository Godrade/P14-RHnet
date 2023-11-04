export const Form = ({ children, idName, action }) => {
    return (
        <form action={action} id={idName}>
            {children}
        </form>
    )
}