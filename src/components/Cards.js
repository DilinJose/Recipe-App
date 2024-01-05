import  { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(61, 60, 60)",
    overflow: "auto",
    height: "80%",
  },
  overlay: {
    backgroundColor: "transparent",
  },
};

const style = {
  color: "white",
  textDecoration: "none",
};

const style1 = {
  color: "black",
  textDecoration: "none",
};
const Cards = ({ recipes }) => {
  const [ingred, setIngred] = useState();
  const [url, setUrl] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleIngrediants = (index) => {
    setIngred(recipes[index]?.recipe.ingredients.map((data) => data.text));
    setUrl(recipes[index]?.recipe.url);
  };
  const handleRecipe = (index) => {
    setUrl(recipes[index]?.recipe.url);
  };

  return (
    <div className="sections container-fluid row d-flex flex-row justify-content-evenly align-items-center flex-wrap">
      {recipes.map(({ recipe }, i) => {
        return (
          <div className="card m-2 " style={{ width: "18rem" }}>
            <img
              src={recipe.image}
              className="card-img-top mt-2"
              alt="Not found"
              width={50}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{recipe.label}</h5>
              <h6 className="text-center">{recipe.dishType}</h6>
              <div className="text-center">
                <span>(Calories:{Math.floor(recipe.calories)})</span>
              </div>

              <div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm m-1 w-100 "
                    onClick={() => {
                      handleIngrediants(i);
                      openModal();
                    }}
                  >
                    Ingredients
                  </button>

                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div style={{display:"flex",justifyContent:"between",flexDirection:"column"}} >
                      <div>
                        <div className="d-flex justify-content-between ">
                          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                            Ingredients
                          </h2>
                          <button
                            className="btn-close"
                            onClick={closeModal}
                          ></button>
                        </div>

                        <div className="m-4">
                          {ingred?.map((data) => {
                            return (
                              <ul>
                                <li style={{ color: "white" }}>{data}</li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <a
                          style={style}
                          className="btn-recipe"
                          target="blank"
                          href={url}
                        >
                          <button className=" btn btn-primary btn-sm w-100">
                            Recipe
                          </button>
                        </a>
                      </div>
                    </div>
                  </Modal>
                </div>

                <button
                  onClick={() => {
                    handleRecipe(i);
                  }}
                  className="btn btn-outline-secondary btn-sm m-1 w-100"
                >
                  <a style={style1} href={url} target="blank">
                    See complete recipe
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> <Card index={i} recipe={recipe} recipes={recipes} />  */}

      {/* <Card/> */}
    </div>
  );
};

export default Cards;
