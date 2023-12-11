export const sendContactForm = async (data:any) =>
  fetch("/api/contactmail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Mensagem não enviada, favor preencher os campos corretamente!");
    return res.json();
  });