import { formatCNPJ } from "../formatCNPJ"; // Adjust the import according to your file structure

describe("formatCNPJ", () => {
  it("should format a valid CNPJ string correctly", () => {
    const unformattedCNPJ = "12345678000195";
    const formattedCNPJ = formatCNPJ(unformattedCNPJ);
    expect(formattedCNPJ).toBe("12.345.678/0001-95");
  });

  it("should format a valid CNPJ number correctly", () => {
    const unformattedCNPJ = 12345678000195;
    const formattedCNPJ = formatCNPJ(unformattedCNPJ);
    expect(formattedCNPJ).toBe("12.345.678/0001-95");
  });

  it("should throw an error for a CNPJ with less than 14 digits", () => {
    const invalidCNPJ = "1234567800019";
    expect(() => formatCNPJ(invalidCNPJ)).toThrow(
      "Invalid CNPJ. It must contain 14 digits."
    );
  });

  it("should throw an error for a CNPJ with more than 14 digits", () => {
    const invalidCNPJ = "123456780001951";
    expect(() => formatCNPJ(invalidCNPJ)).toThrow(
      "Invalid CNPJ. It must contain 14 digits."
    );
  });

  it("should remove non-digit characters and format correctly", () => {
    const unformattedCNPJ = "12.345.678/0001-95";
    const formattedCNPJ = formatCNPJ(unformattedCNPJ);
    expect(formattedCNPJ).toBe("12.345.678/0001-95");
  });
});
