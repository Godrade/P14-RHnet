import { TitlePage } from "../components/TitlePage"; 

//Form
import { Form } from "../components/Form/Form";
import { Input } from "../components/Form/Input";
import { Fieldset } from "../components/Form/Fieldset";
import { Select } from "../components/Form/Select";
import { Option } from "../components/Form/Option";



export const Home = () => {
    return (
        <React.Fragment>
            <TitlePage title='HRNet' />

            <div className="container">
                <a href="employee-list.html">View Current Employees</a>
                <h2>Create Employee</h2>
                <Form idName='create-employee'>

                </Form>
                
                <button onclick="saveEmployee()">Save</button>
            </div>
        </React.Fragment>
    );
}