import Layout from '@/components/Layout';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
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
      <div></div>
      <Layout title="Contato">
        <div className="h-screen   flex  flex-col text-center   max-w-7xl px-10 justify-evenly mx-auto items-center bg-white bg-opacity-80  mb-8 p-4 rounded-md  mt-12 lg:mt-8">
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}

          <h3 className="top-24 font-semibold text-sm uppercase tracking-[20px] text-gray-500 md:text-2xl lg:text:2xl">
            contato
          </h3>

          <div className="flex  flex-col text-center space-y-5 md:text-left md:flex-row    mx-auto items-center">
            <div className="flex flex-col space-y-5 lg:space-y-10 ">
            

              {/* <div className=" flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-green500 h-4 w-4 md:h-5 md:w-5   lg:h-7 lg:w-7 animate-pulse" />
                <p className="text-sm lg:text-xl lg:text-2xl">71 99942-6443</p>
              </div> */}
              <div className=" flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-purple-400 h-4 w-4 md:h-5 md:w-5  lg:h-7 lg:w-7 animate-pulse" />
                <p className="text-sm lg:text-xl lg:text-2xl">
                  techquizbr@gmail.com
                </p>
              </div>

              {/* <div className=" flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-green500 h-4 w-4 md:h-5 md:w-5   lg:h-7 lg:w-7  animate-pulse" />
                <p className="text-sm lg:text-xl lg:text-2xl">Litoral Norte</p>
              </div> */}
            </div>

            <Container maxW="450px" m={1}>
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
                className="bg-[#cf82bf] py-5 px-1- rounded-md text-black font-bold text-lg"
                variant=""
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
                Enviar
              </Button>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactScreen;
