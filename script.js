function playVideo(videoSrc, redirectUrl) {
	
	// Hide any active text boxes
    const textBoxes = document.querySelectorAll('.text-box');
    textBoxes.forEach(textBox => {
        textBox.style.display = 'none';
    });
    
	const video = document.getElementById('videoPlayer');
    const backgroundImg = document.getElementById('backgroundImg');

    if (video) {
        video.setAttribute('data-redirect', redirectUrl);
        video.src = videoSrc;
        video.style.display = 'block';

        video.oncanplay = function() {
            video.play();
        }
    } else {
        console.warn('videoPlayer element is not found.');
    }

    if (backgroundImg) {
        backgroundImg.style.display = 'none';
    } else {
        console.warn('backgroundImg element is not found.');
    }
}

function redirectAfterVideo() {
    const video = document.getElementById('videoPlayer');
    
    if (video) {
        const redirectUrl = video.getAttribute('data-redirect');
        video.style.display = 'none';

        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    } else {
        console.warn('videoPlayer element is not found.');
    }
}

function changeBackground(bgPath, btnElement, title, body, position) {
    const currentlySelectedIcon = btnElement.querySelector('.radio-icon');
    const container = document.querySelector('.container');
    const defaultBgPath = container.getAttribute('data-default-background');
    const videoElem = document.getElementById('backgroundVideo');
    const imgElem = document.getElementById('backgroundImg');

    if (videoElem) {
        videoElem.style.display = 'none';
    } else {
        console.warn('backgroundVideo element is not found.');
    }

    if (currentlySelectedIcon.src.endsWith("radio_checked.svg")) {
        currentlySelectedIcon.src = "assets/nav/radio.svg";

        if (defaultBgPath.endsWith('.mp4') && videoElem) {
            videoElem.src = defaultBgPath;
            videoElem.style.display = 'block';

            if (imgElem) {
                imgElem.style.display = 'none';
            }
            videoElem.play();  // Ensure the video starts playing
        } else if (imgElem) {
            imgElem.src = defaultBgPath;
            imgElem.style.display = 'block';

            if (videoElem) {
                videoElem.style.display = 'none';
            }
        }

        const textBox = document.getElementById('textBox');
        if (textBox) {
            textBox.style.display = 'none';
        }
        return;
    }

    const radioIcons = document.querySelectorAll(".radio-icon");
    radioIcons.forEach(icon => {
        icon.src = "assets/nav/radio.svg";
    });

    if (bgPath.endsWith('.mp4') && videoElem) {
        videoElem.src = bgPath;
        videoElem.style.display = 'block';

        if (imgElem) {
            imgElem.style.display = 'none';
        }
    } else if (imgElem) {
        imgElem.src = bgPath;
        imgElem.style.display = 'block';

        if (videoElem) {
            videoElem.style.display = 'none';
        }
    }

    currentlySelectedIcon.src = "assets/nav/radio_checked.svg";

    const textBox = document.getElementById('textBox');
    if (textBox) {
        textBox.querySelector('.title').textContent = title;
        textBox.querySelector('.body').innerHTML = body;
        textBox.style.left = position.left + "px";
        textBox.style.top = position.top + "px";
        textBox.style.display = 'block';
    } else {
        console.warn('textBox element is not found.');
    }
}

// Safe check before adding an event listener
const videoPlayerElem = document.getElementById('videoPlayer');
if (videoPlayerElem) {
    videoPlayerElem.addEventListener('ended', redirectAfterVideo);
} else {
    console.warn('videoPlayer element is not found.');
}

// LandScape mode

let mainEle = document.getElementsByClassName('main-html-wrp')[0];
(function () {
    detectPortrait();
    
    window.addEventListener("resize", function() {
        detectPortrait(mainEle);

    });


    function detectPortrait(mainDiv) {
        if (screen.width < screen.height) {
            alert("Please Active Landscape Mode");
            mainEle.classList.add("mystyle-ornt");
        }
        else {
            mainEle.classList.remove("mystyle-ornt");
        }
    }
})();


