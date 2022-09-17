import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Spinner from "react-spinners/ClipLoader";
import { useAppDispatch, useAppSelector, getUserInfo } from "../../../store";
import { Input } from "../..";
import { ButtonForm, InputError, StyledSignInForm, Error } from "./styles";

export type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit: SubmitHandler<SignInFormValues> = (userInfo) => {
    // TODO
  };

  return (
    <StyledSignInForm action="#" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is requared!",
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Please enter a vaid email",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            type="text"
            placeholder="Your email"
            label="Email"
          />
        )}
      />

      {errors.email && <InputError>{errors.email.message}</InputError>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is requared!",
          minLength: {
            value: 6,
            message: "Password must be more than 6 characters",
          },
          maxLength: {
            value: 20,
            message: "Password must be less than 20 characters",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            type="password"
            placeholder="Your password"
            label="Password"
          />
        )}
      />

      {errors.password && <InputError>{errors.password.message}</InputError>}

      {error && <Error>{error}</Error>}

      <ButtonForm type="submit">
        Sign in <Spinner loading={isPendingAuth} size={25} />
      </ButtonForm>
    </StyledSignInForm>
  );
};
