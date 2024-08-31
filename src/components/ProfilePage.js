import { useRef, useState } from "react";
import "../App.css"



export const UserProfilePic = () => {
    const [image, setImage] = useState(null);
    const groupProfRef = useRef(null);
    const groupBackRef = useRef(null);

    const handleImageClick = () => {
        // Trigger the file input's click event
        groupProfRef.current.click();
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };
    return (
        <div>

            <div className="container d-flex justify-content-center align-items-center">

                <div className="group-profile-card card">

                    <div className="upper">

                        <img src="https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid" className="img-fluid" />

                    </div>

                    <div className="user text-center">

                        <div className="profile">

                            <img src={`${image ? image : 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg'}`} className="rounded-circle" width="80" onClick={handleImageClick} />

                        </div>

                    </div>

                    <div>

                        <input type="file" accept="image/*" onChange={handleImageChange} ref={groupProfRef}
                            style={{ display: 'none' }} />
                        <input type="file" accept="image/*" onChange={handleImageChange} ref={groupProfRef}
                            style={{ display: 'none' }} />

                    </div>


                    <div className="text-center" style={{ marginTop: '70px' }}>

                        <h4 className="mb-0">Benjamin Tims</h4>
                        <span className="text-muted d-block mb-2">Los Angles</span>

                        <button className="btn btn-primary btn-sm follow">Follow</button>


                        <div className="d-flex justify-content-between align-items-center mt-4 px-4">

                            <div className="stats">
                                <h6 className="mb-0">Followers</h6>
                                <span>8,797</span>

                            </div>


                            <div className="stats">
                                <h6 className="mb-0">Projects</h6>
                                <span>142</span>

                            </div>


                            <div className="stats">
                                <h6 className="mb-0">Ranks</h6>
                                <span>129</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

