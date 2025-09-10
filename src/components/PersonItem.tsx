import { Calendar, ChevronRight, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Person } from "../types/Person";
import { formatDate } from "../utils/DateFormat";

export type PersonItemProps = {
  data: Person;
};

export const PersonItem = ({ data }: PersonItemProps) => {
  return (
    <div className="person-item">
      <div className="person-head">
        <div className="person-head-info">
          <div className="circle-variant">
            <User />
          </div>
          <div className="person-head-name">
            <p className="text-name">{data.name}</p>
            <p className="text-document">{data.cpf}</p>
          </div>
        </div>
        <Link to="/" className="person-head-edit">
          <ChevronRight />
        </Link>
      </div>
      <p className="text-info">
        <Calendar size={16} /> Nascimento: {formatDate(data.birthDate)}
      </p>
      <p className="text-info">
        <Mail size={16} />
        E-mail: {data.email ?? "Não cadastrado"}
      </p>
      <div className="tags">
        <p className="tag">{data.birthPlace}</p>
        <p className="tag nationality">{data.nationality}</p>
      </div>
    </div>
  );
};
