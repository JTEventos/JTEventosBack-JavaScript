const app = require("./app");

async function main() {
    try {
        app.listen(app.get("port"), () => {
            console.log(`Express listening on port: ${app.get("port")}`);
            console.log(`Express in mode: ${app.get("env")}`);
        });
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

main();
