import { FC } from "react";

interface FormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    formValues: {
        name: string;
        address: string;
        age: number | string;
        phone: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form: FC<FormProps> = ({ handleSubmit, formValues, handleChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <p>Address</p>
                <input
                    type="text"
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <p>Age</p>
                <input
                    type="number"
                    name="age"
                    value={formValues.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <p>Phone</p>
                <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    );
};