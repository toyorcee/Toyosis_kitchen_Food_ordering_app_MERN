import React from "react";
import "./Create.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  // we get the auth slice from the entire state, which is (auth slice)
  // is the userInfo and the token
  const { token } = useSelector((state) => state.auth);

  // type="file", e.target.files[0]
  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCloseImg = () => {
    setImage("");
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      let filename = null;

      if (image) {
        filename = Date.now() + image.name;
        formData.append("filename", filename);
        formData.append("image", image);

        await fetch(`http://localhost:4000/upload/image`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          method: "POST",
          body: formData,
        });
      }

      // uploading product
      const res = await fetch(`http://localhost:4000/product`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review,
        }),
      });

      const food = await res.json();

      navigate(`/food/${food._id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="createcontainer">
      <div className="createwrapper">
        <marquee behavior="" direction="left">
          {" "}
          For Admins Only! For Admins Only! For Admins Only!
        </marquee>
        <h2 className="createtitle">Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className="createinputWrapper">
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title..."
              className="createinput"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="createinputWrapper">
            <label>Description: </label>
            <input
              type="text"
              placeholder="Description..."
              className="createinput"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="createinputWrapper">
            <label>Category: </label>
            <input
              type="text"
              placeholder="Category..."
              className="createinput"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="createinputWrapperImage">
            <label htmlFor="image" className="labelFilecreateinput">
              Image: <span>Upload here</span>
            </label>
            <input
              type="file"
              id="image"
              placeholder="Image..."
              className="createinput"
              onChange={onChangeFile}
              style={{ display: "none" }}
            />
            {image && (
              <p className="imageName">
                {image.name}
                <AiOutlineCloseCircle
                  onClick={handleCloseImg}
                  className="closeIcon"
                />
              </p>
            )}
          </div>
          <div className="createinputWrapper">
            <label>Price: </label>
            <input
              type="number"
              step={0.01}
              placeholder="Price..."
              className="createinput"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="createinputWrapper">
            <label>Review: </label>
            <input
              type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder="Review..."
              className="createinput"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="createbuttonWrapper">
            <button type="submit" className="createsubmitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
