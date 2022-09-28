import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../..";
import Spinner from "react-spinners/ClipLoader";
import { ButtonForm, InputError, StyledSignUpForm, Error } from "./styles";
import { useAppDispatch, useAppSelector, getUserInfo, fetchSignUpUser } from "../../../store";
import { ROUTE } from "../../../routes/routes";

export type SignUpFormValues = {
  email: string;
  password: string;
  confirm: string;
};

export const SignUpForm = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: { email: "", password: "", confirm: "" },
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = (userInfo) => {
    dispatch(fetchSignUpUser(userInfo))
      .unwrap()
      .then(() => {
        navigate(`/${ROUTE.ACCOUNT}`); // TODO error переделать на модальное окно
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledSignUpForm action="#" onSubmit={handleSubmit(onSubmit)}>
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

      {!errors.email && errors.password && <InputError>{errors.password.message}</InputError>}

      <Controller
        control={control}
        name="confirm"
        rules={{
          required: "Confirm  your password",
          validate: (value: string) => {
            if (watch("password") !== value) {
              return "Your passwords do no match";
            }
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            type="password"
            placeholder="Confirm your password"
            label="Confirm password"
          />
        )}
      />

      {errors.confirm && <InputError>{errors.confirm.message}</InputError>}

      {error && <Error>{error}</Error>}

      <ButtonForm type="submit">
        Sign up <Spinner loading={isPendingAuth} size={25} />
      </ButtonForm>
    </StyledSignUpForm>
  );
};
