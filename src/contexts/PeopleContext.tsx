import React, { createContext, useState, type ReactNode } from "react";
import { Person } from "../types/Person";

interface Props {
  children?: ReactNode;
}

export interface PeopleContexData {
  people: Person[];
  addPerson: () => void;
}

export const PeopleContext = createContext<PeopleContexData>(
  {} as PeopleContexData
);

export const PeopleProvider: React.FC<Props> = ({ children }) => {
  const [people, setPeople] = useState<Person[]>([]);

  function addPerson() {
    let now = Date.now();

    setPeople((prev) => [
      ...prev,
      {
        id: "",
        name: `Lucas Alves ${prev.length}`,
        birthDate: "2000-11-20",
        cpf: "06365165714",
        createdAt: new Date(now).toUTCString(),
        updatedAt: new Date(now).toUTCString(),
        birthPlace: "Manaus",
        nationality: "Brasileiro",
        email: "teste@gmail.com",
      },
    ]);
  }

  return (
    <PeopleContext.Provider value={{ people, addPerson }}>
      {children}
    </PeopleContext.Provider>
  );
};
