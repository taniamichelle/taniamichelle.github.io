class Carousel {
    constructor(carouselElement) {

        //assign this.carouselElement to carouselElement DOM reference
        this.carouselElement = carouselElement;
        //console.log('current carouselElement: ', this.carouselElement);

        //left button
        this.left = carouselElement.querySelector('.left-button');
        //console.log('left button: ', this.left);

        //right button
        this.right = carouselElement.querySelector('.right-button');
        //console.log('right button: ', this.right)

        //get el w/ class img from carouselElement
        this.images = carouselElement.querySelectorAll('img');
        //console.log('list of images: ', this.images);

        //first img to show is last item in the img list (this.images)
        this.index = this.images.length - 1;
        //console.log('index of last el in this.images: ', this.index);

        //add class 'on' to the last el in this.images by default
        this.images[this.index].classList.add('on');
        //console.log('the last img w/ on class added: ', this.images[this.index]);

        //displays last el in this.images by default
        this.images[this.index].style.display = 'block';

        //if left arrow clicked, subtract one from this.index and call the selectLR() method
        //console.logs what was clicked and the current value of this.index
        this.left.addEventListener('click', () => { --this.index; this.selectLR(); console.log('clicked left', this.index) });
        this.right.addEventListener('click', () => { ++this.index; this.selectLR(); console.log('clicked right', this.index) });
    }
    //selectLR stands for select(ed) Left or Right(button)
    selectLR() {
        //removes the 'on' class from every image
        this.images.forEach((image) => { image.classList.remove('on'); image.style.display = 'none' })
        console.log(this.images)

        //this.index is greater than the length of this.images array -1
        if (this.index > this.images.length - 1) {

            //adds the class 'on' to the first el in this.images
            this.images[0].classList.add('on');
            //console.log("this.images[0] w/ class 'on'", this.images[0]);

            //resets the index to 0
            this.index = 0;

            //this.index is a negative number(least neg value possible is -1)
        } else if (this.index < 0) {

            //adds 'on' class to last el in this.images
            this.images[this.images.length - 1].classList.add('on');
            //console.log("this.images[this.images.length-1] w/ class 'on'", this.images[this.images.length-1])

            //resets index to equal the length of this.images-1
            this.index = this.images - length - 1;

            //this.index is w/in the bounds of this.images list
        } else {

            //adds 'on' class to the image at this.index
            this.images[this.index].classList.add('on');
        }

        //loops through the images to find the img w/ the class 'on' and displayes that img
        this.images.forEach((image) => {
            if (image.classList[0] === 'on') {
                image.style.display = 'block';
            }
        })
    }
}
// gets the element with carousel class
let carousel = document.querySelector(".carousel");
// console.log(“carousel element”, carousel)

// makes carousel and instance of the class Carousel
new Carousel(carousel);