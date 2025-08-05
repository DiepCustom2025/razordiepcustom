(function() {
  'use strict';

  function createButton(id, text, left) {
    const button = document.createElement('button');
    button.id = id;
    Object.assign(button.style, {
      position: 'fixed',
      left: left,
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

  let isMovementEnabled = true;
  const movementButton = createButton('movementButton', 'Net Predict Is True', '20px');

  movementButton.addEventListener('click', function() {
    if (isMovementEnabled) {
      input.execute('net_predict_movement false');
      movementButton.textContent = 'Net Predict Is False';
    } else {
      input.execute('net_predict_movement true');
      movementButton.textContent = 'Net Predict Is True';
    }
    isMovementEnabled = !isMovementEnabled;
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'x' || event.key === 'X') {
      const isHidden = movementButton.style.display === 'none' || movementButton.style.display === '';
      movementButton.style.display = isHidden ? 'block' : 'none';
    }
  });
})();