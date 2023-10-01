import React from "react";

const WorkCard = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  // const dépendant de isActive. Si actif, la classname sera "active" avec le css qui va, sinon "inactive"
  const dvpClassName = isActive ? "workcard-active" : "container";

  const handleDevelop = (metier) => {
    // alert(`Je suis un ${metier}`);
    toggleClass();
  };
  /* props peut s'appeler comme on veut */
  return (
    <div className={dvpClassName} onClick={() => handleDevelop(props.metier)}>
      <h1>{props.metier}</h1>{" "}
      {/* j'ai dû mettre une fonction de rappel , soit () => sinon la fonction s'exécute au démarrage de l'app*/}
    </div>
  );
};

export default WorkCard;
