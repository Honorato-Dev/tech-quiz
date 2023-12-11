import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
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
import Layout from '@/components/Layout';
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

export default function Contact() {
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
    <Layout title='Contato'>
      <div className="h-screen  flex relative flex-col text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center ">
        <div></div>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-sm lg:text-2xl ">
          Fale conosco
        </h3>

        <div className="flex justify-content  mt-12 ">
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
        </div>


        <Container maxW="450px" mt={1}>
          <FormControl
            className="flex flex-col space-y-2 w-fit mx-auto"
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <div className="flex space-x-2">
              <Input
                placeholder="Nome"
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </div>

            <Input
              placeholder="Assunto"
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
            <Textarea
              placeholder="Menssagem"
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
              size='md'
              height='48px'
              width='full'
              border='2px'
            variant="solid"
            colorScheme="purple"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Enviar
          </Button>
        </Container>
      </div>
    </Layout>
  );
}
