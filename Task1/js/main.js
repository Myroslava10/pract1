"use strict";

/**
 * Handle FAQ section interactions.
 * Clicking an open sign toggles the visibility of the corresponding answer,
 * while closing any other open answers.
 */
const questions = document.querySelectorAll(".faq .question");
document.querySelectorAll(".faq .open_sign").forEach((openSign) => {
  openSign.addEventListener("click", () => {
    const currentQuestion = openSign.closest(".question");

    questions.forEach((question) => {
      question.classList.toggle("open_answer", question === currentQuestion && !question.classList.contains("open_answer"));
    });
  });
});

/**
 * Handle review slider navigation.
 * Clicking arrows moves to the next or previous review, if possible.
 */
const reviews = Array.from(document.querySelectorAll(".reviews .review"));
const rightArrow = document.querySelector(".reviews .controls .right_arrow");
const leftArrow = document.querySelector(".reviews .controls .left_arrow");

rightArrow.addEventListener("click", () => moveReview(1));
leftArrow.addEventListener("click", () => moveReview(-1));

/**
 * Moves the active review based on direction (-1 for left, 1 for right).
 *
 * @param {number} direction - The direction to move (-1 for left, 1 for right).
 */
function moveReview(direction) {
  const currentReview = document.querySelector(".reviews .review.active_review");
  const currentIndex = reviews.indexOf(currentReview);
  const newIndex = currentIndex + direction;

  if (newIndex < 0 || newIndex >= reviews.length) return; // Prevent out-of-bounds navigation

  updateReviews(reviews[newIndex]);
}

/**
 * Updates the review slider by setting the new active review.
 *
 * @param {Element} newActiveReview - The new active review element.
 */
function updateReviews(newActiveReview) {
  reviews.forEach((review, index) => {
    review.classList.toggle("active_review", review === newActiveReview);
    review.classList.toggle("left_review", index < reviews.indexOf(newActiveReview));
    review.classList.toggle("right_review", index > reviews.indexOf(newActiveReview));
  });
}
