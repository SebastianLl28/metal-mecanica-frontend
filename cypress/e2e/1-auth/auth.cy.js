describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('form button[type="submit"]').as('submit')
    cy.get('input[type="email"]').as('email')
    cy.get('input[type="password"]').as('password')
  })

  it('should have a form', () => {
    cy.get('form').should('exist')
  })

  describe('Validation Email Input', () => {
    it('should have an input for email', () => {
      cy.get('@email').should('exist')
    })

    it('should have an error message if the email is invalid', () => {
      cy.get('@email').type('invalidemail')
      cy.get('@submit').click()
      cy.get('span.error')
        .should('exist')
        .contains('El correo tiene que estar en el formato adecuado')
    })

    it('should not have an error message if the email is valid', () => {
      cy.get('@email').type('admin@admin.com')
      cy.get('@submit').click()
      cy.get('@email').next().should('not.exist')
    })

    it('should have an error message if the email is empty', () => {
      cy.get('@submit').click()
      cy.get('span.error').should('exist').contains('El correo es requerido')
    })
  })

  describe('Validation Password Input', () => {
    it('should have an input for password', () => {
      cy.get('@password').should('exist')
    })

    it('should have an error message if the password is invalid', () => {
      cy.get('@password').type('123')
      cy.get('@submit').click()
      cy.get('span.error')
        .should('exist')
        .contains('La contraseña tiene que tener al menos 5 caracteres')
    })

    it('should not have an error message if the password is valid', () => {
      cy.get('input[type="password"]').type('123456')
      cy.get('@submit').click()
      cy.get('@password').next().should('not.exist')
    })
  })

  describe('Form Submission', () => {
    it('should display an error message for incorrect email or password', () => {
      cy.get('@email').type('wrongemail@gmail.com')
      cy.get('@password').type('123456789')
      cy.get('@submit').click()
      cy.location('pathname').should('eq', '/')
      cy.contains('Correo o contraseña incorrectos').should('exist')
    })

    it('should redirect to /dashboard on successful login', () => {
      cy.get('@email').type('admin@admin.com')
      cy.get('@password').type('123456789')
      cy.get('@submit').click()
      cy.location('pathname').should('eq', '/dashboard')
      cy.contains('Iniciaste sesión correctamente').should('exist')
      cy.window().its('localStorage').invoke('getItem', 'token').should('exist')
    })
  })
})
