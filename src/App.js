import React, { useState } from "react";
// import { supabase } from "../src/services/supabaseClient";
import "./index.css";

function App() {

  const [formDara, setData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cpf: "",
    profissao: "",
    modalidade: "",
    recado: ""
  })





  return (
    <>
      <header>
        <div className="logo">
          <img src="logo.png" alt="logo-marca-finanzi" />
        </div>
      </header>

      <section className="hero">
        <div className="callToAction">
          <div className="banner_container">
            <div className="title_banner">
              <h1>
                Não deixe as dificuldades financeiras te impedirem de realizar
                seus planos!
              </h1>
            </div>
            <div className="wrap_hero_btn">
              <div className="btn_hero">
                <a href="#">Fale com um de nossos consultores!</a>
                <img className="whats" src="/whats.png"></img>
              </div>
            </div>
          </div>
          <img className="hero_img" src="./portabilidade.webp" />
        </div>
      </section>

      <section className="objetive">
        <div className="title_objetive">
          <h1>
            Seja qual for seu objetivo. <span>Nós podemos te ajudar!</span>
          </h1>
        </div>

        <div className="pains">
          <div className="wrap_pains">
            <div className="pain">
              <div className="title_pain">
                <h3>Viagem</h3>
                <p>
                  Dê um tempo na rotina e aproveite aquele destino especial sem
                  se preocupar com o dinheiro! Parcelamento flexível para você
                  viajar com tranquilidade.
                </p>
              </div>
              <div className="image_pain">
                <img src="/travel.webp"></img>
              </div>
            </div>

            <div className="pain">
              <div className="title_pain">
                <h3>Realize seus sonhos sem esperar!</h3>
                <p>
                  Quer abrir um negócio, reformar a casa ou investir no seu
                  futuro? Com nosso crédito fácil, você transforma planos em
                  realidade!
                </p>
              </div>
              <div className="image_pain">
                <img src="/dream.webp"></img>
              </div>
            </div>

            <div className="pain">
              <div className="title_pain">
                <h3>Livre-se das dívidas e respire aliviado!</h3>
                <p>
                  Chega de juros altos e boletos acumulados! Organize sua vida
                  financeira e volte a ter controle com um empréstimo acessível
                  e justo.
                </p>
              </div>
              <div className="image_pain">
                <img src="/divida.webp"></img>
              </div>
            </div>

            <div className="pain">
              <div className="title_pain">
                <h3>Emergência</h3>
                <p>
                  Imprevistos acontecem, mas você não precisa esperar! Seja um
                  problema de saúde, um conserto inesperado ou qualquer
                  urgência, conte com nosso crédito rápido.
                </p>
              </div>
              <div className="image_pain">
                <img src="/emergency.webp"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contract">
        <div className="title_contract">
          <h1>Quem pode contratar ?</h1>
        </div>

        <div className="marquee">
          <div className="marquee_content">
            <img className="brasao1" src="/brasaooficialcolorido.png" />
            <img className="brasao" src="/brasaogdf.png" />
            <img className="brasao" src="/brasaoexercito.png" />
            <img className="brasao" src="/brasaoaeronautica.png" />
            <img className="brasao" src="/brasaomarinha.png" />
            <img className="brasao" src="/brasaopm.png" />
            <img className="brasao" src="/brasaopc.png" />
            <img className="brasao" src="/inss.png" />
            <img className="brasao1" src="/brasaooficialcolorido.png" />
            <img className="brasao" src="/brasaogdf.png" />
            <img className="brasao" src="/brasaoexercito.png" />
            <img className="brasao" src="/brasaoaeronautica.png" />
            <img className="brasao" src="/brasaomarinha.png" />
            <img className="brasao" src="/brasaopm.png" />
            <img className="brasao" src="/brasaopc.png" />
            <img className="brasao" src="/inss.png" />
            <img className="brasao" src="/brasaomarinha.png" />
            <img className="brasao" src="/brasaopm.png" />
            <img className="brasao" src="/brasaopc.png" />
            <img className="brasao" src="/inss.png" />
          </div>
          <p>
            O empréstimo está disponível para todos os profissionais, sejam
            servidores públicos ou trabalhadores celetistas, além de aposentados
            e pensionistas do INSS, garantindo acesso fácil e seguro ao crédito
            que você precisa!
          </p>
        </div>
      </section>

      <section className="methods">
        <div className="methods_container">
          <div className="title_metods">
            <h1>Como funciona ?</h1>
          </div>
          <div className="description">
            <p>
              A maior parte do processo de solicitação dos nossos empréstimos é
              realizada de forma 100% online, com pagamento na modalidade
              boleto, garantindo praticidade e segurança. Além disso, também
              oferecemos empréstimos na modalidade cheque e débito em conta. No
              entanto, para essas opções, é necessária uma visita presencial ao
              nosso escritório para a finalização do processo. Escolha a forma
              que melhor se adapta às suas necessidades e conte com um
              atendimento rápido e transparente!
            </p>
          </div>
        </div>
      </section>

      <section className="pass_to_pass">
        <ol style={{ "--length": 4 }} role="list">
          {[
            {
              title: "Entre em contato usando o nosso formulário, ou pelo nosso Whatsapp",
              text: "Esclareça suas dúvidas usando nossos canais de atendimento.",
            },
            {
              title: "Escolha com nossa ajuda a melhor solução",
              text: "Nossa equipe esta preparada para atende-lo da melhor forma.",
            },
            {
              title: "Aguarde a análise dos nossos fornecedores",
              text: "Esse processo pode demorar no maxímo 24h.",
            },
            {
              title: "Aprovado",
              text: "Você aguarda o pagamento conforme a sua solicitação, via PIX!",
            },
          ].map((item, index) => (
            <li key={index} style={{ "--i": index + 1 }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="form_container">
        <div className="title_form">
          <h1>Entre em contato!</h1>
        </div>

        <div className="wrap_form">
          <form>
            <input type="text" placeholder="Nome" name="nome"></input>
            <input type="tel" placeholder="Telefone" name="telefone"></input>
            <input type="email" placeholder="E-mail" name="email"></input>
            <input type="text" placeholder="CPF" name="cpf"></input>

            <label for="Selecione">Escolha uma opção:</label>
            <select name="Selecione">
              <option value="Servidor Público">Servidor Público</option>
              <option value="Servidor Privado">Servidor Privado</option>
            </select>
            <label for="Modalidade">Escolha a modalidade:</label>
            <select name="Modalidade">
              <option value="Boleto">Boleto</option>
              <option value="Cheque">Cheque</option>
              <option value="FGTS">FGTS</option>
            </select>
            <textarea placeholder="Deixe um recado!" name="racado"></textarea>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
