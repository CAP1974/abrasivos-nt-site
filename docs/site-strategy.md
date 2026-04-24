# Abrasivos NT - Base Estrategica do Site

## 1. Sitemap Completo

- `/` Home
- `/empresa`
- `/produtos`
- `/produtos/frankfurt-plus`
- `/produtos/fickert`
- `/produtos/mo-125-mm`
- `/produtos/frankfurt-plus/[produto]`
- `/produtos/fickert/[produto]`
- `/produtos/mo-125-mm/[produto]`
- `/aplicacoes`
- `/aplicacoes/marmore`
- `/aplicacoes/granito`
- `/aplicacoes/pedra`
- `/aplicacoes/polimento-de-topos`
- `/aplicacoes/acabamento-e-brilho`
- `/contacto`
- `/orcamento`
- `/politica-de-privacidade`
- `/termos-e-condicoes`

## 2. Arquitetura da Informacao

### Nivel 1

- Home
- Empresa
- Produtos
- Aplicacoes / Materiais
- Contacto / Orcamento

### Nivel 2

- Produtos por familia
- Aplicacoes por material
- Paginas de produto com foco comercial

### Logica de navegacao

- Entrada principal por familias de produto
- Caminho secundario por material ou aplicacao
- CTA persistente para pedido de orcamento
- WhatsApp fixo para contacto rapido

## 3. Wireframe Textual de Cada Pagina

### Home

1. Header com marca, navegacao e CTA
2. Hero com proposta de valor e botoes "Ver produtos" e "Pedir orcamento"
3. Bloco de categorias principais
4. Bloco de aplicacoes e materiais
5. Bloco de diferenciais
6. Produtos em destaque
7. Secao institucional curta
8. Formulario de contacto
9. Footer com dados da empresa, links utilitarios e SEO local

### Empresa

1. Hero institucional
2. Quem somos
3. Foco tecnico e comercial
4. Compromissos: qualidade, clareza, resposta comercial
5. CTA para contacto

### Produtos

1. Intro do catalogo
2. Grelha de familias de produto
3. Navegacao por aplicacao
4. CTA de apoio comercial

### Pagina de Categoria

1. Nome da categoria
2. Descricao objetiva
3. Aplicacoes
4. Tipo de maquina
5. Materiais indicados
6. Variantes ou referencias
7. Lista de produtos dessa familia
8. CTA para orcamento

### Pagina de Produto

1. Breadcrumb
2. Nome do produto
3. Imagem principal
4. Descricao curta
5. Beneficios
6. Aplicacoes
7. Materiais recomendados
8. Compatibilidade com maquinas
9. Especificacoes tecnicas
10. CTA de pedido de informacao/orcamento

### Aplicacoes / Materiais

1. Hero por contexto de uso
2. Blocos para marmore, granito, pedra, polimento de topos, acabamento e brilho
3. Produtos associados por contexto
4. CTA para apoio comercial

### Contacto / Orcamento

1. Dados comerciais
2. Formulario
3. WhatsApp
4. Expectativa de resposta
5. Microcopy de confianca

## 4. Proposta de Copy Inicial

### Hero

- Titulo: "Solucoes tecnicas de abrasivos para marmore, granito e acabamento profissional."
- Subtitulo: "Catalogo claro, contacto comercial simples e produtos orientados para polimento e acabamento no setor da pedra."
- CTA 1: "Ver produtos"
- CTA 2: "Pedir orcamento"

### Empresa

- "A Abrasivos NT e uma marca focada em abrasivos para pedra, com abordagem tecnica e comercial para apoiar empresas de transformacao, marmorarias e profissionais de acabamento."

### Diferenciais

- "Foco tecnico no setor da pedra"
- "Catalogo claro e preparado para crescer"
- "Resposta comercial simples e direta"

### Contacto

- "Indique a aplicacao, o tipo de pedra ou a maquina utilizada. A nossa equipa comercial entra em contacto com a proposta mais adequada."

## 5. Proposta Visual / Direcao de Design

- Linguagem visual industrial, tecnica e contemporanea
- Base cromatica em tons minerais, areia e aco
- Blocos amplos, respirares largos e contraste controlado
- Tipografia forte nos titulos e leitura limpa no corpo
- Homepage focada em clareza de oferta e conversao
- Elementos visuais discretos inspirados em malha tecnica e superficie mineral

## 6. Estrutura Tecnica do Projeto

- `app/` App Router do Next.js
- `components/` componentes reutilizaveis
- `content/` dados e copy estruturados
- `docs/` estrategia, copy e arquitetura
- Futuro:
  - `app/produtos/[categoria]/page.tsx`
  - `app/produtos/[categoria]/[produto]/page.tsx`
  - `app/aplicacoes/[slug]/page.tsx`
  - integracao com CMS headless ou ficheiros MDX

## 7. Componentes Reutilizaveis Sugeridos

- `SiteHeader`
- `SectionHeading`
- `ProductCard`
- `CategoryHero`
- `ApplicationCard`
- `ContactForm`
- `WhatsAppButton`
- `ProductSpecsTable`
- `Breadcrumbs`
- `FeaturedProducts`

## 8. Modelo de Dados para Produtos e Categorias

### Categoria

- `slug`
- `name`
- `shortDescription`
- `applications[]`
- `machineType`
- `materials[]`
- `ctaLabel`

### Produto

- `slug`
- `categorySlug`
- `name`
- `description`
- `image`
- `applications[]`
- `materials[]`
- `machineCompatibility[]`
- `benefits[]`
- `technicalSpecs[]`
- `variants[]`
- `seo`

## 9. Homepage Inicial

- Implementada em `app/page.tsx`
- Usa dados de `content/site.ts`
- Inclui hero, categorias, aplicacoes, produtos em destaque, bloco institucional, contacto e botao fixo de WhatsApp

## 10. Plano para Escalar o Site

1. Separar conteudo de produto em ficheiros dedicados por familia
2. Criar rotas dinamicas para categorias e produtos
3. Adicionar imagens otimizadas e fichas tecnicas descarregaveis
4. Evoluir formulario para CRM ou email transacional
5. Introduzir filtros por material, maquina e aplicacao
6. Ligar a um CMS simples quando houver mais equipa a editar conteudo
7. Adicionar paginas de SEO por material, processo e tipo de acabamento
