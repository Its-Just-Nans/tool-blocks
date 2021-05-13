<script>
    let titleName = "lol";
    let srcIframe = "./blocks/test/index.html";
    const allMenus = window.api.getMenus();

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let color = getRandomColor();

    function changeMenu(index) {
        const menu = allMenus[index];
        const preloadLink = allMenus[index].preload;
        const newIframeSrc = allMenus[index].src;
        const ifrmElement = document.getElementById("iframe");
        let iframeWindow = ifrmElement.contentWindow;
        setTimeout(() => {
            const prealoadRequire = window.api.getBlock(preloadLink || "") || {};
            iframeWindow.block = prealoadRequire;
            iframeWindow.kk = { a: "notB" };
        }, 11);
        srcIframe = newIframeSrc;
    }
    window.addEventListener("DOMContentLoaded", () => {
        const indexStartMenu = allMenus.findIndex((element) => {
            return element.name == "test";
        });
        changeMenu(indexStartMenu);
    });
</script>

<nav style="--globalColor: {color}">
    {#each allMenus as { name }, index}
        <div>
            <p
                on:click={() => {
                    changeMenu(index);
                }}
            >
                {name}
            </p>
        </div>
    {/each}
</nav>
{#if srcIframe != ""}
    <iframe id="iframe" style="--globalColor: {color}" title={titleName} src={srcIframe} />
{/if}

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
