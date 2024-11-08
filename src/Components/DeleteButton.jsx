// function DeleteButton() {
//   const removeComment = () => {
//     deleteComment(comment_id)
//       .then(() => {
//         console.log("Comment deleted");
//         setComments((currentComments) => {
//           return currentComments.filter((comment) => comment.comment_id !== comment_id);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//       {author === loggedInUser.username ? (
//         <button className="btn btn-secondary" onClick={removeComment}>
//           Delete
//         </button>
//       ) : null}
//     </>
//   );
// }

// export default DeleteButton;
