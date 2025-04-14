import { FC, useState } from "react";

interface WithFormProps {
    onSubmit: (values: Object) => void;
}

export const withControlledForm = (FormComponent: React.ComponentType<any>, initialState = {}) => {

    const WithForm: FC<WithFormProps> = ({ onSubmit, ...props }) => {
        const [formValues, setFormValues] = useState<Object>(initialState);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {
                target: { name, value }
            } = e;
            setFormValues({ ...formValues, [name]: value });
        };

        const handleSubmit = (e: Event) => {
            e.preventDefault();
            onSubmit(JSON.stringify(formValues));
        };

        const finalProps = {
            ...props,
            formValues,
            handleChange,
            handleSubmit
        };

        return <FormComponent {...finalProps} />;
    };

    WithForm.displayName = `WithForm(${getDisplayName(FormComponent)})`;

    function getDisplayName(WrappedComponent: React.ComponentType<any>) {
        return WrappedComponent.displayName || WrappedComponent.name || "Component";
    }

    return WithForm;
};