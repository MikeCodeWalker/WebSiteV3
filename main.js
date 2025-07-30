function initPortfolioModal() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      const img = this.querySelector('img');
      const imgSrc = img.src;
      const imgAlt = img.alt || 'Фотография из портфолио';
      const caption = this.querySelector('.portfolio-caption p')?.textContent || '';
      const modal = document.createElement('div');
      modal.className = 'portfolio-modal';
      modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-container">
          <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="${imgSrc}" alt="${imgAlt}" class="modal-image">
            ${caption ? `<p class="modal-caption">${caption}</p>` : ''}
          </div>
        </div>
      `;

      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        modal.classList.add('visible');
      }, 10);

      const closeBtn = modal.querySelector('.modal-close');
      closeBtn.addEventListener('click', closeModal);
      document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') closeModal();
      });

      function closeModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
          modal.remove();
          document.body.style.overflow = '';
          document.removeEventListener('keydown', closeOnEsc);
        }, 300);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initPortfolioModal);
