import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PeopleContext } from "../contexts/PeopleContext";
import { PersonPayload } from "../types/Person";
import { FormField } from "./FormField";

export const PersonForm = () => {
  const { register, handleSubmit } = useForm<PersonPayload>();

  const { addPerson } = useContext(PeopleContext);

  const navigate = useNavigate();
  const notifySuccess = () =>
    toast.success("Pessoa adicionada!", {
      theme: "colored",
      closeOnClick: true,
      draggable: true,
      position: "top-left",
    });

  const notifyReason = (reason: string) =>
    toast.error(reason, {
      theme: "colored",
      closeOnClick: true,
      draggable: true,
      position: "top-left",
    });

  function onSubmit(data: PersonPayload) {
    let payload = parsePayload(data);

    addPerson(payload)
      .then(() => {
        notifySuccess();
        navigate("/");
      })
      .catch((error) => {
        const msg = error.response.data.message;
        if (msg instanceof Array) {
          notifyReason(error.response.data.message[0]);
          return;
        }
        notifyReason(error.response.data.message);
      });
  }

  function parsePayload({
    name,
    cpf,
    birthDate,
    email,
    nationality,
    birthPlace,
  }: PersonPayload): Object {
    return {
      name,
      cpf,
      birthDate,
      ...(email && { email: email }),
      ...(nationality && { nationality: nationality }),
      ...(birthPlace && { birthPlace: birthPlace }),
    };
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Campos Obrigatorios</h3>
      <section className="fields fields-required">
        <FormField label="Nome completo" required>
          <input
            type="text"
            required
            placeholder="Digite o nome completo"
            {...register("name", { required: true })}
          />
        </FormField>
        <FormField label="CPF" required>
          <input
            required
            type="number"
            pattern="[0-9]*"
            maxLength={11}
            inputMode="numeric"
            placeholder="000.000.000-00"
            {...register("cpf", { required: true })}
          />
        </FormField>
        <FormField label="Data nascimento" required>
          <input
            type="date"
            required
            placeholder="Data nascimento"
            className="date-picker"
            {...register("birthDate", { required: true })}
          />
        </FormField>
      </section>

      <div className="divider" />
      <h3>Campos Opicionais</h3>
      <section className="fields fields-optional">
        <FormField label="E-mail">
          <input
            type="email"
            placeholder="email@exemplo.com"
            {...register("email")}
          />
        </FormField>
        <FormField label="Naturalidade">
          <input
            type="text"
            placeholder="Cidade de nascimento"
            {...register("birthPlace")}
          />
        </FormField>
        <FormField label="Nacionalidade">
          <input
            type="text"
            placeholder="Ex: Brasileira"
            {...register("nationality")}
          />
        </FormField>
      </section>

      <div className="form-buttons">
        <button className="btn-cancel" onClick={() => handleCancel()}>
          Cancelar
        </button>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};
