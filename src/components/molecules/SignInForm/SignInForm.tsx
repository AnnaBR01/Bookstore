import Spinner from "react-spinners/ClipLoader";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useAppSelector, getUserInfo, fetchSignInUser, useAppDispatch, resetError } from "store";
import { ROUTE } from "routes";
import { ButtonForm, InputError, StyledSignInForm, Error, Text } from "./styles";

export type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignInFormValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .unwrap()
      .then(() => {
        navigate(`/${ROUTE.ACCOUNT}`); // TODO error переделать на модальное окно
      })
      .finally(() => {
        reset();
      });
  };

  useEffect(() => {
    error && dispatch(resetError());
  }, [dispatch, error]);

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

      <Link to={`/${ROUTE.RESET_PASSWORD}`}>
        <Text>Forgot password ?</Text>
      </Link>

      <ButtonForm type="submit">
        Sign in <Spinner loading={isPendingAuth} size={25} />
      </ButtonForm>
    </StyledSignInForm>
  );
};
