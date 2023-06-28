import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';
// import {useResetNavigationSuccess} from '@hooks';

import {signUpSchema, SignUpSchema} from './signUpSchema';

export function SignUpScreen(props: AuthScreenProps<'SignUpScreen'>) {
  console.log(props);
  // const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        // rules={{
        //   required: 'E-mail obrigatório',
        //   pattern: {
        //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        //     message: 'E-mail inválido',
        //   },
        // }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
