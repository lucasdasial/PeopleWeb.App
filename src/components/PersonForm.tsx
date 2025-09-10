import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormField } from "./FormField";

export const PersonForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // const { addPerson } = useContext(PeopleContext);

  const notify = () =>
    toast.success("Pessoa adicionada!", {
      theme: "colored",
      closeOnClick: true,
      draggable: true,
      position: "top-left",
    });

  function onSubmit(data: Object) {
    // addPerson();
    notify();
    console.log(data);
    navigate("/");
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
            {...register("birthdate", { required: true })}
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
