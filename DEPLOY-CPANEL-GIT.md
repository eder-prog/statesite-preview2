# Deploy via cPanel Git Version Control — State Roofing & Carpentry

**Repo:** `eder-prog/statesite-preview` (vanilla HTML)
**Target:** `https://stategcinc.com` em GoDaddy cPanel
**Mecanismo:** cPanel clona o repo → `.cpanel.yml` copia arquivos pra `public_html/`

---

## ⚙️ Pré-requisitos

- [ ] cPanel acessível (login GoDaddy → Web Hosting → Manage → cPanel Admin)
- [ ] Repo `statesite-preview` pushado com último commit (já feito por mim)
- [ ] Acesso ao GitHub do `eder-prog` (pra gerar Deploy Key ou Personal Access Token)

---

## 🔐 Passo 1 — Autenticação GitHub (se repo for privado)

> Se o repo for **público**, pula esse passo e usa direto a URL HTTPS no Passo 2.

### Opção A — Personal Access Token (mais simples)
1. https://github.com/settings/tokens → **Generate new token (classic)**
2. Note: `cpanel-deploy-statesite-preview`
3. Expiration: **No expiration** (ou 1 ano)
4. Scopes: marca apenas **`repo`** (acesso completo a repos privados)
5. **Generate token** → copia o token (`ghp_...`)
6. **Guarda em local seguro** — o GitHub não mostra de novo

### Opção B — Deploy Key SSH (mais seguro, recomendado pra produção)
1. cPanel → **SSH Access** → **Manage SSH Keys** → **Generate a New Key**
   - Key Name: `github-statesite-preview`
   - Sem passphrase
   - Generate
2. Clica em **View/Download** ao lado do `github-statesite-preview.pub` (chave pública)
3. Copia tudo (começa com `ssh-rsa AAAA...`)
4. No GitHub: https://github.com/eder-prog/statesite-preview/settings/keys → **Add deploy key**
   - Title: `cPanel GoDaddy stategcinc`
   - Key: cola o conteúdo do `.pub`
   - **NÃO** marca "Allow write access" (read-only é o suficiente)
   - **Add key**
5. Volta no cPanel → **Manage SSH Keys** → ao lado da chave privada `github-statesite-preview` → **Manage** → **Authorize**

---

## 📥 Passo 2 — Clonar o repo no cPanel

1. cPanel → procura por **"Git Version Control"** (em **Files** ou via busca)
2. Clica em **Create** (canto sup. direito)
3. Preenche:

   | Campo | Valor |
   |-------|-------|
   | **Clone URL** | `https://USERNAME:TOKEN@github.com/eder-prog/statesite-preview.git` (Opção A — substitui `USERNAME` pelo seu user GitHub e `TOKEN` pelo PAT que gerou) |
   | **Clone URL** (alt.) | `git@github.com:eder-prog/statesite-preview.git` (Opção B — SSH com Deploy Key) |
   | **Repository Path** | `/home/SEU_CPANEL_USER/repositories/statesite-preview` (deixa cPanel preencher) |
   | **Repository Name** | `statesite-preview` |

4. Clica em **Create** → aguarda 10–30s o clone

✅ Se der erro de autenticação: confere o token/SSH key

---

## 🚀 Passo 3 — Primeiro deploy

1. Lista de repos → ao lado de `statesite-preview` → **Manage**
2. Aba **Pull or Deploy**
3. Clica **Update from Remote** (garante que está no HEAD mais recente)
4. Clica **Deploy HEAD Commit** ← isso roda o `.cpanel.yml`
5. Aguarda ~10s e olha o **Deploy Log** — deve mostrar `Deployment finished. Last deploy SHA: ...`

✅ Pronto. Os arquivos foram copiados pra `public_html/`.

---

## 🔍 Passo 4 — Verificar deploy

1. cPanel → **File Manager** → entra em `public_html/`
2. Confirma que existem:
   - `index.html`
   - `privacy.html`
   - `terms.html`
   - `robots.txt`
   - `sitemap.xml`
   - `.htaccess` ← **importante**, ativa "Show Hidden Files" em Settings se não aparecer
   - `assets/` (pasta)
3. Abre `https://stategcinc.com/` em aba anônima → site carrega

### Smoke test (1 min)

| URL | Esperado |
|-----|----------|
| `http://stategcinc.com` | redireciona pra HTTPS |
| `https://www.stategcinc.com` | redireciona pra non-www |
| `https://stategcinc.com/privacy` | abre privacy (sem `.html`) |
| `https://stategcinc.com/sitemap.xml` | XML aparece |
| `https://stategcinc.com/robots.txt` | text aparece |

