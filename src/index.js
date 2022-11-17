const app = require('./app');

app.listen(process.env.PORT || 3000, function () {
    console.log("express escuchando en el puerto", this.address().port, app.settings.env);
})