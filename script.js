// Fetch the JSON file
fetch('sounds.json')
  .then(response => response.json())
  .then(sounds => {
    const soundboard = document.getElementById('soundboard');

    // Loop through each sound and create a button
    sounds.forEach(sound => {
      const button = document.createElement('button');
      button.textContent = sound.label;
      button.addEventListener('click', () => {
        const audio = new Audio(sound.file);
        audio.play();
      });
      soundboard.appendChild(button);
    });
  })
  .catch(error => {
    console.error('Error loading sounds:', error);
  });
