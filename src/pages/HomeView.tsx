import { Plus } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyBox } from "../components/EmptyBox";
import { Head } from "../components/Head";
import { Page } from "../components/Page";
import { PersonItem } from "../components/PersonItem";
import { PeopleContext } from "../contexts/PeopleContext";

export const HomeView = () => {
  const navigate = useNavigate();
  const { people } = useContext(PeopleContext);

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
        <p className="text">{people.length} pessoas cadastradas</p>
        <div className="grid">
          {people.length > 0 ? (
            people.map((person) => <PersonItem data={person} />)
          ) : (
            <EmptyBox />
          )}
        </div>
      </Page>
    </>
  );
};
