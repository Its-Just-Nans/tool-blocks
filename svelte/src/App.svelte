<script>
    let titleName = "lol";
    let srcIframe = "./blocks/test/index.html";
    console.log(window.api.getMenus());

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let color = getRandomColor();
</script>

<nav style="--globalColor: {color}" />
<iframe style="--globalColor: {color}" title={titleName} src={srcIframe} />

<style>
    * {
        box-sizing: border-box;
        --NavBarWidth: 35vh;
        --NavBarWidthMin: 275px;
    }
    nav {
        overflow-y: auto;
    }
    nav::-webkit-scrollbar {
        width: 10px;
    }
    nav::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    nav::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
    iframe {
        position: absolute;
        width: calc(100vw - var(--NavBarWidth));
        max-width: calc(100vw - var(--NavBarWidthMin));
        height: 100vh;
        right: 0px;
        border: 0px;
        border-left: 2px solid var(--globalColor);
    }
    nav {
        position: absolute;
        width: var(--NavBarWidth);
        min-width: var(--NavBarWidthMin);
        height: 100vh;
        top: 0px;
    }
</style>
