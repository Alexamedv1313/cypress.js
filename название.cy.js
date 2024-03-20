describe('Тестирование формы авторизации', function () {
    it('Проверка правильного ввода почты и пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled');
         cy.get('.link').contains('qa.studio');
         cy.get('.link').click();
         cy.url().should('include', 'https://qa.studio/')
         cy.go('back');
         cy.get('#forgotEmailButton').contains('Забыли пароль?');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.not.disabled');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.not.disabled')
        })
        
 
  {
    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#forgotEmailButton').click();
         cy.get('#forgotForm > .header').contains('Восстановите пароль');
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').should('be.not.disabled');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.not.disabled');
        })   
 }
 {
    it('Проверка правильного ввода почты и неправильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('.link').contains('qa.studio');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio3');
        cy.get('#loginButton').should('be.not.disabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.not.disabled')
       })
 }
 {
    it('Проверка ввода неправильной почты и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('.link').contains('qa.studio');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#mail').type('ger2man@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.not.disabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.not.disabled')
       })
 }
 {
 it('Проверка ввода почты без "@" и правильного пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#loginButton').should('be.disabled');
    cy.get('.link').contains('qa.studio');
    cy.get('#forgotEmailButton').contains('Забыли пароль?');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.not.disabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
    cy.get('#exitMessageButton > .exitIcon').should('be.not.disabled')
   })
}
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#loginButton').should('be.disabled');
    cy.get('.link').contains('qa.studio');
    cy.get('#forgotEmailButton').contains('Забыли пароль?');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.not.disabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.not.disabled')
   })
})
