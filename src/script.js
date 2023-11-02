const scrollContainer = document.querySelector(".scroller");

                        scrollContainer.addEventListener("wheel", (evt) => {
                            evt.preventDefault();
                            scrollContainer.scrollLeft += evt.deltaY;
                        });