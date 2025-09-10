import { ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormField } from "../components/FormField";
import { Head } from "../components/Head";
import { Page } from "../components/Page";
import { PeopleContext } from "../contexts/PeopleContext";

export const AddPersonView = () => {
  const { addPerson } = useContext(PeopleContext);
  const navigate = useNavigate();

  const actionButton = (
    <Link to="/">
      <ChevronLeft /> Voltar
    </Link>
  );

  const notify = () =>
    toast.success("Pessoa adicionada!", {
      theme: "colored",
      closeOnClick: true,
      draggable: true,
      position: "top-left",
    });

  function handleSubmit() {
    navigate("/");
    notify();
    addPerson();
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <>
      <Page>
        <Head title="Adicionar pessoa" button={actionButton} isVariant />
        <div className="form">
          <h3>Campos Obrigatorios</h3>
          <section className="fields fields-required">
            <FormField label="Nome completo">
              <input type="text" placeholder="Digite o nome completo" />
            </FormField>
            <FormField label="CPF">
              <input type="number" placeholder="000.000.000-00" />
            </FormField>
            <FormField label="Data nascimento">
              <input
                type="date"
                placeholder="Data nascimento"
                className="date-picker"
              />
            </FormField>
          </section>

          <div className="divider" />
          <h3>Campos Opicionais</h3>
          <section className="fields fields-optional">
            <FormField label="E-mail">
              <input type="email" placeholder="email@exemplo.com" />
            </FormField>
            <FormField label="Naturalidade">
              <input type="text" placeholder="Cidade de nascimento" />
            </FormField>
            <FormField label="Nacionalidade">
              <input type="text" placeholder="Ex: Brasileira" />
            </FormField>
          </section>
        </div>
        <div className="form-buttons">
          <button className="btn-cancel" onClick={() => handleCancel()}>
            Cancelar
          </button>
          <button onClick={() => handleSubmit()}>Cadastrar</button>
        </div>
      </Page>
    </>
  );
};