### SSL
Se o HTTPS não funcionar:
- cPanel → **SSL/TLS Status** → **Run AutoSSL** → espera 5–10 min ficar verde

---

## 🔁 Updates futuros (workflow)

Quando precisar mudar algo (texto, imagem, etc):

```bash
# Local — na pasta preview/
git add .
git commit -m "Update homepage hero copy"
git push origin main
```

No cPanel:
1. Git Version Control → **Manage** ao lado de `statesite-preview`
2. **Pull or Deploy** → **Update from Remote** → **Deploy HEAD Commit**
3. Refresh stategcinc.com (Ctrl+Shift+R pra ignorar cache)

⏱ Tempo médio: 30 segundos.

---

## 🛠 Como funciona o `.cpanel.yml`

O arquivo na raiz do repo executa em ordem:

```yaml
deployment:
  tasks:
    - export DEPLOYPATH=$HOME/public_html/
    - /bin/mkdir -p $DEPLOYPATH
    - /bin/cp -f index.html      $DEPLOYPATH
    - /bin/cp -f privacy.html    $DEPLOYPATH
    - /bin/cp -f terms.html      $DEPLOYPATH
    - /bin/cp -f robots.txt      $DEPLOYPATH
    - /bin/cp -f sitemap.xml     $DEPLOYPATH
    - /bin/cp -f .htaccess       $DEPLOYPATH
    - /bin/cp -Rf assets         $DEPLOYPATH
```

- `$HOME` = pasta home do usuário cPanel (resolve automático)
- `-f` = força overwrite (sem prompt)
- `-Rf` = recursivo + força (pra pasta `assets/`)

**Não copia**: `README.md`, `package.json`, `vercel.json`, `DEPLOY-*.md`, `.git/`, `.gitignore` — esses ficam só no repo, não vão pro site público ✅

### Se o `$HOME` falhar (cPanel antigo)
Substitui a linha 1 por:
```
- export DEPLOYPATH=/home/SEU_CPANEL_USER/public_html/
```
(troca `SEU_CPANEL_USER` pelo username real, visível no header do cPanel)

---

## 🆘 Troubleshooting

| Sintoma | Causa | Fix |
|--------|-------|-----|
| Erro 403 ao clonar | Token GitHub sem `repo` scope | Recriar PAT com scope correto |
| Erro "Permission denied (publickey)" | Deploy Key SSH não autorizada | cPanel → SSH Keys → Authorize a chave privada |
| Deploy Log diz "command not found" | `$HOME` não resolveu | Editar `.cpanel.yml` pra path absoluto (vê seção acima) |
| Site mostra placeholder GoDaddy | Não tinha apagado `public_html/index.html` antes | File Manager → deletar placeholder, redeploy |
| `.htaccess` não foi copiado | File Manager não mostra dotfiles | Settings → Show Hidden Files |
| Cache antigo no Vercel/Cloudflare | CDN intermediário | Purge cache + Ctrl+Shift+R |
| Erro 500 logo após deploy | `.htaccess` com regra incompatível | cPanel → Error Log → identifica linha; geralmente falta `mod_rewrite` (abrir ticket GoDaddy) |

---

## 📡 Pós-deploy — SEO (não esquece!)

Sem isso o Google demora SEMANAS pra indexar. Com, ~24-48h.

1. **Google Search Console** — https://search.google.com/search-console
   - Add Property → `https://stategcinc.com` → verifica ownership (HTML tag no `<head>` ou DNS TXT)
   - Sitemaps → submete `sitemap.xml`
   - URL Inspection → cole `https://stategcinc.com/` → **Request Indexing**

2. **Google Business Profile** — https://business.google.com
   - Cria perfil "State Roofing & Carpentry"
   - Categoria primária: **Roofing Contractor**
   - Categoria secundária: **General Contractor**
   - Service area: Massachusetts + cidades-alvo
   - ➤ Sem isso o site não aparece no Google Maps nem em buscas "near me"

3. **Bing Webmaster Tools** — https://www.bing.com/webmasters/
   - Import direto da Google Search Console (1 clique)

4. **Validações SEO**
   - https://search.google.com/test/rich-results — testa JSON-LD (deve detectar LocalBusiness + FAQ + Organization)
   - https://pagespeed.web.dev/ — alvo Core Web Vitals 90+
   - https://www.opengraph.xyz/ — preview do link no WhatsApp/LinkedIn/Facebook

---

**Última atualização:** 2026-05-18
**Webhook GHL conectado:** ✅ (URL no `index.html` linha ~1421)
**Próximo passo:** seguir Passos 1-3 acima
