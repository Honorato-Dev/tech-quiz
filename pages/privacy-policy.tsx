import Layout from '@/components/Layout';
import React from 'react';

const PrivacyPolicyScreen = () => {
  return (
    <Layout title="Política de privacidade">
      <div className="flex flex-col space-y-4 py-6 px-4 bg-white justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {' '}
          Política de Privacidade
        </h1>
        <p className="text:sm md:text-base lg:text-lg">
          Bem-vindo à Política de Privacidade do Tech Quiz. Esta página descreve
          como coletamos, usamos, compartilhamos e protegemos suas informações
          quando você utiliza nossos serviços. Ao acessar ou utilizar o site
          Tech Quiz, você concorda com os termos desta política.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          1. Informações Coletadas
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          1.1 Informações Pessoais: Podemos coletar informações pessoais
          fornecidas voluntariamente por você, como nome, endereço de e-mail e
          outras informações relevantes para a prestação dos serviços.
        </p>
        <p className="text:sm md:text-base lg:text-lg">
          1.2 Informações Automáticas: Ao utilizar o Tech Quiz, coletamos
          automaticamente informações não pessoais, como dados de navegação,
          endereço IP, tipo de navegador, dispositivo utilizado e outras
          estatísticas anônimas.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          2. Uso das Informações
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          2.1 Melhoria dos Serviços: Utilizamos as informações coletadas para
          melhorar e personalizar sua experiência no Tech Quiz, desenvolvendo
          novos recursos, analisando tendências e otimizando o desempenho do
          site.
        </p>
        <p className="text:sm md:text-base lg:text-lg">
          2.2 Comunicação: Podemos utilizar seu endereço de e-mail para enviar
          informações sobre atualizações, novos recursos, ou outras notificações
          relacionadas ao Tech Quiz. Você pode optar por não receber essas
          comunicações a qualquer momento.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          3. Compartilhamento de Informações
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          3.1 Parceiros e Fornecedores de Serviços: Podemos compartilhar suas
          informações com parceiros e fornecedores de serviços que ajudam na
          operação do Tech Quiz, como provedores de hospedagem, processadores de
          pagamento e outros prestadores de serviços.
        </p>
        <p className="text:sm md:text-base lg:text-lg">
          3.2 Requisitos Legais: Reservamo-nos o direito de divulgar suas
          informações, caso seja necessário cumprir com obrigações legais,
          responder a processos judiciais, ou proteger nossos direitos legais.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          4. Cookies e Tecnologias Semelhantes
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          O Tech Quiz utiliza cookies e tecnologias semelhantes para melhorar a
          funcionalidade do site, personalizar sua experiência e analisar o uso
          dos serviços. Ao continuar a utilizar o site, você concorda com o uso
          dessas tecnologias.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">5. Segurança</h2>
        <p className="text:sm md:text-base lg:text-lg">
          Empregamos medidas de segurança razoáveis para proteger suas
          informações contra acesso não autorizado, alteração, divulgação ou
          destruição não autorizada. No entanto, não podemos garantir a
          segurança completa de suas informações.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">6. Menores de Idade</h2>
        <p className="text:sm md:text-base lg:text-lg">
          O Tech Quiz não se destina a menores de 13 anos. Não coletamos
          intencionalmente informações de crianças menores de 13 anos. Se
          tivermos conhecimento de que coletamos informações de uma criança
          menor de 13 anos, tomaremos as medidas necessárias para excluir essas
          informações.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          7. Alterações nesta Política de Privacidade
        </h2>
        <p className="text:sm md:text-base lg:text-lg">
          Reservamo-nos o direito de atualizar esta Política de Privacidade
          periodicamente. Recomendamos que você revise esta página regularmente
          para estar ciente de quaisquer alterações. A continuação do uso do
          Tech Quiz após as alterações significa que você concorda com as
          modificações.
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl">8. Contato</h2>
        <p className="text:sm md:text-base lg:text-lg">
          Se tiver dúvidas ou preocupações sobre esta Política de Privacidade,
          entre em contato conosco pelo e-mail devnautas.dev@gmail.com. Ao
          utilizar o Tech Quiz, você concorda com os termos desta Política de
          Privacidade. Obrigado por confiar em nós para proteger suas
          informações.
        </p>
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl"></h2>
        <p className="text:sm md:text-base lg:text-lg"></p>
        <h2 className="text-xl md:text-2xl lg:text-3xl"></h2>
        <p className="text:sm md:text-base lg:text-lg"></p>
        <h2 className="text-xl md:text-2xl lg:text-3xl"></h2>
        <p className="text:sm md:text-base lg:text-lg"></p> */}
      </div>
    </Layout>
  );
};

export default PrivacyPolicyScreen;
