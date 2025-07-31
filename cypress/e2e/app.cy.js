

class RegistroForm{
  elements = {
    tittleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () =>  cy.get('#imageUrl'),
    imageUrlInputFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  clickSubmit(){
    this.elements.submitBtn().click()
  }

  typeTitle = (text) => {
    if(!text) return;
    this.elements.tittleInput().type(text)
  }

   typeUrl = (url) => {
    if(!url) return;
    this.elements.imageUrlInput().type(url)
  }
}

const registroForm = new RegistroForm()

describe('Registro de Imagem', () => {
  describe('Enviar uma imagem com entradas invalidas', () => {
    const imagem ={
      titulo: '',
      url: ''
    }

    it ('Estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it (`Quando eu digito "${imagem.titulo}" no campo titulo`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it (`Quando eu digito "${imagem.url}" no campo url`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it ('Eu clico no botao de enviar', () => {
      registroForm.clickSubmit()
    })
    it ('Entao eu devo ver a mensagem "Please type a title for image" acima do campo titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
                         
    })
    it ('E eu devo ver a mensagem "Please type a valid URL" acima do campo url da imagem' , () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })

  describe('Enviar uma imagem com entradas validas', () => {
  const imagem = {
    titulo: 'pou pretinho',
    url: 'https://cdn-images.dzcdn.net/images/cover/70efe01b209c446367f197b9757273c0/0x1900-000000-80-0-0.jpg'
  }

  it('Estou na página de cadastro de imagens', () => {
    cy.visit('/')
  })

  it(`Quando eu digito "${imagem.titulo}" no campo titulo`, () => {
    registroForm.typeTitle(imagem.titulo)
  })

  it(`Quando eu digito "${imagem.url}" no campo URL`, () => {
    registroForm.typeUrl(imagem.url)
  })

  it('Eu clico no botao de enviar', () => {
    registroForm.clickSubmit()
  })

 it(`Então eu devo ver a mensagem "please type a title for the image" acima do campo de titulo`, () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image.")
    })
  
    it(`E eu devo ver a mensagem "please type a valid URL" acima do campo de URL da imagem`, () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
})
