var bodyX = document.querySelector('body');
var loaderContainerX = document.getElementById('loader-ContainerX');

bodyX.onload = function() {
    setTimeout(() => {
        loaderContainerX.classList.toggle('loaded');        
    }, 2000);
}