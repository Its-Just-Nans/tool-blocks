const fs = require("fs");

try {
    var createSVG = setInterval(() => {
        try {
            let { test } = require("./base.js");
            delete require.cache[require.resolve("./base.js")];
            // we need to delete the file from the cache
            let newSVG = `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <title>Tool blocks logo</title>
    <desc>Logo of the tool-blocks project</desc>
    <metadata>
        <rdf:RDF xmlns:rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/" >
            <rdf:Description dc:title="tool blocks logo">
                <dc:creator>
                    <rdf:Bag>
                        <rdf:li>Its-Just-Nans - n4n5</rdf:li>
                    </rdf:Bag>
                </dc:creator>
            </rdf:Description>
        </rdf:RDF>
    </metadata>
    ${test}
</svg>`;
            fs.writeFileSync("./tool-blocks_logo.svg", newSVG);
            console.log("ok");
        } catch (e) {
            console.log(e);
            clearInterval(createSVG);
        }
    }, 2000);
} catch (e) {
    console.error(e);
}
