const findBlockByAlias=alias =>{
    return $(".comments__main").filter((ndx,item)=>{
        return $(item).attr("data-item")==alias
    })
}

$(".comments__link"). click(e=>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target=$this.attr("data-open");
    const itemToShow = findBlockByAlias(target);

    const curItem = $this.closest(".comments__avatar");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
});