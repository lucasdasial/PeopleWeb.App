import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { api } from "../http/api";
import { Person, PersonPayload } from "../types/Person";

interface Props {
  children?: ReactNode;
}

export interface PeopleContexData {
  isLoading: boolean;
  people: Person[];
  addPerson: (payload: PersonPayload) => void;
  fetchPeople: () => void;
  error: string;
}

export const PeopleContext = createContext<PeopleContexData>(
  {} as PeopleContexData
);

export const PeopleProvider: React.FC<Props> = ({ children }) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function getPeople() {
    api
      .get<Person[]>("/v1/person")
      .then((response) => setPeople(response.data))
      .catch(() => setError("Não foi possivel carregar pessoas"))
      .finally(() => setLoading(false));
  }

  function fetchPeople() {
    useEffect(() => getPeople(), []);
  }

  function addPerson(payload: PersonPayload) {
    console.log(payload);
  }
  return (
    <PeopleContext.Provider
      value={{ people, addPerson, isLoading, fetchPeople, error }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
