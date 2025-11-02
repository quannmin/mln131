/**
 * Utility function to render content with inline quotes
 * Converts **"text"** into styled italic quote blocks
 */
export const renderContentWithQuotes = (content) => {
  if (!content) return null;

  // Split content by bold quotes pattern: **"..."**
  const parts = content.split(/(\*\*"[^"]+"\*\*)/g);

  return parts.map((part, index) => {
    // Check if this part is a bold quote
    const quoteMatch = part.match(/\*\*"([^"]+)"\*\*/);

    if (quoteMatch) {
      const quoteText = quoteMatch[1];
      return (
        <span
          key={index}
          className="block my-3 px-4 py-2 bg-gradient-to-r from-vietnam-yellow/10 to-vietnam-red/10 border-l-4 border-vietnam-yellow rounded-r-lg italic text-slate-100 font-medium"
        >
          "{quoteText}"
        </span>
      );
    }

    // For non-quote parts, preserve line breaks and bold text
    return (
      <span key={index} className="whitespace-pre-line">
        {part.split(/(\*\*[^*]+\*\*)/g).map((subPart, subIndex) => {
          const boldMatch = subPart.match(/\*\*([^*]+)\*\*/);
          if (boldMatch) {
            return <strong key={subIndex}>{boldMatch[1]}</strong>;
          }
          return subPart;
        })}
      </span>
    );
  });
};
