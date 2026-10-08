import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Input from './components/Input/Input'
import Field from './components/Field/Field'
import Textarea from './components/Textarea/Textarea'
import RadiusScale from './components/RadiusScale/RadiusScale'
import ShadowScale from './components/ShadowScale/ShadowScale'
import ColorSwatch from './components/ColorSwatch/ColorSwatch'
import SpacingScale from './components/SpacingScale/SpacingScale'
import TypographyScale from './components/TypographyScale/TypographyScale'

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">F</div>
          <span>FUNDATIO</span>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <span className="nav-group-title">Fundamentos</span>

            <a href="#introduction" className="nav-item nav-item-active">
              Introdução
            </a>

            <a href="#colors" className="nav-item">
              Cores
            </a>

            <a href="#typography" className="nav-item">
              Tipografia
            </a>

            <a href="#spacing" className="nav-item">
              Espaçamento
            </a>

            <a href="#radius" className="nav-item">
              Bordas
            </a>

            <a href="#shadows" className="nav-item">
              Sombras
            </a>
          </div>

          <div className="nav-group">
            <span className="nav-group-title">Componentes</span>

            <a href="#buttons" className="nav-item">
              Botões
            </a>

            <a href="#cards" className="nav-item">
              Cards
            </a>

            <a href="#inputs" className="nav-item">
              Inputs
            </a>

            <a href="#fields" className="nav-item">
              Fields
            </a>

            <a href="#textarea" className="nav-item">
              Textarea
            </a>
          </div>
        </nav>

        <div className="sidebar-footer">
          <span>FUNDATIO Style Guide</span>
          <span>v0.1</span>
        </div>
      </aside>

      <div className="app-content">
        <header className="topbar">
          <div className="topbar-search">
            <span>Buscar no Style Guide</span>
            <kbd>Ctrl K</kbd>
          </div>

          <div className="topbar-actions">
            <button type="button" aria-label="Alternar tema">
              ◐
            </button>
          </div>
        </header>

        <main className="main-content">
          <section id="introduction" className="hero-section">
            <span className="eyebrow">FUNDATIO / STYLE GUIDE</span>

            <h1>Fundamentos antes da forma.</h1>

            <p>
              Componentes, padrões e fundamentos visuais para construir
              produtos digitais com clareza, propósito e consistência.
            </p>
          </section>

          <section className="overview-grid">
            <article className="overview-card overview-card-large">
              <span className="overview-label">01</span>

              <div>
                <h2>Fundamentos</h2>
                <p>
                  A base visual que orienta todos os produtos da FUNDATIO.
                </p>
              </div>
            </article>

            <article className="overview-card">
              <span className="overview-label">02</span>

              <div>
                <h2>Componentes</h2>
                <p>
                  Blocos reutilizáveis para experiências digitais consistentes.
                </p>
              </div>
            </article>

            <article className="overview-card">
              <span className="overview-label">03</span>

              <div>
                <h2>Princípios</h2>
                <p>
                  Decisões visuais orientadas por clareza, dignidade e propósito.
                </p>
              </div>
            </article>

            <article className="overview-card">
              <span className="overview-label">04</span>

              <div>
                <h2>Produtos</h2>
                <p>
                  Uma fundação compartilhada para os produtos da FUNDATIO.
                </p>
              </div>
            </article>
          </section>


          {/* COLORS */}
          <section id="colors" className="content-section">
            <div className="section-heading">
              <span className="section-index">01</span>

              <div>
                <h2>Cores</h2>
                <p>Os fundamentos cromáticos da linguagem visual.</p>
              </div>
            </div>

              <div className="component-preview">

                <ColorSwatch
                  name="Background"
                  token="--color-background"
                />

                <ColorSwatch
                  name="Surface"
                  token="--color-surface"
                />

                <ColorSwatch
                  name="Surface Elevated"
                  token="--color-surface-elevated"
                />

                <ColorSwatch
                  name="Text"
                  token="--color-text"
                />

                <ColorSwatch
                  name="Text Muted"
                  token="--color-text-muted"
                />
          </div>
          </section>

          {/* TYPGRAPHY */}
          <section id="typography" className="content-section">
            <div className="section-heading">
              <span className="section-index">02</span>

              <div>
                <h2>Tipografia</h2>
                <p>
                  Uma combinação entre caráter editorial e clareza funcional.
                </p>
              </div>
            </div>

            <div className="type-layout">
              <TypographyScale
                name="--font-size-xs"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-sm"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-md"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-lg"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-xl"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-2xl"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-3xl"
                sample="Toda grande obra começa por um fundamento."
              />

              <TypographyScale
                name="--font-size-4xl"
                sample="Toda grande obra começa por um fundamento."
              />
            </div>
          </section>

          {/* SPACING */}
          <section id="spacing" className="content-section">
            <div className="section-heading">
              <span className="section-index">03</span>

              <div>
                <h2>Espaçamento</h2>
                <p>Uma escala consistente para criar ritmo e proporção.</p>
              </div>
            </div>

            <div className="component-preview">
              <SpacingScale
                name="--space-1"
                value="0.25rem"
              />

              <SpacingScale
                name="--space-2"
                value="0.5rem"
              />

              <SpacingScale
                name="--space-3"
                value="0.75rem"
              />

              <SpacingScale
                name="--space-4"
                value="1rem"
              />

              <SpacingScale
                name="--space-5"
                value="1.25rem"
              />

              <SpacingScale
                name="--space-6"
                value="1.5rem"
              />

              <SpacingScale
                name="--space-8"
                value="2rem"
              />

              <SpacingScale
                name="--space-10"
                value="2.5rem"
              />

              <SpacingScale
                name="--space-12"
                value="3rem"
              />

              <SpacingScale
                name="--space-16"
                value="4rem"
              />
            </div>
          </section>

          {/* RADIUS */}
          <section id="radius" className="content-section">
            <div className="section-heading">
              <span className="section-index">04</span>

              <div>
                <h2>Border Radius</h2>
                <p>Uma escala consistente para controlar a suavidade dos elementos.</p>
              </div>
            </div>

            <div className="component-preview">
              <RadiusScale 
               name="--radius-sm"
               value="0.375rem"
              />

              <RadiusScale 
               name="--radius-md"
               value="0.625rem"
              />

              <RadiusScale 
               name="--radius-lg"
               value="1rem"
              />

              <RadiusScale 
               name="--radius-full"
               value="9999px"
              />
            </div>
          </section>

          {/* SHADOWS */}
          <section id="shadows" className="content-section">
            <div className="section-heading">
              <span className="section-index">05</span>

              <div>
                <h2>Sombras</h2>
                <p>Uma escala de profundidade para criar hierarquia e elevação.</p>
              </div>
            </div>

            <div className="component-preview-shadows">
              <ShadowScale 
               name="--shadow-sm"
               value="0 1px 2px rgba(0, 0, 0, 0.2)"
              />

              <ShadowScale 
               name="--shadow-md"
               value="0 8px 24px rgba(0, 0, 0, 0.25)"
              />

              <ShadowScale 
               name="--shadow-lg"
               value="0 16px 40px rgba(0, 0, 0, 0.3)"
              />

              <ShadowScale
               name="--shadow-xl"
               value="0 24px 64px rgba(0, 0, 0, 0.35)"
              />
            </div>
          </section>

          {/* BUTTONS */}    
          <section id="buttons" className="content-section">
            <div className="section-heading">
              <span className="section-index">06</span>

              <div>
                <h2>Botões</h2>
                <p>Elementos de ação claros, discretos e consistentes.</p>
              </div>
            </div>

             <div className="component-preview component-preview-actions">
              <Button size="sm">
                Small
              </Button>

              <Button size="md">
                Medium
              </Button>

              <Button size="lg">
                Large
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="ghost">
                Ghost
              </Button>

              <Button disabled>
                Disabled
              </Button>
            </div>
          </section>

          {/* CARDS */}      
          <section id="cards" className="content-section">
            <div className="section-heading">
              <span className="section-index">07</span>

              <div>
                <h2>Cards</h2>
                <p>Estruturas para agrupar conteúdo relacionado.</p>
              </div>
            </div>

           <div className="component-preview">    
              <Card>
                <Card.Header>
                  <h4>Fundamentos antes da forma.</h4>
                </Card.Header>

                <Card.Body>
                  <p>
                    Componentes construídos sobre uma mesma linguagem visual.
                  </p>
                </Card.Body>

                <Card.Footer>
                  <Button variant="ghost" size="sm">
                    Explorar
                  </Button>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Header>
                  <h4>Fundamentos antes da forma.</h4>
                </Card.Header>

                <Card.Body>
                  <p>
                    Componentes construídos sobre uma mesma linguagem visual.
                  </p>
                </Card.Body>

                <Card.Footer>
                  <Button variant="ghost" size="sm">
                    Explorar
                  </Button>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Header>
                  <h4>Fundamentos antes da forma.</h4>
                </Card.Header>

                <Card.Body>
                  <p>
                    Componentes construídos sobre uma mesma linguagem visual.
                  </p>
                </Card.Body>

                <Card.Footer>
                  <Button variant="ghost" size="sm">
                    Explorar
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </section>

          {/* INPUTS */}    
          <section id="inputs" className="content-section">
            <div className="section-heading">
              <span className="section-index">08</span>

              <div>
                <h2>Formulários</h2>
                <p>Campos projetados para comunicação clara e acessível.</p>
              </div>
            </div>

            <div className="form-preview">
              <Input placeholder="Digite seu nome" />

              <Input
                placeholder="Campo com erro"
                error
              />

              <Input
                placeholder="Campo desabilitado"
                disabled
              />
            </div>
          </section>

          {/* FIELDS */}
          <section id="fields" className="content-section">
            <div className="section-heading">
              <span className="section-index">09</span>

              <div>
                <h2>Fields</h2>
                <p>
                  Estruturas que combinam rótulo, controle e mensagens de apoio.
                </p>
              </div>
            </div>

            <div className="form-preview">
              <Field
                label="Nome"
                name="name"
                description="Como devemos chamar você?"
              />

              <Field
                label="Nome de usuário"
                name="username"
                error="Este campo precisa ser preenchido."
              />
            </div>
          </section>

          {/* TEXTAREA */}
          <section id="textarea" className="content-section">
            <div className="section-heading">
              <span className="section-index">10</span>

              <div>
                <h2>Textarea</h2>
                <p>
                  Campos para entrada de textos mais longos.
                </p>
              </div>
            </div>

            <div className="form-preview">
              <Textarea placeholder="Digite sua mensagem" />

              <Textarea
                placeholder="Campo com erro"
                error
              />

              <Textarea
                placeholder="Campo desabilitado"
                disabled
              />
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default App