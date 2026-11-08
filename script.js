// Z4W3R14 — Contos de Terror e Suspense
// Script simples: renderiza a lista de contos na página inicial

const contos = [
  {
    id: 'o-espelho-que-chora',
    titulo: 'O Espelho que Chora',
    resumo: 'Ela só queria escovar os dentes. O reflexo no espelho, porém, tinha outros planos.',
    capa: 'assets/img/conto-o-espelho.png',
    video: null,
    pagina: 'contos/o-espelho-que-chora.html'
  },
  {
    id: 'a-ultima-foto',
    titulo: 'A Última Foto',
    resumo: 'A câmera revelou algo que ninguém conseguiu ver a olho nu.',
    capa: 'assets/img/conto-a-ultima-foto.svg',
    video: null,
    pagina: 'contos/a-ultima-foto.html'
  }
];

function renderContos() {
  const container = document.getElementById('contos-container');
  if (!container) return;

  container.innerHTML = contos.map(c => `
    <article class="conto-card">
      <div class="capa">
        ${c.capa
          ? `<img src="${c.capa}" alt="Capa de ${c.titulo}" loading="lazy">`
          : `<div class="capa-placeholder">Sem imagem de capa</div>`
        }
      </div>
      <div class="conteudo">
        <h3>${c.titulo}</h3>
        <p>${c.resumo}</p>
        <a href="${c.pagina}" class="btn">Ler conto</a>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderContos);
