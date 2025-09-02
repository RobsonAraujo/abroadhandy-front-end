import { Nullable } from "../types/generic";

export function formatCNPJ(cnpj?: Nullable<string | number>): string {
  if (String(cnpj).replace(/\D/g, "").length !== 14) {
    throw new Error("Invalid CNPJ. It must contain 14 digits.");
  }

  return String(cnpj).replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}
