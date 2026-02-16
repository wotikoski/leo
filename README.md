# Site Pessoal de Leo - Versão HTML/CSS/JS Estática

Bem-vindo! Este é seu site pessoal minimalista convertido para HTML/CSS/JS puro, sem dependências de framework.

## 📁 Estrutura de Arquivos

```
leo-static/
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript para interatividade
├── assets/             # Pasta para imagens e recursos locais
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe todos os arquivos
2. Abra `index.html` no seu navegador
3. Pronto! O site funcionará completamente

### Opção 2: Fazer Upload para Servidor Web
1. Faça upload de todos os arquivos para seu servidor web
2. Certifique-se de que `index.html` está na raiz
3. Acesse o site através do seu domínio

### Opção 3: Usar com GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações do repositório
4. Seu site estará disponível em `https://seu-usuario.github.io/seu-repositorio`

## 🎨 Personalização

### Alterar Conteúdo
Abra `index.html` e procure pelos comentários `<!-- ... -->` para localizar as seções:
- **Nome e Título**: Linhas 73-74
- **Descrição**: Linha 81
- **Links de Redes Sociais**: Linhas 87-103
- **Sobre Mim**: Linha 119
- **Localização**: Linha 127

### Alterar Cores
Abra `style.css` e procure pela seção `CSS Variables`:
- **Modo Claro**: `:root { ... }` (linhas 25-35)
- **Modo Escuro**: `body.dark { ... }` (linhas 37-45)

Exemplos de cores:
```css
--background: #faf9f7;      /* Cor de fundo */
--foreground: #403d37;      /* Cor do texto */
--primary: #1e3a8a;         /* Cor primária */
```

### Alterar Fonte
Procure por `font-family` em `style.css`:
```css
font-family: 'Playfair Display', serif;  /* Títulos */
font-family: 'Inter', sans-serif;        /* Corpo de texto */
```

### Adicionar Imagens Locais
1. Coloque suas imagens na pasta `assets/`
2. No `index.html`, altere os `src` das imagens:
```html
<!-- De: -->
<img src="https://exemplo.com/imagem.jpg" alt="Descrição">

<!-- Para: -->
<img src="assets/imagem.jpg" alt="Descrição">
```

## 🌓 Modo Escuro

O site possui um botão de alternância de tema no canto superior direito. O tema selecionado é salvo automaticamente no navegador.

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- ✅ Computadores
- ✅ Tablets
- ✅ Celulares

## ⚡ Performance

- Sem dependências externas (exceto fontes do Google)
- Carregamento rápido
- Otimizado para SEO
- Acessível (WCAG)

## 🔧 Funcionalidades

- ✅ Alternância de tema claro/escuro
- ✅ Animações suaves
- ✅ Links de redes sociais
- ✅ Design minimalista elegante
- ✅ Meta tags para SEO
- ✅ Favicon personalizado

## 📝 Meta Tags

O site inclui meta tags importantes para SEO:
- `title`: Título da página
- `description`: Descrição para mecanismos de busca
- `keywords`: Palavras-chave relevantes
- `viewport`: Configuração para dispositivos móveis
- `theme-color`: Cor do tema para navegadores

## 🔐 Segurança

- Sem scripts externos perigosos
- Sem rastreamento invasivo
- Sem cookies de terceiros
- Links abrem em abas novas com `rel="noopener noreferrer"`

## 📞 Suporte

Se encontrar problemas:
1. Verifique se todos os arquivos estão no mesmo diretório
2. Certifique-se de que o navegador está atualizado
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Tente em outro navegador

## 📄 Licença

Este site é seu. Use, modifique e compartilhe livremente!

---

**Criado com ❤️ usando HTML, CSS e JavaScript puro**
