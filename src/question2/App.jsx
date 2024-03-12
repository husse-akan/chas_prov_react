// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import React, { useState, useEffect } from "react";

function App() {
  const [publish, setPublish] = useState([]);

  useEffect(() => {
    const fetchPublish = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPublish(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPublish();
  }, []);

  const handleButtonClick = (postId) => {
    console.log("Post ID:", postId);
  };

  return (
    <div>
      {publish.map((post) => (
        <div key={post.id}>
          <button onClick={() => handleButtonClick(post.id)}>
            {post.title}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
