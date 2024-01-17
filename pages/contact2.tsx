import Layout from '@/components/Layout1';
import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';

import { sendContactForm } from '@/pages/api/mail';
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initState = { isLoading: false, error: '', values: initValues };

const ContactScreen = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched]: any = useState({});

  const { values, isLoading, error }: any = state;

  const onBlur = ({ target }: any) =>
    setTouched((prev: any) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: 'Message sent.',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <Layout title="Contato">
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <div className=" flex justify-center items-center  mt-20 ">
          <div className="flex flex-col p-3">
            <div className="      ">
              <div className=" mt-4 mb-4 p-4 rounded-md bg-white bg-opacity-80">
                <p className="flex justify-center font-semibold text-xl lg:text-2xl">
                  Envie uma mensagem
                </p>
                <Container maxW="450px" mt={20}>
                  <FormControl
                    isRequired
                    isInvalid={touched.name && !values.name}
                    mb={5}
                  >
                    <FormLabel>Nome</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      errorBorderColor="red.300"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isRequired
                    isInvalid={touched.email && !values.email}
                    mb={5}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      errorBorderColor="red.300"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    mb={5}
                    isRequired
                    isInvalid={touched.subject && !values.subject}
                  >
                    <FormLabel>Assunto</FormLabel>
                    <Input
                      type="text"
                      name="subject"
                      errorBorderColor="red.300"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isRequired
                    isInvalid={touched.message && !values.message}
                    mb={5}
                  >
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea
                      name="message"
                      rows={4}
                      errorBorderColor="red.300"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                  </FormControl>

                  <Button
                    variant="outline"
                    colorScheme="blue"
                    isLoading={isLoading}
                    disabled={
                      !values.name ||
                      !values.email ||
                      !values.subject ||
                      !values.message
                    }
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </Container>
              </div>
            </div>
            <div className=" bg-white bg-opacity-80 rounded-md shadow-md p-3">
              <div>
                <p className="flex text-sm md:text-base lg:text-lg justify-center font-medium">
                  Estrada do Coco, KM 36, Barra do Jacuípe,-Camçarí/Bahia
                  CEP-42833-000
                </p>
              </div>
              <div>
                <p className="flex text-sm md:text-base lg:text-lg justify-center font-medium pb-3">
                  Atendimento: 08h às 12h e das 13h às 17h (segunda a sexta) e
                  08h às 12h (sábado){' '}
                </p>
              </div>
              <div>
                <p className="flex text-sm md:text-base lg:text-lg justify-center font-medium">
                  <span className="flex text-sm md:text-base lg:text-lg justify-center font-bold px-1">
                    E_mail:
                  </span>{' '}
                  parquedasarvores.secretaria@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactScreen;
