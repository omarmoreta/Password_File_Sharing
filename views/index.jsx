const React = require("react")

const Index = (data) => {
    const isfileLink = () => {
        if (data.fileLink !=null) {
            return (
            <div style={{ textAlign: "center", marginBottom: "30px"}}>
                File Uploaded: <a href={data.fileLink}>{data.fileLink}</a>
            </div>)
        }
    }

    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document Sharing App</title>
        </head>
        <body>
            {isfileLink()}
            <form action="/upload" method="POST" style={{display: "grid", gap: .5 + "rem", gridTemplateColumns: "auto 1fr", maxWidth: 500 + "px", margin: "0 auto"}} encType="multipart/form-data">
                <label htmlFor="file">File:</label>
                <input type="file" id="file" name="file" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <button style={{gridColumn: "span 2"}} type="submit">Share</button>
            </form>
        </body>
        </html>
    )
}

module.exports = Index