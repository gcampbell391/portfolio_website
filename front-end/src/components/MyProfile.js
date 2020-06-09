import React from "react"

const MyProfile = () => {
    return (
        <div className="myProfile">
            <img src="data:image/jpeg;base64,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" id="selfieImg" alt="Selfie" />
            <h1 id="nameProfileHeader">Gene A. Campbell III</h1>
            <h2 id="bioProfileHeader">Full Stack Software Engineer</h2>
        </div>
    )
}

export default MyProfile