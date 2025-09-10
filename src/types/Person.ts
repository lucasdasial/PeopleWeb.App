export type Person = {
  id: string;
  name: string;
  cpf: string;
  gender?: string;
  birthDate: string;
  email?: string;
  birthPlace?: string;
  nationality?: string;
  createdAt: string;
  updatedAt: string;
};

export interface PersonPayload {
  name: string;
  cpf: string;
  birthDate: string;
  email: string;
  birthPlace: string;
  nationality: string;
  hasAddressInfo: boolean;
}
