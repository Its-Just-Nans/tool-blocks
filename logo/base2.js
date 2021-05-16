const a1 = "78,104";
const a3 = "338,131";
const a4 = "172,155";

const bande2 = "268,141";
const bande1 = "242,145";

const matrice = "matrix(1,-0.14,0,1,0,0)";
const matrice2 = "matrix(1,-0.14,0,1,0,-5)";
const matrice3 = "matrix(0.55,-0.1,0,0.55,175,322)";
const matrice4 = "matrix(0.55,-0.1,0,0.55,189,319)";

const blockText = `<text transform="${matrice}" x="300" y="190" font-size="7" font-family="monospace">`;
const colorFront = "#cba16f";

const svg = `<polyline points="${a1} 243,80 ${a3}  ${a4}" fill="#ddbb8b" stroke="#ddbb8b" stroke-width="0" />
        <polyline points="172,338 338,313 ${a3} ${a4}" fill="#cba16f" stroke="#cba16f" stroke-width="0" />
        <polyline points="${a1} 78,287 172,338 ${a4}" fill="#b5824d" stroke="#b5824d" stroke-width="0" />
        <polyline points="148,94 175,90 ${bande2} ${bande1}" fill="#cb9861" stroke="#cb9861" stroke-width="0" />
        <polyline points="${bande2} ${bande1} 242,211 243,212 246,209 248,211 251,209 253,210 255,208 257,210 260,207 262,209 265,207 267,208 268,207" fill="#b67a44" stroke="#b67a44" stroke-width="0" />
        <path transform="${matrice3}" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
        <path transform="${matrice4}" d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path>
        <!-- NPM logo -->
        <g transform="matrix(0.6,-0.09,0,0.6,205,321)">
        <path fill="black" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/>
        <polygon fill="${colorFront}" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/>
        <path fill="${colorFront}" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/>
        <polygon fill="${colorFront}" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/>
    </g>`;
exports.svg2 = `    <g transform="matrix(1.75,0,0,1.75,-120,-120)">
        ${svg}
        <text transform="matrix(1,-0.145,0,1,0,0)" x="300" y="357" font-size="7" font-family="monospace" >JS inside</text>
        <text transform="matrix(1,-0.13,0,1,0,0)" x="180" y="190" font-size="7" font-family="monospace">tool-blocks</text>
        <text transform="matrix(1,-0.13,0,1,0,0)" x="300" y="187" font-size="7" font-family="monospace">block 1</text>
    </g>`;
