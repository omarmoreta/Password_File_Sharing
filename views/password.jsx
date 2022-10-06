const React = require("react")

const Password = (data) => {
    const isError = () => {
        if (data.error) {
            return (
            <div style={{ color: "red", textAlign: "center", marginBottom: "30px"}}>
                Incorrect Password
            </div>)
        }
    }

    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            { isError() }
        <form method="POST" style={{display: "grid", gap: .5 + "rem", gridTemplateColumns: "auto 1fr", maxWidth: 500 + "px", margin: "0 auto"}}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
                <button style={{gridColumn: "span 2"}} type="submit">Dowload</button>
            </form>
        </body>
        </html>
    )
}

module.exports = Password