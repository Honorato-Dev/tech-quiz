import React from 'react'

const CheckoutWizard = ({activeStep = 0}) => {
  return (
    <div className='mb-5 flex flex-wrap'>
        {
            [' Login do Usuário','Endereço de Envio', 'Método de Pagamento', 'Solicitar Pedido'].map(
                (step, index)=> (
                    <div key={index}
                    className={`flex-1 border-b-2 text-center 
                     ${index <= activeStep
                     ? 'border-indigo text-indigo'
                     : 'border-grayh text-grayh'}`}
                          >
                        {step}
                     </div>
                ))
        }
    </div>
  )
}

export default CheckoutWizard