/* MANUALLY EDITABLE GOOGLE REVIEW EXCERPTS
   Verified September 23, 2026. Not a live feed or API connection.
   Keep quotes faithful to the original; update this array to add reviews.
   The full-review destination is the .reviews-more link in index.html. */
const customerReviews = [
  { name: 'Jordanne Murrell', stars: 5, text: 'Everything is made with so much care and intention' },
  { name: 'Veronica Martinez', stars: 5, text: 'Delicious, high quality product!!' },
  { name: 'Ruth Avila', stars: 5, text: 'the most delicious and soft sourdough bread' }
];
const reviewGrid = document.getElementById('customer-reviews');
if (reviewGrid) {
  customerReviews.forEach(review => {
    const card = document.createElement('figure');
    const stars = document.createElement('div');
    stars.className = 'review-stars';
    stars.setAttribute('role', 'img');
    stars.setAttribute('aria-label', review.stars + ' out of 5 stars');
    stars.textContent = '★'.repeat(review.stars);
    const quote = document.createElement('blockquote');
    quote.textContent = '“' + review.text + '”';
    const caption = document.createElement('figcaption');
    const name = document.createElement('strong');
    name.textContent = review.name;
    const source = document.createElement('span');
    source.textContent = 'Google Review · excerpt';
    caption.append(name, source);
    card.append(stars, quote, caption);
    reviewGrid.append(card);
  });
}
