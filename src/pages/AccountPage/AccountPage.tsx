import Spinner from "react-spinners/ClipLoader";
import { useEffect } from "react";
import { ArrowLeft } from "assets";
import { useNavigate } from "react-router-dom";
import {
  fetchUpdateEmailAndPassword,
  getUserInfo,
  useAppDispatch,
  useAppSelector,
  resetError,
  fetchSignOut,
} from "store";
import { useToggle, useWindowSize } from "hooks";
import { Color, Breakpoint } from "ui";
import { Input, Title, Button, Notification } from "components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "routes";
import {
  StyledAccountPage,
  ButtonArrow,
  AccountForm,
  SubTitle,
  EmailContainer,
  PasswordContainer,
  NewPasswordContainer,
  ButtonContainer,
  InputError,
  ButtonWrapper,
  ButtonCancel,
  Error,
  Info,
  InfoTitle,
  InfoContainer,
  TitleDescription,
  InfoDescription,
} from "./styles";
import { AnimatePresence } from "framer-motion";

export type UpdateFormValues = {
  newEmail: string;
  password: string;
  newPassword: string;
  confirm: string;
};

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const { email, isPendingAuth, error, creationTime } = useAppSelector(getUserInfo);
  const [isOpenNotification, toggleIsOpenNotification] = useToggle();

  const handlePage = () => {
    navigate(-1);
  };

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UpdateFormValues>({
    defaultValues: { newEmail: email, password: "", confirm: "" },
  });

  const onSubmit: SubmitHandler<UpdateFormValues> = (userInfo) => {
    dispatch(fetchUpdateEmailAndPassword(userInfo))
      .unwrap()
      .then(() => {
        toggleIsOpenNotification();
      })
      .finally(() => {
        reset();
      });
  };

  const handleAuth = (): void => {
    dispatch(fetchSignOut()).then(() => {
      navigate(ROUTE.HOME);
    });
  };

  useEffect(() => {
    error && dispatch(resetError());
  }, [dispatch, error]);

  const createdTime = new Date(creationTime);

  return (
    <StyledAccountPage>
      <ButtonArrow onClick={handlePage} whileHover={{ scale: 1.2 }}>
        <ArrowLeft
          width={width < Breakpoint.MD ? "30" : "40"}
          fill={Color.Primary}
          stroke={Color.Primary}
        />
      </ButtonArrow>

      <Title value="Account" />

      <AccountForm action="#" onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>Profile</SubTitle>
        <EmailContainer>
          <Controller
            control={control}
            name="newEmail"
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
          <Info animate={{ y: 0 }} initial={{ y: "-100%" }} transition={{ duration: 2 }}>
            <InfoTitle>We've been expecting you!</InfoTitle>

            <InfoContainer>
              <TitleDescription>Today:</TitleDescription>
              <InfoDescription>{new Date().toLocaleDateString()}</InfoDescription>
            </InfoContainer>

            <InfoContainer>
              <TitleDescription>Account created:</TitleDescription>
              <InfoDescription>{createdTime.toLocaleDateString()}</InfoDescription>
            </InfoContainer>
          </Info>
        </EmailContainer>

        {errors.newEmail && <InputError>{errors.newEmail.message}</InputError>}

        <SubTitle>Password</SubTitle>
        <PasswordContainer>
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
        </PasswordContainer>

        {!errors.newEmail && errors.password && <InputError>{errors.password.message}</InputError>}

        <NewPasswordContainer>
          <Controller
            control={control}
            name="newPassword"
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
                placeholder="New password"
                label="New password"
              />
            )}
          />

          <Controller
            control={control}
            name="confirm"
            rules={{
              required: "Confirm  your password",
              validate: (value: string) => {
                if (watch("newPassword") !== value) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                type="password"
                placeholder="Confirm new password"
                label="Confirm new password"
              />
            )}
          />
        </NewPasswordContainer>

        {!errors.newEmail && !errors.password && errors.newPassword && (
          <InputError>{errors.newPassword.message}</InputError>
        )}

        {!errors.newEmail && !errors.password && !errors.newPassword && errors.confirm && (
          <InputError>{errors.confirm.message}</InputError>
        )}

        {error && <Error>{error}</Error>}

        <ButtonContainer>
          <ButtonWrapper>
            <Button type="submit" value="Save changes">
              <Spinner loading={isPendingAuth} size={25} />
            </Button>

            <ButtonCancel onClick={handleAuth}>Log out</ButtonCancel>
          </ButtonWrapper>
        </ButtonContainer>
      </AccountForm>

      <AnimatePresence>
        {isOpenNotification && (
          <Notification
            value="The order has been placed!"
            toggleIsOpenNotification={toggleIsOpenNotification}
          />
        )}
      </AnimatePresence>
    </StyledAccountPage>
  );
};
