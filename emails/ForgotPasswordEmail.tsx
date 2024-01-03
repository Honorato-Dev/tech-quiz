import React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
export default function ForgotPasswordEmail({
  params,
}:{
  params: { name: string; url: string };
}) {
  return (
    <Html>
      <Heading as="h2"> Olá {params.name} </Heading>
      <Text>
        Nós recebemos uma requisição de alteração de senhas. Se não foi você ignore esse email
        
      </Text>
      <Button
        
        href={params.url}
        style={{ background: "#000", color: "#FFFFFF", padding: "10px 20px"  }}
      >
        Click aqui
      </Button>
      <Hr />

      <Heading as="h3">Regards</Heading>
      <Text>Tech Quiz</Text>
    </Html>
  );
}