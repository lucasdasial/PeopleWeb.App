import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Head } from "../components/Head";
import { Page } from "../components/Page";

export const AddPersonView = () => {
  const actionButton = (
    <Link to="/">
      <ChevronLeft /> Voltar
    </Link>
  );
  return (
    <>
      <Page>
        <Head title="Adicionar pessoa" button={actionButton} isVariant />
      </Page>
    </>
  );
};
