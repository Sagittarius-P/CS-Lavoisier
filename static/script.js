//--- Account ---//

const connectBtn = document.getElementById("head-account-btn");

connectBtn.addEventListener("click", function (e) {
    const WaveEffect = 'head-account-wave-effect-btn';

    const BfrWaveEffect = this.querySelector(`.${WaveEffect}`);
    if (BfrWaveEffect) {
        BfrWaveEffect.remove();
    }

    const CrlWave = document.createElement("span");
    const CrlDmtrWave = Math.max(this.clientWidth, this.clientHeight);
    const CrlRadiusWave = CrlDmtrWave / 2;

    const WaveRect = this.getBoundingClientRect();
    CrlWave.style.position = "absolute";
    CrlWave.style.width = CrlWave.style.height = `${CrlDmtrWave}px`;
    CrlWave.style.left = `${e.clientX - WaveRect.left - CrlRadiusWave}px`;
    CrlWave.style.top = `${e.clientY - WaveRect.top - CrlRadiusWave}px`;

    CrlWave.classList.add(WaveEffect)

    this.appendChild(CrlWave)
});

//--- Directions Text ---//

const headDirectionsWrapper = document.querySelectorAll(".head-directions-wrapper");
const headDirectionsText = document.querySelectorAll(".head-directions-text");
const directionCardContainer = document.querySelector(".direction-card-container");

const directionCardMainTitle = document.getElementById("direction-card-mainTitle");

function setBeforeHeadDirectionsTextBgColor(element, color) {
    if (!element.id) {
        element.id = `HeadDirectionsTextrandomBgColorsIt-before-` + Math.random().toString(36).substring(2, 9);
    }

    const StyleTag = document.createElement("style");

    StyleTag.textContent = `#${element.id}::before {background-color: ${color}}`;
    document.head.appendChild(StyleTag);
}

function getBeforeHeadDirectionTextBgColor(element) {
    if (!element) return null;

    const computedStyle = window.getComputedStyle(element, '::before');
    return computedStyle.getPropertyValue('background-color');
}

function getBeforeHeadDirectionTextContent(element) {
    if (!element) return null;

    return element.textContent;
}

const HeadDirectionsTextrandomBgColors = ['#00000081', '#ff404072', '#f58d4271', '#1849fa6c', '#ecad0d62', '#8940216c', '#ff000073']


headDirectionsWrapper.forEach((headDirectionWrapper, index) => {
    const headDirectionText = headDirectionsText[index];

    setBeforeHeadDirectionsTextBgColor(headDirectionText, HeadDirectionsTextrandomBgColors[index]);

    headDirectionWrapper.addEventListener("mousemove", () => {
        directionCardContainer.classList.add("active");
        directionCardContainer.style.backgroundColor = getBeforeHeadDirectionTextBgColor(headDirectionText);
        directionCardMainTitle.textContent = getBeforeHeadDirectionTextContent(headDirectionText);
    });

    headDirectionWrapper.addEventListener("mouseleave", () => {
        directionCardContainer.classList.remove("active");
    });
});

directionCardContainer.addEventListener("mousemove", () => {
    directionCardContainer.classList.add("active");
});
directionCardContainer.addEventListener("mouseleave", () => {
    directionCardContainer.classList.remove("active");
});


//--- Progress Apparition ---//

const mainIllustrationPresentationContainer = document.querySelector(".mainIllustrationPresentation-container");
const mainIllustrationPresentation = document.getElementById("mainIllustrationPresentation-mainIllustrationPresentation");


window.addEventListener("DOMContentLoaded", () => {
    mainIllustrationPresentation.classList.add("active");
});

//--- Mouse React Main Illustration ---//


mainIllustrationPresentationContainer.addEventListener("mousemove", (e) => {
    const mainIllustrationPresentationContainerRect = mainIllustrationPresentationContainer.getBoundingClientRect();
    let MICy = e.clientY - mainIllustrationPresentationContainerRect.top;

    MICy = Math.min(Math.max(0, MICy), 350)

    mainIllustrationPresentationContainer.style.setProperty('--y', `${MICy}px`)
});

mainIllustrationPresentationContainer.addEventListener("mouseenter", () => {
    mainIllustrationPresentationContainer.style.setProperty('--transition', '0.3s ease');
    mainIllustrationPresentationContainer.style.setProperty('--scaleTransform', '1');
});

mainIllustrationPresentationContainer.addEventListener("mouseleave", () => {
    mainIllustrationPresentationContainer.style.setProperty('--scaleTransform', '0.8');
    mainIllustrationPresentationContainer.style.setProperty('--transition', '0.3s ease');
});