(function() {
  'use strict';

  function createButton(id, text, right) {
    const button = document.createElement('button');
    button.id = id;
    Object.assign(button.style, {
      position: 'fixed',
      right: right,
      top: '20px',
      zIndex: '1001',
      padding: '8px 12px',
      cursor: 'pointer',
      fontFamily: 'Protest Riot',
      backgroundColor: '#222',
      color: '#fff',
      border: '1px solid #555',
      borderRadius: '5px'
    });
    button.textContent = text;
    document.body.appendChild(button);
    return button;
  }

  const teleportButton = createButton('teleportButton', 'Teleport to cave.', '20px');

  teleportButton.addEventListener('click', function() {
      input.execute('game_teleport -5000 4000');
    }
  );

  document.addEventListener('keydown', function(event) {
    if (event.key === 't' || event.key === 'T') {
      const isHidden = teleportButton.style.display === 'none' || teleportButton.style.display === '';
      teleportButton.style.display = isHidden ? 'block' : 'none';
    }
  });
})();