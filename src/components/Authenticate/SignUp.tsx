import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input';

export default function SignUp({
  handleToggleForm,
}: {
  handleToggleForm: () => void;
}) {
  const router = useRouter();

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      lastName: Yup.string(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .min(1, 'Password is too short - should be 8 chars minimum')
        .required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'password does not match')
        .required(),
    }),
    onSubmit: async (values) => {
      const dataParse = JSON.stringify(values);
      const request = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataParse,
      });
      const response = await request.json();

      if (response.ok) {
        console.log('Account created');
        router.push('/home');
      }

      console.log(response);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          id="name"
          type="text"
          label="Name"
          placeholder="Joe"
          error={errors.name}
          onChange={handleChange}
          value={values.name}
        />
        <Input
          id="lastName"
          name="lastName"
          type="text"
          label="Last name"
          placeholder="Doe"
          error={errors.lastName}
          onChange={handleChange}
          value={values.lastName}
        />
        <Input
          name="email"
          type="text"
          id="email"
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
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm you password"
          error={errors.confirmPassword}
          onChange={handleChange}
          value={values.confirmPassword}
        />
        <div className="flex justify-between mt-2">
          <Button variant="primary" type="submit">
            Create account
          </Button>
          <Button onClick={handleToggleForm}>Login into your account</Button>
        </div>
      </form>
    </div>
  );
}
