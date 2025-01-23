# Meme Soundboard

This is a simple meme soundboard that I made for my girlfriend. I might be adding more sounds and effects over time.
It is automatically deployed with Netlify and can be seen [here](https://sonideromeme.netlify.app/).

I do not own any of these sounds, they are property of their respective owners.

## Adding new sounds

Do you want to add new sounds? New sounds are welcome!

1. Clone this repo
2. Add your new sound in mp3 format (other formats might work but I have not tried) to the sounds/ directory
3. Add a new entry to the `sounds.json` file in the following format:

``` json
 { "label": "Name of sound", "file": "sounds/your-sound.mp3" }
 ```

 4. Push your changes and submit a PR!