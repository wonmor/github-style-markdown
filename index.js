const parseMarkdown = (text) => {
    // Split the text into lines
    const lines = text.split(/\n/);
  
    // Process each line
    const processedLines = lines.map(line => {
      // Replace double asterisks or underscores with <strong>
      line = line.replace(/(\*\*|__)(.*?)(\*\*|__)/g, "<strong>$2</strong>");
  
      // Replace single asterisks or underscores with <em>
      line = line.replace(/(\*|_)(.*?)(\*|_)/g, "<em>$2</em>");
  
      // Replace text starting with > to a highlighted quote
      if (line.startsWith("> ")) {
        line = line.replace(/^> ((?:(?!\n).)*)(\n|$)/g, '<blockquote class="blockquote-highlight">$1</blockquote>');
      } else {
        // Wrap non-quote lines in <p> tags
        line = `<p>${line}</p>`;
      }
  
      return line;
    });
  
    // Join the processed lines back together with <br/> as separator
    return processedLines.join('<br/>');
  };
  
  module.exports = parseMarkdown;
  