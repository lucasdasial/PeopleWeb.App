import { ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

  return (
    <>
      <Page>
        <Head title="Adicionar pessoa" button={actionButton} isVariant />
        <button
          onClick={() => {
            navigate("/");
            notify();
            addPerson();
          }}
        >
          Cadastrar
        </button>
      </Page>
    </>
  );
};
