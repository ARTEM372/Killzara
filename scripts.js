document.addEventListener('DOMContentLoaded', function() {
    // Загрузка видео с YouTube канала
    var channelID = 'UCmjV25DVFf91i6Oyj1juN3Q'; // Ваш ID канала
    var apiKey = 'AIzaSyBrqGum-VO0pnRdBuHOfhdFMYj7oG_dt5Q'; // Ваш API ключ
    var maxResults = 10;
    var videoGallery = document.getElementById('video-gallery');

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(item => {
            if (item.id.kind === 'youtube#video') {
                var videoId = item.id.videoId;
                var videoTitle = item.snippet.title;
                var videoDescription = item.snippet.description;
                
                var videoElement = document.createElement('div');
                videoElement.classList.add('video');
                videoElement.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    <h3>${videoTitle}</h3>
                    <p>${videoDescription}</p>
                `;
                videoGallery.appendChild(videoElement);
            }
        });
    })
    .catch(error => console.error('Ошибка при загрузке видео:', error));
});
