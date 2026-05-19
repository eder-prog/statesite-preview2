# Deploy na GoDaddy (cPanel) — State Roofing & Carpentry

**Site:** vanilla HTML estático
**Domínio:** https://stategcinc.com
**Plano alvo:** GoDaddy Web Hosting (cPanel)

---

## ✅ Checklist pré-upload

Confirme que estes arquivos existem na pasta `preview/`:

- [ ] `index.html` (com SEO completo + JSON-LD)
- [ ] `privacy.html`
- [ ] `terms.html`
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] `.htaccess` ← **CRÍTICO** — clean URLs, HTTPS, cache, gzip
- [ ] `assets/` (logos, hero, gallery, services — pasta inteira)

❌ **NÃO subir** `vercel.json`, `package.json`, `README.md`, `BUILD-SUMMARY.md`, `EDIT-GUIDE.md`, `DEPLOY-GODADDY.md` — esses são internos.

---

## 🚀 Opção 1 — cPanel File Manager (mais simples, GUI)

### 1. Login no cPanel
- Acesse https://sso.godaddy.com → My Products → Web Hosting → **Manage**
- No painel da hospedagem clique em **cPanel Admin**

### 2. Apontar o domínio (se ainda não estiver)
- Em cPanel → **Domains** → garanta que `stategcinc.com` está como **Primary Domain** ou **Addon Domain** apontando pra `public_html`
- DNS: no GoDaddy DNS Manager, garanta que o A-record do `@` aponta pro IP do servidor da sua hospedagem (já vem configurado se comprou hosting+domínio na GoDaddy)
- SSL: cPanel → **SSL/TLS Status** → **Run AutoSSL** (Let's Encrypt grátis) — espere ~5 min até ficar verde

### 3. Limpar o public_html
- cPanel → **File Manager** → entre em `public_html/`
- Apague qualquer `index.html` / `default.html` placeholder da GoDaddy (selecionar todos → Delete)

### 4. Upload dos arquivos
- Compactar localmente o conteúdo da pasta `preview/`:
  - Selecione TUDO dentro de `preview/` (incluindo `.htaccess` — pode estar oculto, ative "show hidden files" no seu OS)
  - Crie um `.zip` com TUDO no root do zip (não dentro de uma pasta `preview/`)
- No File Manager → **Upload** → arraste o .zip
- Após upload, clique-direito no .zip → **Extract** → destino `/public_html/`
- Delete o .zip depois

### 5. Habilitar arquivos ocultos
- File Manager → **Settings** (canto sup. direito) → marque **Show Hidden Files (dotfiles)** → Save
- Confirme que `.htaccess` está visível em `public_html/`

### 6. Permissões (se necessário)
- `.htaccess` → 644
- `index.html` e outros HTML → 644
- pasta `assets/` → 755
- (cPanel já aplica isso por padrão, só conferir)

---

## 🚀 Opção 2 — FTP/SFTP (mais rápido pra updates futuros)

### Credenciais
- cPanel → **FTP Accounts** → use o usuário principal ou crie um dedicado
- Host: `ftp.stategcinc.com` (ou IP do servidor)
- Porta: 21 (FTP) ou 22 (SFTP se disponível)
- Diretório: `/public_html/`

### Cliente recomendado: FileZilla
1. Conecte com as credenciais acima
2. Local site: navegue até `C:\Users\Eder\Documents\Opensquad vscode\squads\landing-builder\output\2026-05-11-145716\v1\preview\`
3. Remote site: `/public_html/`
4. No FileZilla → **Server** menu → **Force showing hidden files** ✓
5. Selecione tudo (Ctrl+A) → arraste pra remote site

---

## 🔍 Verificação pós-deploy (5 min)

Abrir cada URL no navegador (modo anônimo pra evitar cache):

| Teste | URL | Esperado |
|------|-----|----------|
| HTTPS forçado | `http://stategcinc.com` | redireciona pra `https://` |
| Non-www | `https://www.stategcinc.com` | redireciona pra `https://stategcinc.com` |
| Homepage | `https://stategcinc.com/` | site carrega, hero + form |
| Clean URL | `https://stategcinc.com/privacy` | abre privacy (sem `.html`) |
| Redirect HTML | `https://stategcinc.com/privacy.html` | redireciona pra `/privacy` |
| 404 fallback | `https://stategcinc.com/blabla` | mostra index (ou erro suave) |
| robots | `https://stategcinc.com/robots.txt` | mostra o arquivo |
| sitemap | `https://stategcinc.com/sitemap.xml` | mostra XML |

### Ferramentas de validação SEO (rodar 1x após deploy):

1. **Google Rich Results Test** — https://search.google.com/test/rich-results
   - Cole `https://stategcinc.com/`
   - Deve detectar: ✅ LocalBusiness, ✅ Organization, ✅ FAQPage, ✅ WebSite
2. **PageSpeed Insights** — https://pagespeed.web.dev/
   - Cole `https://stategcinc.com/`
   - Mobile + Desktop scores (alvo: 90+)
3. **OpenGraph Preview** — https://www.opengraph.xyz/
   - Cola URL → vê como aparece em Facebook/LinkedIn/WhatsApp
4. **Mobile-Friendly Test** — https://search.google.com/test/mobile-friendly

---

## 📡 Submeter ao Google Search Console (CRÍTICO pra ranquear)

Sem isso, o Google demora SEMANAS pra indexar. Com isso, ~24-48h.

1. https://search.google.com/search-console → **Add Property** → URL prefix → `https://stategcinc.com`
2. Verify ownership — método mais fácil: **HTML tag** (cola no `<head>` do index.html) OU **DNS TXT record** (via cPanel → Zone Editor)
3. Após verificar:
   - **Sitemaps** → adicionar `sitemap.xml` → Submit
   - **URL Inspection** → cole `https://stategcinc.com/` → **Request Indexing**
4. Repita request indexing pra `/privacy` e `/terms`

### Bing / Yahoo
- https://www.bing.com/webmasters/ → import da Google Search Console direto

### Google Business Profile (CRÍTICO pra "near me")
- https://business.google.com/ → criar perfil "State Roofing & Carpentry"
- Categoria: **Roofing Contractor** (primária) + **General Contractor** (secundária)
- Service area: Massachusetts + cidades listadas
- Adicione o telefone (617) 702-2062, site `https://stategcinc.com`
- Upload fotos do hero, gallery, team
- ➤ Sem Google Business Profile o site **não aparece no Maps** nem em buscas "near me"

---

## 🔧 Troubleshooting comum

| Problema | Causa | Fix |
|---------|-------|-----|
| Erro 500 logo após upload | `.htaccess` com regra incompatível | cPanel → Error Log; provavelmente `mod_rewrite` desativado — abra ticket GoDaddy |
| HTTPS não funciona | SSL ainda propagando | Espere 15-30min, depois rode AutoSSL de novo |
| Imagens não carregam | Path errado (case-sensitive em Linux) | Confira maiúsculas/minúsculas dos arquivos |
| `/privacy` dá 404 | Clean URLs não rodaram | Confira se `.htaccess` foi enviado (arquivo oculto!) |
| Sitemap dá erro XML | BOM no início do arquivo | Reabra em editor sem BOM (VSCode → bottom-right → UTF-8) |
| OG preview não atualiza | Facebook cache | https://developers.facebook.com/tools/debug/ → cole URL → **Scrape Again** |

---

## 🔁 Updates futuros

Pra subir só um arquivo trocado (ex: `index.html` com nova copy):
- File Manager → entre em `public_html/` → click-direito no arquivo antigo → **Delete**
- **Upload** → escolhe o novo → Done
- Limpa cache do Cloudflare (se usar) e cache do navegador (Ctrl+Shift+R)

Ou via FTP:
- FileZilla → arrasta o arquivo modificado direto, sobrescreve

---

## 📞 Suporte GoDaddy
- 24/7: 1-480-505-8877 (US)
- Chat: dentro do painel
- Pedir: "enable mod_rewrite, mod_headers, mod_deflate, mod_expires on my Apache" se algum dos 4 não estiver ativo

---

**Última atualização:** 2026-05-18
**Arquivos prontos pra deploy:** sim ✅
**Pendente:** webhook GHL no form de contato (aguardando URL do usuário)
