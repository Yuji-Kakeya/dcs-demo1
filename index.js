const app = require("express")();
const env = process.env;

app.listen(80);
const data = {
    hostName: env.HOSTNAME,
    nodeName: env.NODENAME
}

app.get("/*", (req,res)=> {
    res.end(JSON.stringify(data));
});

