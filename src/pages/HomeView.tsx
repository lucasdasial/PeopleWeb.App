import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Head } from "../components/Head";
import { Page } from "../components/Page";

export const HomeView = () => {
  const navigate = useNavigate();

  const buttonAction = (
    <button onClick={() => navigate("/add-person")}>
      <Plus />
      Nova pessoa
    </button>
  );

  return (
    <>
      <Page>
        <Head title="Pessoas Cadastradas" button={buttonAction} />
      </Page>
    </>
  );
};
