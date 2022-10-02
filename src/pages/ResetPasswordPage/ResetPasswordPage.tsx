import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinners/ClipLoader";
import {
  fetchResetPassword,
  getUserInfo,
  resetError,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Input } from "../../components/index";
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
import { useToggle } from "../../hooks";
import { useEffect } from "react";
import { ROUTE } from "../../routes/routes";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
