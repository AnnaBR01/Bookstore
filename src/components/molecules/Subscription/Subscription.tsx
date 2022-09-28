import React from "react";
import { useForm } from "react-hook-form";
import { SecondaryTitle } from "../..";
import { ButtonForm, Form, StyledSubscription, Text, Input } from "./styles";

export const Subscription = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (): void => {
    alert("Ok"); //TODO модалка
    reset();
  };
  return (
    <StyledSubscription>
      <SecondaryTitle value="Subscribe to Newsletter" />
      <Text>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Text>

      <Form action="#" onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Your email" {...register("name")} />
        <ButtonForm type="submit">Subscribe</ButtonForm>
      </Form>
    </StyledSubscription>
  );
};
