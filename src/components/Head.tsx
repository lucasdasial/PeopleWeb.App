import { UserPlus, Users } from "lucide-react";
import type { ReactElement } from "react";

type HeadProps = {
  title: string;
  button: ReactElement;
  isVariant?: boolean;
};

export const Head = ({ title, button, isVariant = false }: HeadProps) => {
  return (
    <div className="head">
      <div className="row">
        <div className={isVariant ? "circle-variant" : "circle"}>
          {isVariant ? <UserPlus /> : <Users />}
        </div>
        <h1>{title}</h1>
      </div>
      {button}
    </div>
  );
};
