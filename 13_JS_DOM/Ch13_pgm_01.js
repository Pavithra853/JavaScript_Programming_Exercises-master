// Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// 4. Loop through the nodeList and get the text content of each paragraph
// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

// Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// 3. Set text content, id and class to each paragraph

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation</title>
</head>
<body>
  <p>First Paragraph</p>
  <p>Second Paragraph</p>
  <p>Third Paragraph</p>
  <p>Fourth Paragraph</p>

  <script>
    // 1. Get the first paragraph by tag name
    const firstParagraph = document.querySelector('p');
    console.log('First Paragraph by Tag Name:', firstParagraph.textContent);
    const firstById = document.querySelector('#first');
  const secondById = document.querySelector('#second');
  const thirdById = document.querySelector('#third');
  const fourthById = document.querySelector('#fourth');

  console.log('Paragraph by ID:', firstById.textContent);
  console.log('Paragraph by ID:', secondById.textContent);
  console.log('Paragraph by ID:', thirdById.textContent);
  console.log('Paragraph by ID:', fourthById.textContent);
</script>
  </script>
</body>
</html>
