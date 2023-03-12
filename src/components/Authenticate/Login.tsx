import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input';

export default function Login({
  handleToggleForm,
}: {
  handleToggleForm: () => void;
}) {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email adress')
        .required('Email is required'),
      //TODO: change this
      password: Yup.string()
        .min(1, 'You password needed 8 characters or more')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      const dataParse = JSON.stringify(values);
      const request = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataParse,
      });
      const response = await request.json();
      console.log(response);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="text"
          id="email"
          autocomplete="true"
          label="Email"
          placeholder="user@example.com"
          error={errors.email}
          onChange={handleChange}
          value={values.email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="Password"
          placeholder="Enter you password"
          error={errors.password}
          onChange={handleChange}
          value={values.password}
        />
        <div className="flex justify-between mt-2">
          <Button variant={'primary'} type="submit">
            Login
          </Button>
          <Button onClick={handleToggleForm}>Create an account</Button>
        </div>
      </form>
    </div>
  );
}
