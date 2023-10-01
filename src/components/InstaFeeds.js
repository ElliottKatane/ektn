import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Feed from "./Feed";

const InstaFeeds = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  // Utilisez useRef pour stocker la dernière valeur de la propriété sans déclencher l'effet
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    // Ceci est pour éviter les fuites de mémoire
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`
        );
        setFeedsData(response.data.data);
      } catch (err) {
        console.error("Erreur Axios :", err);
      }
    }

    // Appelez manuellement la fonction fetch
    fetchInstagramPost();

    return () => {
      // Annulez la demande de recherche en attente à la démontage du composant
      abortController.abort();
    };
  }, [props.limit, tokenProp]);

  return (
    <div className="container">
      {feeds.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default InstaFeeds;
