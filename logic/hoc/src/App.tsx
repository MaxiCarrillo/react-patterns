import { Form } from "./component/form";
import { withControlledForm } from "./hoc/with-controlled-form";

const FormWrapped = withControlledForm(Form, {
  name: '',
  address: '',
  age: '',
  phone: ''
})

const App = () => {

  const handleSubmit = (formValues: Object) => alert(formValues);

  return (
    <div>
      <h1>Contact Form</h1>
      <FormWrapped onSubmit={handleSubmit} />
    </div>
  )
}

export default App