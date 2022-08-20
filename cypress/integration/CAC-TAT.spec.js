/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.get("#firstName").type("Rafael");
    cy.get("#lastName").type("Vidal");
    cy.get("#email").type("rafael@site.com");
    cy.get("#open-text-area").type("teste");
    cy.contains("button", "Enviar").click();

    cy.get(".success");
  });
});
