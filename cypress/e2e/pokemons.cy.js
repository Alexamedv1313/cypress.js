describe('Тестирование формы авторизации', function () {
  it('Проверка правильного ввода почты и пароля', function () {
    cy.visit('https://pokemonbattle.me');
    cy.get('.auth__title').contains('Битва покемонов');
    cy.get('p.auth__text').contains('Вход через соцсеть');
    cy.get('a.auth__social > .auth__social-icon').should('not.be.disabled');
    cy.get('#telegram-login-qa_studio_pokemon_prod_bot').should('not.be.disabled');
    cy.get('.k_show_500').should('not.be.disabled');
    cy.get('.auth__restore').contains('Восстановить');
    cy.get('.auth__restore').should('not.be.disabled');
    cy.get('.auth__button').contains('Войти');
    cy.get('.auth__button').should('not.be.disabled');
    cy.get('.auth__form > .auth__text').contains('Зарегистрироваться');
    cy.get(':nth-child(1) > .auth__input').type('sashkamedvedev1gmail.com@yandex.ru');
    cy.get('#password').type('Maazafaka228');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get('.available > button').first().click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ALEXANDR MEDVEDEV');
    cy.get('.pay__main-v2').click()
    cy.get('.pay-btn').click();
    cy.wait(2000);
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__main').click();
    cy.get('.payment__submit-button').click();
    cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    cy.get('.payment__adv').click();
  })
    });