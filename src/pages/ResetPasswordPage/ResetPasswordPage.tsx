import Spinner from "react-spinners/ClipLoader";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { fetchResetPassword, getUserInfo, resetError, useAppDispatch, useAppSelector } from "store";
import { Input } from "components";
import { useToggle } from "hooks";
import { useEffect } from "react";
import { ROUTE } from "routes";
import {
  Form,
  ResetTitle,
  StyledResetPasswordPage,
  Error,
  ButtonForm,
  ButtonHome,
  Text,
  Email,
} from "./styles";

export type SignInFormValues = {
  email: string;
};

export const ResetPasswordPage = () => {
  const { isPendingAuth, error, emailForReset } = useAppSelector(getUserInfo);
  const [isResetPassword, setIsResetPassword] = useToggle();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm<SignInFormValues>({
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<SignInFormValues> = (userInfo) => {
    dispatch(fetchResetPassword(userInfo))
      .unwrap()
      .then(() => {
        setIsResetPassword();
      });
  };

  useEffect(() => {
    error && dispatch(resetError());
  }, [dispatch, error]);

  const handlePage = () => {
    navigate(ROUTE.HOME);
    reset();
  };

  return (
    <StyledResetPasswordPage>
      <ResetTitle>Reset password</ResetTitle>

      {isResetPassword && (
        <Text>
          You will receive an email <Email>{emailForReset}</Email> with a link to reset your
          password!
        </Text>
      )}

      <Form action="#" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
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

        {error && <Error>{error}</Error>}

        {!isResetPassword && (
          <ButtonForm type="submit">
            Reset <Spinner loading={isPendingAuth} size={25} />
          </ButtonForm>
        )}
      </Form>

      {isResetPassword && (
        <ButtonHome type="button" onClick={handlePage}>
          Go to Home
        </ButtonHome>
      )}
    </StyledResetPasswordPage>
  );
};
