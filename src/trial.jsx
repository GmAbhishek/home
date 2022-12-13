import React from "react"
import img from "./imgs/logo.png"
import "./trial.css"

export default function Fun() {
    return (
        <>
            <body>
                <header>
                    <div >
                        <h1>Home</h1>
                        <h1>Gallery</h1>
                        <h1>Event</h1>
                        <img src={img} alt={"image"} className="it" />
                        <h1>Upload</h1>
                        <h1>Support</h1>
                        <h1>Login</h1>
                    </div>
                </header>
                       <content className="content">
                    <br />
                    <hr />
                    <h1>UPLOADS</h1>
                    <hr />
                    <br />
                    <h1>Upload Files Here</h1>
                    <h2>Supported formats: */*</h2>
                    <div>
                    <input form={"label"} type={"file"}>
                    </input>
                        <h2>drop a file here </h2>
                    </div>

                </content>

                <footer>
                    <div>
                        <h1>Contact Us: </h1>
                        <h1><a href="#" target={"_blank"}>fb</a></h1>
                        <h1><a href="#" target={"_blank"}>insta</a></h1>
                        <h1><a href="#" target={"_blank"}>tweet</a></h1>
                        <h1><a href="#" target={"_blank"}>yt</a></h1>

                    </div>
                </footer>

            </body>
        </>
    )

}
