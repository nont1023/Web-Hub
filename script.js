function changeContent(section) {
    const iframe = document.getElementById('contentFrame');
    const nav = document.getElementById('navButtons');
    let url = '';

    if (section === 'home') {
        iframe.src = '';
        nav.classList.add('centered');
        nav.classList.remove('top');
    } else {
        if (section === 'movie') {
            url = 'https://nont1023.github.io/My-project-for-Portfolio-only/';
        } else if (section === 'music') {
            url = 'https://nont1023.github.io/Music-Web-Project/';
        } else if (section === 'game') {
            url = 'https://nont1023.github.io/Game-Lobby-Web-Project/';
        }

        iframe.src = url;
        nav.classList.remove('centered');
        nav.classList.add('top');
    }
}
