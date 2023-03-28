const commentsAvatars = document.querySelector('#commentAvatars');
const findReview = (reviewId) =>{

}

commentsAvatars.addEventListener('click', (e)=> {
    e.preventDefault();

    const target = e.target;
    
    if (target.classList.contains('comments__image'));

    const activeListItem = document.querySelector('.comments__avatar.active');

    if (activeListItem){
        activeListItem.classList.remove('active');

        const button = target.parentElement;
        const ListElement = button.parentElement;
        ListElement.classList.add('active');

        const id = button.getAttribute('data-open');
        
        findReview(id);
    }


});

