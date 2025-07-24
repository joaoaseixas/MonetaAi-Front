import '../../../src/App.css'; 
import '../styles/pages/home.css'; // ajuste se necessário
import landingImage from '../../assets/images/landing page.png'; // ajuste o nome conforme seu arquivo
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <header className="fade-in header-container">
        <div className="logo">Moneta</div>

        <nav>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#planos">Planos</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="actions">
          <Link to="/login" className="btn btn-outline">Entrar</Link>
          <Link to="/cadastro" className="btn btn-primary">Cadastrar</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">Gestão Financeira Inteligente</span>
          <h1>
            Seu dinheiro no controle,<br />
            <span className="gradient-text">sua vida no comando.</span>
          </h1>
          <p className="subtitle">
            A Moneta ajuda jovens a controlar suas finanças com inteligência artificial, praticidade e autonomia, direto do seu WhatsApp.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">Começar gratuitamente</a>
            <a href="#" className="btn-outline">Ver demonstração</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={landingImage} alt="Mockup Moneta Card" className="hero-image" />
        </div>
      </section>

      <section className="features" id="funcionalidades">
        <div className="features-header">
          <span className="badge">Funcionalidades Poderosas</span>
          <h2>Gestão financeira simplificada e <span className="gradient-text">inteligente</span></h2>
          <p>
            A Moneta reúne tudo o que você precisa para controlar suas finanças em um só lugar,<br />
            com recursos pensados para simplificar sua vida.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">💬</div>
            <h3>ChatBot no WhatsApp</h3>
            <p>Registre gastos e receba insights diretamente pelo WhatsApp. Simples, rápido e sem complicações.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Modo viagem</h3>
            <p>Integre suas viagens e tenha o total controle sobre seus gastos.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🗂️</div>
            <h3>Categorização Automática</h3>
            <p>Nossa IA identifica e categoriza automaticamente suas transações, economizando seu tempo e mantendo tudo organizado.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📈</div>
            <h3>Relatórios Personalizados</h3>
            <p>Visualize relatórios detalhados de gastos, metas e evolução financeira com gráficos interativos.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔔</div>
            <h3>Alertas Inteligentes</h3>
            <p>Receba alertas automáticos sobre vencimentos, gastos excessivos e oportunidades de economia.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔒</div>
            <h3>Segurança Avançada</h3>
            <p>Todos os dados são criptografados com protocolos de segurança bancária para proteger sua privacidade.</p>
          </div>
        </div>
      </section>

      <section className="whatsapp-financas">
        <div className="texto-esquerda">
          <span className="tag">ChatBot Intuitivo</span>
          <h1>Gerencie suas finanças pelo <span className="whatsapp">WhatsApp</span></h1>
          <p className="descricao">
            Sem apps complicados. A Moneta integra-se ao WhatsApp para que você possa controlar
            seus gastos e receber insights diretamente onde já está acostumado a conversar.
          </p>
          <div className="beneficios">
            <div className="item">
              <div className="icon-box">💬</div>
              <div>
                <h3>Envie mensagens simples</h3>
                <p>Apenas envie "Gastei R$25 com café" e a Moneta cuida do resto.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon-box">📋</div>
              <div>
                <h3>Categoriação automática</h3>
                <p>A IA detecta e categoriza seus gastos sem que você precise fazer nada.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon-box">📊</div>
              <div>
                <h3>Relatórios e insights</h3>
                <p>Receba resumos semanais e dicas personalizadas para economizar.</p>
              </div>
            </div>
          </div>
          <button className="botao-acao">Comece a usar agora</button>
        </div>
        <div className="mockup">
          <div className="notch"></div>
          <div className="chat-header">
            <div className="avatar">M</div>
            <div className="info">
              <div className="name">Moneta Assistente</div>
              <div className="status">online</div>
            </div>
          </div>
          <div className="messages">
            <div className="msg recebido">Olá! Eu sou o assistente da Moneta. Como posso ajudar?</div>
            <div className="msg enviado">Gastei R$25 com café hoje</div>
            <div className="msg recebido">Registrado! Adicionei R$25 na categoria "Alimentação: Café" para hoje.</div>
            <div className="msg recebido">Este mês você já gastou R$125 em cafés, que é 25% acima do seu orçamento mensal para esta categoria.</div>
            <div className="msg enviado">Quanto gastei com alimentação este mês?</div>
            <div className="msg recebido">Você gastou R$750 com alimentação este mês. Aqui está o detalhamento:</div>
          </div>
        </div>
      </section>

      <section className="plano-moneta" id="planos">
        <div id="particles-js"></div>
        <div className="bolha"></div>
        <div className="bolha bolha2"></div>
        <div className="conteudo-plano"></div>
        <span className="tag">Oferta Especial</span>
        <h2 className="titulo">Moneta Total</h2>
        <p className="subtitulo">Todos os recursos premium em um único plano acessível.</p>

        <div className="card">
          <div className="icone-plano efeito-icone">
            <img src="https://img.icons8.com/ios-filled/50/25d366/wallet.png" alt="ícone carteira" />
          </div>
          <div className="preco">
            R$ ?? <span>/mês</span>
          </div>
          <ul className="beneficios">
            <li><span>✅</span> ChatBot WhatsApp avançado</li>
            <li><span>✅</span> Categorização automática</li>
            <li className="destaque azul"><span>🌐</span> Modo viagem ✨</li>
            <li><span>✅</span> Relatórios semanais detalhados</li>
            <li><span>✅</span> Planejamento de orçamento</li>
            <li className="destaque roxo"><span>🛡️</span> seu controle em multi-lugares✨</li>
          </ul>
          <button className="botao-assinar animar-botao">Assinar Agora</button>
          <p className="observacao">* Sem taxas ocultas. Cancele quando quiser.</p>
        </div>
      </section>

      <section className="secao-moneta">
        <div id="fundo-particulas"></div>
        <div className="conteudo">
          <h1>Pronto para transformar sua relação com o dinheiro?</h1>
          <p>
            Junte-se a milhares de pessoas que já tomaram controle de suas finanças com a Moneta.
            Comece gratuitamente em menos de 2 minutos!
          </p>
          <div className="chamada-acao">
            <button className="botao-principal">Começar agora mesmo</button>
          </div>
          <div className="beneficios">
            <div className="beneficio"><span>⭐</span> Avaliação 4.9/5</div>
            <div className="beneficio"><span>🔒</span> Dados protegidos</div>
            <div className="beneficio"><span>🚀</span> Configuração rápida</div>
          </div>
        </div>
      </section>

      <footer className="footer" id="faq">
        <div className="footer-container">
          <div className="footer-section">
            <h2>Moneta</h2>
            <p>Seu dinheiro no controle, sua vida no comando.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Produto</h3>
            <ul>
              <li><a href="#">Funcionalidades</a></li>
              <li><a href="#">Planos</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Suporte</h3>
            <ul>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Empresa</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Imprensa</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <span>© 2025 Moneta. Todos os direitos reservados.</span>
          <div className="footer-links">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
