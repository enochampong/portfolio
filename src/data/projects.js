import FruitBasket from '../../public/fruitBasket.png';
import Kunstaushang from '../../public/kunstaushang.png';
import KeyZoom from '../../public/keyzoom.png';

const projects = [
    {
        title: 'Fruit Basket',
        description: `
        This is a simple game implemented using HTML, CSS, and JavaScript,
        with the DOM (Document Object Model) manipulation. In this game, your
        goal is to catch falling fruits in a basket by moving it left and
        right using the arrow keys. Each fruit successfully caught will earn
        you points, while missing a fruit will deduct points from your score.
        You start with 10 lives, and the game will end when you reach a
        certain score or when you run out of lives.`,
        image: FruitBasket,
        viewLink: 'https://github.com/enochampong/fruitBasketGame',
        techsUsed: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Kunstaushang',
        description: `
          We present a full-stack image gallery website that allows the user to
          upload pictures, signing up with a profile picture and a search option
          for images in the unsplashed database by using its API. ## FEATURES -
          User Sign-up with authentication and profile picture upload - User
          login and logout - Uploading and storing user pictures, which can be
          viewed under the tab "User pictures" - Searching for images in the
          Gallery.`,
        image: Kunstaushang,
        viewLink: '',
        techsUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'Node', 'MongoDB', 'Cloudinary', 'Unsplash API']
    },
    {
        title: 'Key Zoom',
        description: `
            Keyzoom is a startup initiative whereby clients can log into the web
            app and register to receive an invoice and we will  keep the spare key of the
            client and ready to ship to the client as soon as requested.`,
        image: KeyZoom,
        viewLink: '',
        techsUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'Node', 'MongoDB']
    },
]

export default projects;