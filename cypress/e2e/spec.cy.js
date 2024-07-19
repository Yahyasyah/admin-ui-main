// eslint-disable-next-line no-undef
describe('Categories Menu', () => {
    // eslint-disable-next-line no-undef
    it('should navigate to Categories page and perform CRUD operations', () => {
      // eslint-disable-next-line no-undef
      cy.visit('http://localhost:5173/')
      // eslint-disable-next-line no-undef
      cy.wait(3000); // Tunggu 3 detik setelah mengunjungi halaman
  
      // eslint-disable-next-line no-undef
      cy.get('[data-testid="form"]').should("exist")
  
      // eslint-disable-next-line no-undef
      cy.get('input#email')
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Enter your email')
        .type('admin@store.com').should('have.value', 'admin@store.com')
  
      // eslint-disable-next-line no-undef
      cy.get('input#password')
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Enter your password')
        .type('123456').should('have.value', '123456') 
        
      // eslint-disable-next-line no-undef
      cy.get('[data-testid="submit"]').click()
      // eslint-disable-next-line no-undef
      cy.wait(3000); // Tunggu 3 detik setelah klik submit
  
      // eslint-disable-next-line no-undef
      cy.get('div.home').should('be.visible')
      // eslint-disable-next-line no-undef
      cy.get('div.sidebar').should('be.visible')
  
      // 1) Mengklik menu Categories dan memastikan masuk ke halaman Categories
      // eslint-disable-next-line no-undef
      cy.get('[data-testid="categories"]', { timeout: 10000 }).should('be.visible').click()
      // eslint-disable-next-line no-undef
      cy.wait(3000); // Tunggu 3 detik setelah mengklik Categories
      // eslint-disable-next-line no-undef
      cy.url().should('include', '/categories')
      // eslint-disable-next-line no-undef
      cy.get('div.datatableTitle').contains('CATEGORIES')
  
      // 2) Klik tombol Add New 
      // eslint-disable-next-line no-undef
      cy.get('[data-testid="add-new"]').click() // Ganti selector sesuai dengan tombol Add New
      // eslint-disable-next-line no-undef
      cy.wait(2000); // Tunggu 3 detik setelah mengklik Add New
      
      // 3) Tunggu dan menulis "Dessert" pada placeholder yang ada
      // eslint-disable-next-line no-undef
      cy.get('input[placeholder="Coffee"]', { timeout: 10000 }) // Ganti selector sesuai placeholder yang tepat
        .should('be.visible')
        .type('Dessert')
        .should('have.value', 'Dessert')
  
      // 4) Klik tombol Send
      // eslint-disable-next-line no-undef
      cy.get('button[type="submit"]').click()
   
  
    })
  })