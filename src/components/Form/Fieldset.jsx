export const Fieldset = ({chieldren, legend}) => {
    return (
        <fieldset class="address">
            <legend>{legend}</legend>

            {chieldren}
        </fieldset>
    )
}