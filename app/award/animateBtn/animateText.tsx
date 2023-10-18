// Import React and useState, useEffect hooks
"use client"
import React, { useState, useEffect } from "react";

// Define a component that takes the text as a prop
function TextWithAnimation({ text }: { text:any}) {
  // Use a state variable to store the animation class
  const [animationClass, setAnimationClass] = useState("");

  // Use an effect hook to update the animation class based on the text length
  useEffect(() => {
    // Check the length of the text
    if (text.length > 50) {
      // Set the animation class to scroll-rtl
      setAnimationClass("scroll-rtl");
    } else {
      // Set the animation class to empty
      setAnimationClass("");
    }
  }, [text]); // Run the effect whenever the text prop changes

  // Return the JSX element with the text and the animation class
  return <div className={animationClass}>{text}</div>;
}

// Export the component
export default TextWithAnimation;