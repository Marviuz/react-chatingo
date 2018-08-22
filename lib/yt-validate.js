
export const getEmbedUrl = ($) => {
  // If have value...
  if ($) {
    // Get all youtube videos
    const linkRegex = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig
    const linkMatch = $.match(linkRegex)
  
    // If something matched...
    if (linkMatch) {
      // Get id from the matched URL
      const idRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      // Get only the id of the first match
      const idMatch = linkMatch[0].match(idRegex)
      
      if (idMatch) return `https://www.youtube.com/embed/${idMatch[2]}`
    }
    return null
  }
  return null
}
