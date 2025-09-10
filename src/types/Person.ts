export interface Address {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export type Person = {
  id: string;
  name: string;
  cpf: string;
  gender?: string;
  birthDate: string;
  email?: string;
  birthPlace?: string;
  nationality?: string;
  address?: Address;
  createdAt: string;
  updatedAt: string;
};

export interface PersonFormData {
  name: string;
  cpf: string;
  birthDate: string;
  email: string;
  birthPlace: string;
  nationality: string;
  hasAddressInfo: boolean;
  address: Address;
}
