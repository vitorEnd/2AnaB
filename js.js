// Seleciona os elementos
const body = document.body;
const toggleBtn = document.getElementById('toggleBtn');

// Lista de classes de temas. 
// 'light-mode' é o padrão (sem classe extra no array, mas está no HTML inicial)
// A lógica irá ciclar: Padrão -> dark-mode -> photo-mode -> Padrão...
const themes = ['light-mode', 'dark-mode', 'photo-mode'];
let currentThemeIndex = 0;

toggleBtn.addEventListener('click', () => {
    // 1. Remove a classe do tema atual
    body.classList.remove(themes[currentThemeIndex]);
    
    // 2. Calcula o próximo índice (0 -> 1 -> 2 -> 0...)
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    
    // 3. Adiciona a classe do novo tema
    body.classList.add(themes[currentThemeIndex]);
    
    console.log(`Tema alterado para: ${themes[currentThemeIndex]}`);
});