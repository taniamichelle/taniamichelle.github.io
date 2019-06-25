class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        //references
        this.left = document.querySelector('.left-button')
        this.right = document.querySelector('.right-button')
        this.imgs = document.querySelectorAll('.carousel img')
        //current Index
        this.currentIndex = 0;
        //current img to display
        this.currentImg = this.imgs[this.currentIndex];
        this.currentImg.style.display = 'block';
        //event listeners
        this.left.addEventListener('click', () => this.previous());
        this.right.addEventListener('click', () => this.next());
    }
    previous() {
        const imgs = document.querySelectorAll('.carousel img');
        //display none on each image
        imgs.forEach(image => image.style.display = 'none');
        //currentIndex minus 1 when clicking left arrow
        this.currentIndex -= 1;
        //if the current index is less than 0 then loop to end
        if (this.currentIndex < 0) {
            this.currentIndex = 3;
        }
        //if the current index is greater than 3 then loop to beginning (since theres only 4 images total)
        //could use imgs.length etc.
        if (this.currentIndex > 3) {
            this.currentIndex = 0;
        }
        //displays block on the current image on the current index
        this.imgs[this.currentIndex].style.display = 'block';
    }
    next() {
        const imgs = document.querySelectorAll('.carousel img');
        //display none for each image
        imgs.forEach(image => image.style.display = 'none');
        //currentindex + 1 when clicking next arrow
        this.currentIndex += 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 3;
        }
        if (this.currentIndex > 3) {
            this.currentIndex = 0;
        }
        this.imgs[this.currentIndex].style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
